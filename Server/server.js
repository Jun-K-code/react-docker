'use strict';

const Koa = require('koa');
const router = require('@koa/router')();

const app = new Koa();

router.get('/', (ctx) => {
  ctx.body = 'Hello World！';
});

// 使用路由中间件
app.use(router.routes()).use(router.allowedMethods());

// Constants
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`服务器端已启动，监听${PORT}端口`);
});
