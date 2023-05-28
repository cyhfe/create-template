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
