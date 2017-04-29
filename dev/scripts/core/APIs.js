import edge from 'reflow-edge';


export default function GetFile(){

    var csharp = edge.func({
			assemblyFile: 'reflow.dll',
      //typeName: 'ReflowCore.Reflow.ReflowController',
			methodName: 'GetFile'
  	});

    csharp(3, function (error, result) {
        if (error) {
          throw error
        }else{        
          console.log(result);
        }
    });

}


