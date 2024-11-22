# Apple Swift-Only Frameworks Crawler

This project is a web crawler that fetches and analyzes Apple's developer documentation to identify frameworks that exclusively support Swift. It provides a comprehensive list of Swift-only frameworks along with their introduction versions and platforms.

## Features

- Crawls Apple's official developer documentation
- Identifies frameworks that only support Swift
- Retrieves detailed information for each framework
- Filters out certain technologies and frameworks
- Sorts results by platform and introduction version
- Displays results in a tabular format in the console

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Usage

To run the crawler and see the results, use the following command:

```shell
npm install
npm start
```

## Current Status

> Date: 2024-11-22

| Index | Title | URL | Platform | Introduced At |
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
