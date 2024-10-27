# Apple Swift-Only Frameworks Crawler

这个项目是一个网络爬虫,用于获取和分析Apple的开发者文档,以识别仅支持Swift的框架。它提供了一个全面的仅支持Swift的框架列表,包括它们的引入版本和平台。

## 功能

- 爬取Apple官方开发者文档
- 识别仅支持Swift的框架
- 检索每个框架的详细信息
- 过滤掉某些技术和框架
- 按平台和引入版本对结果进行排序
- 在控制台以表格格式显示结果

## 先决条件

在开始之前,请确保您满足以下要求:

- Node.js (v12.0.0或更高版本)
- npm (通常随Node.js一起提供)

## 使用方法

要运行爬虫并查看结果,请使用以下命令:

```shell
npm install
npm start
```

## 当前状态

> 日期: 2024-10-27

| 序号 | 标题 | URL | 平台 | 引入版本 |
|------|------|-----|------|----------|
| 0 | SwiftUI | https://developer.apple.com/documentation/SwiftUI | iOS | 13.0 |
| 1 | Combine | https://developer.apple.com/documentation/Combine | iOS | 13.0 |
| 2 | RealityKit | https://developer.apple.com/documentation/RealityKit | iOS | 13.0 |
| 3 | Apple CryptoKit | https://developer.apple.com/documentation/CryptoKit | iOS | 13.0 |
| 4 | Developer Tools Support | https://developer.apple.com/documentation/DeveloperToolsSupport | iOS | 14.0 |
| 5 | System | https://developer.apple.com/documentation/System | iOS | 14.0 |
| 6 | Create ML | https://developer.apple.com/documentation/CreateML | iOS | 15.0 |
| 7 | Device Activity | https://developer.apple.com/documentation/DeviceActivity | iOS | 15.0 |
| 8 | Family Controls | https://developer.apple.com/documentation/FamilyControls | iOS | 15.0 |
| 9 | Managed Settings | https://developer.apple.com/documentation/ManagedSettings | iOS | 15.0 |
| 10 | Managed Settings UI | https://developer.apple.com/documentation/ManagedSettingsUI | iOS | 15.0 |
| 11 | Tabular Data | https://developer.apple.com/documentation/TabularData | iOS | 15.0 |
| 12 | Group Activities | https://developer.apple.com/documentation/GroupActivities | iOS | 15.0 |
| 13 | Assignables | https://developer.apple.com/documentation/Assignables | iOS | 15.4 |
| 14 | Distributed | https://developer.apple.com/documentation/Distributed | iOS | 16.0 |
| 15 | RegexBuilder | https://developer.apple.com/documentation/RegexBuilder | iOS | 16.0 |
| 16 | App Intents | https://developer.apple.com/documentation/AppIntents | iOS | 16.0 |
| 17 | CarKey | https://developer.apple.com/documentation/CarKey | iOS | 16.0 |
| 18 | Swift Charts | https://developer.apple.com/documentation/Charts | iOS | 16.0 |
| 19 | Create ML Components | https://developer.apple.com/documentation/CreateMLComponents | iOS | 16.0 |
| 20 | WeatherKit | https://developer.apple.com/documentation/WeatherKit | iOS | 16.0 |
| 21 | ActivityKit | https://developer.apple.com/documentation/ActivityKit | iOS | 16.1 |
| 22 | MatterSupport | https://developer.apple.com/documentation/MatterSupport | iOS | 16.1 |
| 23 | SwiftData | https://developer.apple.com/documentation/SwiftData | iOS | 17.0 |
| 24 | Observation | https://developer.apple.com/documentation/Observation | iOS | 17.0 |
| 25 | DockKit | https://developer.apple.com/documentation/DockKit | iOS | 17.0 |
| 26 | FinanceKit | https://developer.apple.com/documentation/FinanceKit | iOS | 17.0 |
| 27 | TipKit | https://developer.apple.com/documentation/TipKit | iOS | 17.0 |
| 28 | WorkoutKit | https://developer.apple.com/documentation/WorkoutKit | iOS | 17.0 |
| 29 | Journaling Suggestions | https://developer.apple.com/documentation/JournalingSuggestions | iOS | 17.2 |
| 30 | Managed App Distribution | https://developer.apple.com/documentation/ManagedAppDistribution | iOS | 17.2 |
| 31 | AdAttributionKit | https://developer.apple.com/documentation/AdAttributionKit | iOS | 17.4 |
| 32 | MarketplaceKit | https://developer.apple.com/documentation/MarketplaceKit | iOS | 17.4 |
| 33 | Translation | https://developer.apple.com/documentation/Translation | iOS | 17.4 |
| 34 | LightweightCodeRequirements | https://developer.apple.com/documentation/LightweightCodeRequirements | iOS | 17.4 |
| 35 | Synchronization | https://developer.apple.com/documentation/Synchronization | iOS | 18.0 |
| 36 | Core HID | https://developer.apple.com/documentation/CoreHID | macOS | 15.0 |
| 37 | Swift Testing | https://developer.apple.com/documentation/Testing | Swift | 6.0 |
| 38 | Playground Bluetooth | https://developer.apple.com/documentation/playgroundbluetooth | Swift Playgrounds | 2.0 |
| 39 | App License Delivery SDK | https://developer.apple.com/documentation/AppLicenseDeliverySDK | Unknown | Unknown |
| 40 | Apple Pencil | https://developer.apple.com/documentation/ApplePencil | Unknown | Unknown |
| 41 | FinanceKitUI | https://developer.apple.com/documentation/FinanceKitUI | Unknown | Unknown |
| 42 | LiveCommunicationKit | https://developer.apple.com/documentation/LiveCommunicationKit | Unknown | Unknown |
| 43 | TabletopKit | https://developer.apple.com/documentation/TabletopKit | visionOS | 2.0 |
