require('dotenv/config');
const express = require('express')
const Bugsnag = require('@bugsnag/js');
const BugsnagPluginExpress = require('@bugsnag/plugin-express');

Bugsnag.start({
	apiKey: process.env.BUGSNAG_API_KEY,
	plugins: [BugsnagPluginExpress]
});

const app = express();
const middleware = Bugsnag.getPlugin('express');

app.use(middleware.requestHandler);
app.use(middleware.errorHandler);
Bugsnag.notify(new Error('Test Error'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(3030);
