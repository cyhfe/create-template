# @cyhfe/create-template

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Starter Template

- [x] webpack-react-typescript
- [x] webpack-react-typescript-emotion
- [x] webpack-react-typescript-tailwind
- [x] express-typescript
- [ ] rollup-ts-library

[webpack config](./assets/webpack-config.md)

[express config](./assets/express.md)

## Usage

```sh
npx @cyhfe/create-template

npm create @cyhfe/template
```

![screenshot](./assets/screenshot.png)

## Project Structure

### webpack-react-typescript-tailwind

```bash
── README.md
├── package.json
├── postcss.config.js
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── img.png
│   ├── env.d.ts
│   ├── index.tsx
│   ├── main.css
│   └── style.css
├── tailwind.config.js
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

pakage.json

```json
{
  "devDependencies": {
    "@types/lodash-es": "^4.17.7",
    "@types/react": "^18.2.7",
    "@types/react-dom": "^18.2.4",
    "autoprefixer": "^10.4.14",
    "css-loader": "^6.8.1",
    "css-minimizer-webpack-plugin": "^5.0.0",
    "eslint": "^8.41.0",
    "eslint-config-react-app": "^7.0.1",
    "html-webpack-plugin": "^5.5.1",
    "mini-css-extract-plugin": "^2.7.6",
    "postcss": "^8.4.24",
    "postcss-loader": "^7.3.2",
    "style-loader": "^3.3.3",
    "tailwindcss": "^3.3.2",
    "ts-loader": "^9.4.3",
    "typescript": "^5.0.4",
    "webpack": "^5.84.1",
    "webpack-cli": "^5.1.1",
    "webpack-dev-server": "^4.15.0",
    "webpack-manifest-plugin": "^5.0.0",
    "webpack-merge": "^5.9.0"
  },
  "dependencies": {
    "@emotion/react": "^11.11.0",
    "lodash-es": "^4.17.21",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  {
    "scripts": {
    "start": "webpack serve --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },
}
```

### express-typescript

```bash
├── LICENSE
├── README.md
├── package.json
├── src
│   ├── index.ts
│   ├── router.ts
│   └── server.ts
└── tsconfig.json
```

pacakage.json

```json
{
  "devDependencies": {
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/morgan": "^1.9.4",
    "@types/node": "^20.2.3",
    "nodemon": "^2.0.22",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "morgan": "^1.10.0"
  },
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc"
  }
}
```

## License

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@cyhfe/create-template?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/@cyhfe/create-template
[npm-downloads-src]: https://img.shields.io/npm/dm/@cyhfe/create-template?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/@cyhfe/create-template
