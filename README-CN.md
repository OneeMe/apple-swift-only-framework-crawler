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

> 日期: 2024-11-22

| 序号 | 标题 | URL | 平台 | 引入版本 |
|-------|-------|-------|-------|-------|
| 1 | SwiftUI | [https://developer.apple.com/documentation/SwiftUI](https://developer.apple.com/documentation/SwiftUI) | iOS | 13.0 |
| 2 | Combine | [https://developer.apple.com/documentation/Combine](https://developer.apple.com/documentation/Combine) | iOS | 13.0 |
| 3 | RealityKit | [https://developer.apple.com/documentation/RealityKit](https://developer.apple.com/documentation/RealityKit) | iOS | 13.0 |
| 4 | Apple CryptoKit | [https://developer.apple.com/documentation/CryptoKit](https://developer.apple.com/documentation/CryptoKit) | iOS | 13.0 |
| 5 | Developer Tools Support | [https://developer.apple.com/documentation/DeveloperToolsSupport](https://developer.apple.com/documentation/DeveloperToolsSupport) | iOS | 14.0 |
| 6 | System | [https://developer.apple.com/documentation/System](https://developer.apple.com/documentation/System) | iOS | 14.0 |
| 7 | Create ML | [https://developer.apple.com/documentation/CreateML](https://developer.apple.com/documentation/CreateML) | iOS | 15.0 |
| 8 | Device Activity | [https://developer.apple.com/documentation/DeviceActivity](https://developer.apple.com/documentation/DeviceActivity) | iOS | 15.0 |
| 9 | Family Controls | [https://developer.apple.com/documentation/FamilyControls](https://developer.apple.com/documentation/FamilyControls) | iOS | 15.0 |
| 10 | Managed Settings | [https://developer.apple.com/documentation/ManagedSettings](https://developer.apple.com/documentation/ManagedSettings) | iOS | 15.0 |
| 11 | Managed Settings UI | [https://developer.apple.com/documentation/ManagedSettingsUI](https://developer.apple.com/documentation/ManagedSettingsUI) | iOS | 15.0 |
| 12 | Tabular Data | [https://developer.apple.com/documentation/TabularData](https://developer.apple.com/documentation/TabularData) | iOS | 15.0 |
| 13 | Group Activities | [https://developer.apple.com/documentation/GroupActivities](https://developer.apple.com/documentation/GroupActivities) | iOS | 15.0 |
| 14 | Assignables | [https://developer.apple.com/documentation/Assignables](https://developer.apple.com/documentation/Assignables) | iOS | 15.4 |
| 15 | Distributed | [https://developer.apple.com/documentation/Distributed](https://developer.apple.com/documentation/Distributed) | iOS | 16.0 |
| 16 | RegexBuilder | [https://developer.apple.com/documentation/RegexBuilder](https://developer.apple.com/documentation/RegexBuilder) | iOS | 16.0 |
| 17 | App Intents | [https://developer.apple.com/documentation/AppIntents](https://developer.apple.com/documentation/AppIntents) | iOS | 16.0 |
| 18 | CarKey | [https://developer.apple.com/documentation/CarKey](https://developer.apple.com/documentation/CarKey) | iOS | 16.0 |
| 19 | Swift Charts | [https://developer.apple.com/documentation/Charts](https://developer.apple.com/documentation/Charts) | iOS | 16.0 |
| 20 | Create ML Components | [https://developer.apple.com/documentation/CreateMLComponents](https://developer.apple.com/documentation/CreateMLComponents) | iOS | 16.0 |
| 21 | WeatherKit | [https://developer.apple.com/documentation/WeatherKit](https://developer.apple.com/documentation/WeatherKit) | iOS | 16.0 |
| 22 | ActivityKit | [https://developer.apple.com/documentation/ActivityKit](https://developer.apple.com/documentation/ActivityKit) | iOS | 16.1 |
| 23 | Automated Device Enrollment | [https://developer.apple.com/documentation/AutomatedDeviceEnrollment](https://developer.apple.com/documentation/AutomatedDeviceEnrollment) | iOS | 16.1 |
| 24 | MatterSupport | [https://developer.apple.com/documentation/MatterSupport](https://developer.apple.com/documentation/MatterSupport) | iOS | 16.1 |
| 25 | SwiftData | [https://developer.apple.com/documentation/SwiftData](https://developer.apple.com/documentation/SwiftData) | iOS | 17.0 |
| 26 | Observation | [https://developer.apple.com/documentation/Observation](https://developer.apple.com/documentation/Observation) | iOS | 17.0 |
| 27 | DockKit | [https://developer.apple.com/documentation/DockKit](https://developer.apple.com/documentation/DockKit) | iOS | 17.0 |
| 28 | FinanceKit | [https://developer.apple.com/documentation/FinanceKit](https://developer.apple.com/documentation/FinanceKit) | iOS | 17.0 |
| 29 | TipKit | [https://developer.apple.com/documentation/TipKit](https://developer.apple.com/documentation/TipKit) | iOS | 17.0 |
| 30 | WorkoutKit | [https://developer.apple.com/documentation/WorkoutKit](https://developer.apple.com/documentation/WorkoutKit) | iOS | 17.0 |
| 31 | Journaling Suggestions | [https://developer.apple.com/documentation/JournalingSuggestions](https://developer.apple.com/documentation/JournalingSuggestions) | iOS | 17.2 |
| 32 | Managed App Distribution | [https://developer.apple.com/documentation/ManagedAppDistribution](https://developer.apple.com/documentation/ManagedAppDistribution) | iOS | 17.2 |
| 33 | AdAttributionKit | [https://developer.apple.com/documentation/AdAttributionKit](https://developer.apple.com/documentation/AdAttributionKit) | iOS | 17.4 |
| 34 | MarketplaceKit | [https://developer.apple.com/documentation/MarketplaceKit](https://developer.apple.com/documentation/MarketplaceKit) | iOS | 17.4 |
| 35 | Translation | [https://developer.apple.com/documentation/Translation](https://developer.apple.com/documentation/Translation) | iOS | 17.4 |
| 36 | LightweightCodeRequirements | [https://developer.apple.com/documentation/LightweightCodeRequirements](https://developer.apple.com/documentation/LightweightCodeRequirements) | iOS | 17.4 |
| 37 | Synchronization | [https://developer.apple.com/documentation/Synchronization](https://developer.apple.com/documentation/Synchronization) | iOS | 18.0 |
| 38 | Image Playground | [https://developer.apple.com/documentation/ImagePlayground](https://developer.apple.com/documentation/ImagePlayground) | iOS | 18.0 |
| 39 | Core HID | [https://developer.apple.com/documentation/CoreHID](https://developer.apple.com/documentation/CoreHID) | macOS | 15.0 |
| 40 | Swift Testing | [https://developer.apple.com/documentation/Testing](https://developer.apple.com/documentation/Testing) | Swift | 6.0 |
| 41 | Playground Bluetooth | [https://developer.apple.com/documentation/playgroundbluetooth](https://developer.apple.com/documentation/playgroundbluetooth) | Swift Playgrounds | 2.0 |
| 42 | App License Delivery SDK | [https://developer.apple.com/documentation/AppLicenseDeliverySDK](https://developer.apple.com/documentation/AppLicenseDeliverySDK) | Unknown | Unknown |
| 43 | Apple Pencil | [https://developer.apple.com/documentation/ApplePencil](https://developer.apple.com/documentation/ApplePencil) | Unknown | Unknown |
| 44 | FinanceKitUI | [https://developer.apple.com/documentation/FinanceKitUI](https://developer.apple.com/documentation/FinanceKitUI) | Unknown | Unknown |
| 45 | LiveCommunicationKit | [https://developer.apple.com/documentation/LiveCommunicationKit](https://developer.apple.com/documentation/LiveCommunicationKit) | Unknown | Unknown |
| 46 | TabletopKit | [https://developer.apple.com/documentation/TabletopKit](https://developer.apple.com/documentation/TabletopKit) | visionOS | 2.0 |
