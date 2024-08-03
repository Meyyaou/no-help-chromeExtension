# No-Help Extension

## Description

The No-Help Extension is a Chrome extension designed to prevent you from (over)seeking help from ChatGPT whenever you encounter code problems. It redirects to a custom page when visiting specific URLs.

## Features

- Redirects to an internal page when accessing `https://chat.openai.com`.

## Installation

1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top-right corner.
4. Click "Load unpacked" and select the directory where this extension is located.

## Usage

When you visit `https://chatgpt.com`, the extension will automatically redirect you to the internal page specified in the extension's code.

## Development

Feel free to modify the extension:

1. You can edit the `content.js` file for redirect logic.
2. Modify `hey.html` for the internal page content.
3. OR update `manifest.json` for extension metadata and permissions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
