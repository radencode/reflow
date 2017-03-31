const edge = require('electron-edge');


export default function GetFile(){
	var csharp = edge.func({
		assemblyFile: 'reflow.dll',
		methodName: 'GetFile'
	});

	csharp(1, function (error, result) {
			if (error) {
				throw error;
			}else{
				var json = JSON.parse(result);
				var name = json.name;
				var age = json.age;
				var car = json.car;
				console.log('Name: ' + name + ' Age: ' + age + ' Car: ' + car);
			}
	});
}


