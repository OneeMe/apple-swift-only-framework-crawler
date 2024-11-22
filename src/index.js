const crawlAppleDocs = require('./crawler');
const fs = require('fs').promises;
const path = require('path');

function comparePlatforms(a, b) {
  // 首先按平台名称排序
  if (a.platform !== b.platform) {
    return a.platform.localeCompare(b.platform);
  }

  // 如果平台相同，则按introducedAt排序
  const versionA = a.introducedAt === 'Unknown' ? Infinity : parseFloat(a.introducedAt);
  const versionB = b.introducedAt === 'Unknown' ? Infinity : parseFloat(b.introducedAt);

  return versionA - versionB;
}

function generateMarkdownTable(data, isChinese = false) {
  // 根据语言选择表头
  const headers = isChinese
    ? ['序号', '标题', 'URL', '平台', '引入版本']
    : ['Index', 'Title', 'URL', 'Platform', 'Introduced At'];

  let markdown = '';

  // 生成表头
  markdown += `| ${headers.join(' | ')} |\n`;
  markdown += '|' + headers.map(() => '-------').join('|') + '|\n';

  // 生成表格内容
  data.forEach((item, index) => {
    markdown += `| ${index + 1} | ${item.title} | [${item.url}](${item.url}) | ${item.platform} | ${item.introducedAt} |\n`;
  });

  return markdown;
}

async function updateReadmeFiles(tableContent) {
  const files = [
    { path: 'README.md', isChinese: false },
    { path: 'README-CN.md', isChinese: true }
  ];

  for (const file of files) {
    // 读取现有的 README 文件
    const readmePath = path.join(__dirname, '..', file.path);
    const content = await fs.readFile(readmePath, 'utf8');

    // 生成对应语言的表格
    const newTable = generateMarkdownTable(tableContent, file.isChinese);

    // 使用正则表达式找到表格部分并替换
    const updatedContent = content.replace(
      /\| (?:Index|序号) \|[\s\S]*?(?=\n\s*$)/m,
      newTable.trim()
    );

    // 更新日期
    const date = new Date().toISOString().split('T')[0];
    const updatedContentWithDate = updatedContent.replace(
      /> 日期: .*|> Date: .*/,
      file.isChinese ? `> 日期: ${date}` : `> Date: ${date}`
    );

    // 写入更新后的内容
    await fs.writeFile(readmePath, updatedContentWithDate, 'utf8');
    console.log(`已更新 ${file.path}`);
  }
}

async function main() {
  console.log('开始爬取 Apple 文档...');
  const swiftOnlyFrameworks = await crawlAppleDocs();

  // 对结果进行排序
  swiftOnlyFrameworks.sort(comparePlatforms);

  console.log('只支持 Swift 的框架:');
  console.table(swiftOnlyFrameworks);

  // 更新 README 文件
  await updateReadmeFiles(swiftOnlyFrameworks);
  console.log('README 文件已更新');
}

main().catch(console.error);
