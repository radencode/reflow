const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const app = express();
const PORT = 3001;
const path = require('path');

const baseNetAppPath = path.join(__dirname, '../', 'lib');
//.NET Core Edge
process.env.EDGE_USE_CORECLR = 1;
process.env.EDGE_APP_ROOT = baseNetAppPath;
const edge = require('edge-js');

//Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mount Express-Sanitizer
app.use(expressSanitizer());

//Set up CORS
app.use(cors());

//Base DLL
const dll = path.join(baseNetAppPath, 'Reflow.Core.dll');
const typeName = 'Reflow.Core.API.ReflowController';

//Testing routes
app.post('/reflow/files/directory', (req, res) => {
	const path = req.sanitize(req.body.path);
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'GetFilesInDirectory',
	})(path, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.post('/reflow/files/sync', (req, res) => {
	const files = JSON.stringify(req.body.files);
	console.log(files);
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'SyncFiles',
	})(files, (error, result) => {
		console.log(result);
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.post('/reflow/tags/structure-update', (req, res) => {
	const tags = JSON.stringify(req.body.tags);
	console.log(tags);
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'UpdateTagsStructure',
	})(tags, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.post('/reflow/tags/add', (req, res) => {
	const tag = JSON.stringify(req.body.tag);
	console.log(tag);
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'AddTag',
	})(tag, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.post('/reflow/tags/data-update', (req, res) => {
	const tag = JSON.stringify(req.body.tag);
	console.log(tag);
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'UpdateTagsData',
	})(tag, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.post('/reflow/files/rename', (req, res) => {
	const config = JSON.stringify(req.body.config);
	console.log(config);
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'RenameFiles',
	})(config, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.get('/reflow/files/rename-progress', (req, res) => {
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'GetProgress',
	})(null, (error, result) => {
		console.log(result);
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.get('/reflow/files/updated', (req, res) => {
	edge.func({
		assemblyFile: dll,
		typeName: typeName,
		methodName: 'GetFiles',
	})(null, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.get('/reflow/files/count', (req, res) => {
	edge.func({
		assemblyFile: dll,
		typeName,
		methodName: 'GetFilesCount',
	})(null, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

app.get('/reflow/tags', (req, res) => {
	edge.func({
		assemblyFile: dll,
		typeName,
		methodName: 'GetTags',
	})(null, (error, result) => {
		if (error) throw error;
		res.json(JSON.parse(result));
	});
});

//Start server
app.listen(PORT, () => {
	console.log(`API Server is running on port: ${PORT}`);
});
