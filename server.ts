import { Application, Router } from 'https://deno.land/x/oak@v17.1.0/mod.ts';

const port = 8000;
const app = new Application();
const router = new Router();

//--------------------------------------

router.get('/',(ctx) => {
    ctx.response.body = 'หน้าแรก';
});

router.post('/customer',(ctx) => {
    ctx.response.body = 'เมธอด POST สำหรับเพิ่มลูกค้า';
});

router.get('/customer',(ctx) => {
    ctx.response.body = 'เมธอด GET สำหรับอ่านลูกค้า';
});

router.put('/customer',(ctx) => {
    ctx.response.body = 'เมธอด PUT สำหรับอัพเดตลูกค้า';
});

router.delete('/customer',(ctx) => {
    ctx.response.body = 'เมธอด DELETE สำหรับลบลูกค้า';
});
//------------------------------------------
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
    console.log(`Start on localhost:${port}`);
});

await app.listen({ port });
