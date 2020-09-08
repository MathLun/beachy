const express = require('express')
const Bugsnag = require('@bugsnag/js');
const BugsnagPluginExpress = require('@bugsnag/plugin-express');

Bugsnag.start({
	apiKey: 'c0b148ce8bf748f6d0850ed660611e58',
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
