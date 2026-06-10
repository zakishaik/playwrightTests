# Playwright TypeScript Tests

A modern end-to-end testing framework using Playwright with TypeScript.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation

```bash
npm install
```

This will install Playwright and all required dependencies.

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests with UI
```bash
npm run test:ui
```

### Generate test code
```bash
npm run codegen
```

## Project Structure

```
├── tests/
│   └── example.spec.ts          # Example test file
├── playwright.config.ts          # Playwright configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## Configuration

Edit `playwright.config.ts` to:
- Change the base URL of your application
- Configure different browsers (chromium, firefox, webkit)
- Adjust test timeouts and retries
- Set up web server configuration

## Features

- ✅ Multi-browser testing (Chromium, Firefox, WebKit)
- ✅ Parallel test execution
- ✅ TypeScript support
- ✅ HTML reports
- ✅ Screenshot and trace capture
- ✅ Debug mode

## Documentation

For more information, visit [Playwright Documentation](https://playwright.dev/)
