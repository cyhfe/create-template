# 初始化项目

## node express 开发构建环境

```json
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^20.2.3",
    "nodemon": "^2.0.22",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.4"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
```

```ts
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

app.listen(3001, () => {
  console.log("serve on http://localhost:3001");
});
```

## .env

```bash
npm install dotenv --save
```

```ts
import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.SECRETS);
```

## cors

```bash
npm install cors
```

```ts
app.use(cors());
```

## morgan

```bash
npm install morgan
```

```ts
app.use(morgan("dev"));
```
