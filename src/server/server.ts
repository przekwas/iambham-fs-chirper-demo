import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import apiRouter from './routes';
import config from './config';

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', apiRouter);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(parseInt(config.port), () => console.log(`Server listening on port: ${config.port}`));