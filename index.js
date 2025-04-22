import express from 'express';
import urlRoute from './routes/url.routes.js'
import getUrl from './routes/getUrl.routes.js'
import connectDB from './connectDB.js';

const app = express();
const PORT = 8000;
connectDB().then(() => console.log('Database connected !!'));
app.use(express.json());
app.get('/',(req,res) => res.send('Hello World!'));
app.use("/url",urlRoute);

app.use('/',getUrl);

app.listen(PORT,() => console.log(`Server is running on http://localhost:${PORT}`));