const fs = require('fs');
const morgan = require('morgan');

const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' });

morgan.token('body', (req) => JSON.stringify(req.body));

const logFormat = ':remote-address - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :body';

exports.logRequests = morgan(logFormat, { stream: accessLogStream });
