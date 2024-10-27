const crawlAppleDocs = require('./crawler');

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

async function main() {
  console.log('开始爬取 Apple 文档...');
  const swiftOnlyFrameworks = await crawlAppleDocs();

  // 对结果进行排序
  swiftOnlyFrameworks.sort(comparePlatforms);

  console.log('只支持 Swift 的框架:');
  console.table(swiftOnlyFrameworks);
}

main();
