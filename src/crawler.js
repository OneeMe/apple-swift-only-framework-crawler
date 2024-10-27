const axios = require('axios');

const BASE_URL = 'https://developer.apple.com/tutorials/data/documentation/';
const TECHNOLOGIES_URL = `${BASE_URL}technologies.json`;

async function fetchFrameworkDetails(identifier) {
  const detailUrl = `${BASE_URL}${identifier.split('/').pop()}.json`;
  try {
    const response = await axios.get(detailUrl);
    return response.data;
  } catch (error) {
    console.error(`获取框架详情失败: ${identifier}`, error.message);
    return null;
  }
}

async function crawlAppleDocs() {
  try {
    console.log('开始获取 Apple 文档数据...');
    const response = await axios.get(TECHNOLOGIES_URL);
    const data = response.data;

    console.log('数据获取成功，开始解析...');
    const swiftOnlyTechnologies = [];
    const skipTechnologies = [
      'Technology Updates',
      'Swift',
      'watchOS apps',
      'Xcode Cloud',
      'visionOS',
      'Swift packages',
      'QuickTime File Format',
      'HTTP Live Streaming',
      'TVML',
      'tvOS',
      'iOS',
      'macOS',
      'watchOS',
      'visionOS',
      'Apple Silicon',
      'iOS & iPadOS Release Notes',
      'macOS Release Notes',
      'Safari Release Notes',
      'tvOS Release Notes',
      'visionOS Release Notes',
      'watchOS Release Notes',
      'Xcode Release Notes',
      'Analytics Reports',
      'Safari Developer Features',
      'SecureElementCredential',
      'Playground Support',
      'ShaderGraph',
      'PackageDescription',
      'Swift Playgrounds',
      'Technotes',
      'Xcode'
    ];

    // 遍历所有技术，收集只支持 Swift 的技术
    for (const section of data.sections) {
      if (section.kind === 'technologies') {
        for (const group of section.groups) {
          for (const tech of group.technologies) {
            if (skipTechnologies.includes(tech.title)) {
              continue;
            }
            if (tech.languages && tech.languages.length === 1 && tech.languages[0] === 'swift') {
              swiftOnlyTechnologies.push(tech);
            }
          }
        }
      }
    }

    console.log(`找到 ${swiftOnlyTechnologies.length} 个只支持 Swift 的技术，开始获取详细信息...`);

    // 使用 Promise.all 并行获取所有框架的详细信息
    const frameworkDetailsPromises = swiftOnlyTechnologies.map(async (tech) => {
      const details = await fetchFrameworkDetails(tech.destination.identifier);
      if (details) {
        const url = `https://developer.apple.com/documentation/${tech.destination.identifier.split('/').pop()}`;
        const platform = details.metadata.platforms ? details.metadata.platforms[0] : { name: 'Unknown', introducedAt: 'Unknown' };
        return {
          title: tech.title,
          url: url,
          platform: platform.name,
          introducedAt: platform.introducedAt
        };
      }
      return null;
    });

    const swiftOnlyFrameworks = (await Promise.all(frameworkDetailsPromises)).filter(Boolean);

    console.log(`解析完成，共找到 ${swiftOnlyFrameworks.length} 个只支持 Swift 的框架`);
    return swiftOnlyFrameworks;
  } catch (error) {
    console.error('获取或解析数据时出错:', error);
    return [];
  }
}

module.exports = crawlAppleDocs;
