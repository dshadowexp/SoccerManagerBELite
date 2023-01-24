import express from 'express';

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(() => {
    console.log(`listening at localhost:${port}`)
});

