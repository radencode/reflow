const axios = process.env.NODE_ENV === 'development' ? require('axios') : null;
const path = process.env.NODE_ENV === 'production' ? require('path') : null;
if (process.env.NODE_ENV === 'production') {
	process.env.EDGE_USE_CORECLR = 1;
	process.env.EDGE_APP_ROOT = process.env.ELECTRON_EDGE_JS_ROOT;
}
const edge = process.env.NODE_ENV === 'production' ? require('electron-edge-js') : null;

class P_APIController {
	constructor() {
		//Initialize all edge methods
		this.baseDll = path.join(process.env.ELECTRON_EDGE_JS_ROOT, 'Reflow.Core.dll');
		this.localTypeName = 'Reflow.Core.API.ReflowController';
		//Files
		this.edge_fetchFilesInDirectory = this.edgeInit('GetFilesInDirectory');
		this.edge_fetchFilesCount = this.edgeInit('GetFilesCount');
		this.edge_fetchFiles = this.edgeInit('GetFiles');
		this.edge_syncFiles = this.edgeInit('SyncFiles');
		//Tags
		this.edge_fetchTags = this.edgeInit('GetTags');
		this.edge_updateTagsOrder = this.edgeInit('UpdateTagsStructure');
		this.edge_updateTagOptions = this.edgeInit('UpdateTagsData');
		this.edge_addTag = this.edgeInit('AddTag');
		//Rename
		this.edge_rename = this.edgeInit('RenameFiles');
		this.edge_fetchProgress = this.edgeInit('GetProgress');
	}

	//Set up edge function with the correct method
	edgeInit = method => {
		return edge.func({
			assemblyFile: this.baseDll,
			typeName: this.localTypeName,
			methodName: method,
		});
	};

	//Get data for all files in a direcory
	fetchFilesInDirectory = path => {
		return new Promise((resolve, reject) => {
			this.edge_fetchFilesInDirectory(path, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Get the number of files in a directory
	fetchFilesCount = () => {
		return new Promise((resolve, reject) => {
			this.edge_fetchFilesCount(null, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Get updated files
	fetchFiles = () => {
		return new Promise((resolve, reject) => {
			this.edge_fetchFiles(null, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Update files order
	syncFiles = () => {
		return new Promise((resolve, reject) => {
			this.edge_syncFiles(null, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Get data for all tags
	fetchTags = () => {
		return new Promise((resolve, reject) => {
			this.edge_fetchTags(null, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Update attribute order
	updateTagsStructure = tags => {
		return new Promise((resolve, reject) => {
			this.edge_updateTagsOrder(tags, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Update tag's options
	updateTagsData = tag => {
		return new Promise((resolve, reject) => {
			this.edge_updateTagOptions(tag, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Rename files
	renameFiles = config => {
		return new Promise((resolve, reject) => {
			this.edge_rename(config, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Rename progress
	getRenameProgress = () => {
		return new Promise((resolve, reject) => {
			this.edge_fetchProgress(null, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};

	//Add a tag
	applyTagToFiles = tag => {
		return new Promise((resolve, reject) => {
			this.edge_addTag(tag, (error, response) => {
				if (error) reject(new Error(error));
				const data = JSON.parse(response);
				if (data.Error) reject(new Error(data.Error));
				else resolve(data.Response);
			});
		});
	};
}

class D_APIController {
	//Get data for all files in a direcory
	fetchFilesInDirectory = path => {
		return new Promise((resolve, reject) => {
			axios
				.post('http://localhost:3001/reflow/files/directory', {
					path,
				})
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Sync files
	syncFiles = files => {
		return new Promise((resolve, reject) => {
			axios
				.post('http://localhost:3001/reflow/files/sync', {
					files,
				})
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					else resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Rename files
	renameFiles = config => {
		return new Promise((resolve, reject) => {
			axios
				.post('http://localhost:3001/reflow/files/rename', {
					config,
				})
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					else resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Rename progress
	getRenameProgress = () => {
		return new Promise((resolve, reject) => {
			axios
				.get('http://localhost:3001/reflow/files/rename-progress')
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					else resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Update attribute order
	updateTagsStructure = tags => {
		return new Promise((resolve, reject) => {
			axios
				.post('http://localhost:3001/reflow/tags/structure-update', {
					tags,
				})
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Add a tag
	applyTagToFiles = tag => {
		return new Promise((resolve, reject) => {
			axios
				.post('http://localhost:3001/reflow/tags/add', {
					tag,
				})
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Update tag's options
	updateTagsData = tag => {
		return new Promise((resolve, reject) => {
			axios
				.post('http://localhost:3001/reflow/tags/data-update', {
					tag,
				})
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Get data for all files in a direcory
	fetchFiles = () => {
		return new Promise((resolve, reject) => {
			axios
				.get('http://localhost:3001/reflow/files/updated')
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Get the number of files in a directory
	fetchFilesCount = () => {
		return new Promise((resolve, reject) => {
			axios
				.get('http://localhost:3001/reflow/files/count')
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};

	//Get data for all tags
	fetchTags = () => {
		return new Promise((resolve, reject) => {
			axios
				.get('http://localhost:3001/reflow/tags')
				.then(response => {
					if (response.data.Error) reject(response.data.Error);
					resolve(response.data.Response);
				})
				.catch(error => {
					reject(error);
				});
		});
	};
}

export default (process.env.NODE_ENV === 'production' ? P_APIController : D_APIController);
