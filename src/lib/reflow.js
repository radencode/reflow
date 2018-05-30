//Require axios only in development
const axios = process.env.NODE_ENV === 'development' ? require('axios') : null;
//Require edge only in production
const edge = process.env.NODE_ENV === 'production' ? require('electron-edge-js') : null;

class P_APIController {
	constructor() {
		//Initialize all edge methods
		this.getFilesInDirectory = this.edgeInit('GetFilesInDirectory');
		this.getFilesCount = this.edgeInit('GetFilesCount');
		this.getTags = this.edgeInit('GetTags');
	}

	//Set up edge function with the correct method
	edgeInit = method => {
		return edge.func({
			assemblyFile: 'rfcore.dll',
			typeName: 'ReflowCore.Reflow.ReflowController',
			methodName: method,
		});
	};

	//Get data for all files in a direcory
	fetchFiles = path => {
		return new Promise((resolve, reject) => {
			//Use local reflow build
			this.getFilesInDirectory(path, (error, response) => {
				if (error) reject(new Error(error));
				resolve(JSON.parse(response));
			});
		});
	};

	//Get the number of files in a directory
	fetchFilesCount = () => {
		return new Promise((resolve, reject) => {
			//Use local reflow build
			this.getFilesCount(null, (error, response) => {
				if (error) reject(new Error(error));
				resolve(JSON.parse(response));
			});
		});
	};

	//Get data for all tags
	fetchTags = () => {
		return new Promise((resolve, reject) => {
			//Use local reflow build
			this.getTags(null, (error, response) => {
				if (error) reject(new Error(error));
				resolve(JSON.parse(response));
			});
		});
	};
}

class D_APIController {
	//Get data for all files in a direcory
	fetchFiles = path => {
		return new Promise((resolve, reject) => {
			//Use development reflow build
			axios
				.post('http://localhost:3001/reflow/files', {
					path: path,
				})
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Get the number of files in a directory
	fetchFilesCount = () => {
		return new Promise((resolve, reject) => {
			//Use development reflow build
			axios
				.get('http://localhost:3001/reflow/files/count')
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Get data for all tags
	fetchTags = () => {
		return new Promise((resolve, reject) => {
			//Use development reflow build
			axios
				.get('http://localhost:3001/reflow/tags')
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error);
				});
		});
	};
}

export default (process.env.NODE_ENV === 'production' ? P_APIController : D_APIController);
