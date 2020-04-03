import * as winston from 'winston';
import config from '../config';

//tells winston *where* the logs go between production/development
const transports = [];
if (process.env.NODE_ENV === 'production') {
	transports.push(new winston.transports.Console());
} else {
	transports.push(
		new winston.transports.Console({
			level: 'silly',
			format: winston.format.combine(winston.format.cli(), winston.format.splat())
		})
	);
}

//winston logger with basic options and styyyyle
const LoggerInstance = winston.createLogger({
	level: config.logs.level,
	levels: winston.config.npm.levels,
	format: winston.format.combine(
		winston.format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		winston.format.errors({ stack: true }),
		winston.format.splat(),
		winston.format.json()
	),
	transports
});

//stream for morgan to use
export const stream = {
	write: (text: string) => LoggerInstance.http(text)
};

export default LoggerInstance;
