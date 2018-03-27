const express = require('express');
const cors = require('cors');
const edge = require('edge-js');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const app = express();
const PORT = 3001;

//Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mount Express-Sanitizer
app.use(expressSanitizer());

//Set up CORS
app.use(cors());

//Testing routes
app.post('/reflow/files', (req, res) => {
	let path = req.sanitize(req.body.path);
	edge.func({
		assemblyFile: 'server/reflow/rfcore.dll',
		typeName: 'ReflowCore.Reflow.ReflowController',
		methodName: 'GetFilesInDirectory',
	})(path, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.get('/reflow/files/count', (req, res) => {
	edge.func({
		assemblyFile: 'server/reflow/rfcore.dll',
		typeName: 'ReflowCore.Reflow.ReflowController',
		methodName: 'GetFilesCount',
	})(null, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.get('/reflow/tags', (req, res) => {
	edge.func({
		assemblyFile: 'server/reflow/rfcore.dll',
		typeName: 'ReflowCore.Reflow.ReflowController',
		methodName: 'GetTags',
	})(null, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.get('/reflow/options', (req, res) => {
	edge.func({
		assemblyFile: 'server/reflow/rfcore.dll',
		typeName: 'ReflowCore.Reflow.ReflowController',
		methodName: 'GetOptions',
	})(null, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

//Start server
app.listen(PORT, () => {
	console.log(`API Server is running on port: ${PORT}`);
});
