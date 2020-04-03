import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import logger, { stream } from './utils/logger';
import apiRouter from './routes';
import config from './config';
import type { Error } from './utils/types';

const app = express();

//server health checkpoints
app.get('/status', (req, res) => res.status(200).end());
app.head('/status', (req, res) => res.status(200).end());

//shows real origin IP in heroku logs
app.enable('trust proxy');

//sauce for protection against common hacks
app.use(helmet());

//sauce for compressing req/res objects to be smaller in size
app.use(compression());
app.use(cors());
app.use(express.static('public'));

//take morgan logs and output them with winston
app.use(morgan('dev', { stream }));
app.use(express.json());
app.use(config.apiPrefix, apiRouter);

//global error handler for the app
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.error(error);
    res.status(error.status || 500);
    res.json({ error: error.message });
});

//sauce for front-end routes being caught by server
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(parseInt(config.port), (err) => {
    //crash the node script if an error occurs
	if (err) {
		logger.error(err);
		process.exit(1);
	}
	logger.info(`✌️ server listening on port: ${config.port} ✌️`);
});
