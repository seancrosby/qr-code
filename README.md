# QR Code Generator

A simple, modern, and clean QR code generator built with React, TypeScript, and Vite. This project is automatically tested and deployed to GitHub Pages using GitHub Actions.

> [!NOTE]
> This project was created by Gemini.

## Features

- **Instant Generation**: Generate QR codes in real-time as you type.
- **Clean UI**: Modern design using Tailwind CSS.
- **Downloadable**: Easily download the generated QR code as a PNG image.
- **Automated Deployment**: CI/CD pipeline with GitHub Actions.
- **Unit Tested**: Robust component testing with Vitest and React Testing Library.

## Usage

1.  Navigate to the deployed website.
2.  Enter the URL or text you want to encode in the input field.
3.  The QR code will appear automatically.
4.  Click the "Download PNG" button to save the QR code to your device.

## Local Development

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

## Credits

This project uses the [qrcode](https://www.npmjs.com/package/qrcode) library.
