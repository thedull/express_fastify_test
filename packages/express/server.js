import express from "express";

const app = express();

app.get('/express', async(req, res) => {
    res.status(200)
        .type('json')
        .send({response:'Hello, world!'});
});

app.listen(3000, () => console.log('Express server listening on http://localhost:3000/express/'));