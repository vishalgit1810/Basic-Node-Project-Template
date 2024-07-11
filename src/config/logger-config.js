const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;


const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD:HH:mm:ss' }),
        myFormat
    ),
    transports: [
        new transports.Console(),                            // to print on screen console
        new transports.File({ filename: 'combined.log' })    // a file will create and enteries goes there
    ]
});

module.exports = logger;