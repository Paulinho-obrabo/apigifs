import express from 'express';
import gifs from './routes/gifs.js';
const app=express();
app.use('/gifs',express.static('public/gifs'));
app.use('/gif',gifs);
app.listen(3000,()=>console.log('API on'));
