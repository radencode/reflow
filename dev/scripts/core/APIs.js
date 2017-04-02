import edge from 'reflow-edge';


export default function GetFile(){

    var csharp = edge.func({
			assemblyFile: 'rfcore.dll',
      typeName: 'ReflowCore.Reflow.ReflowController',
			methodName: 'GetFilesInDirectory'
  	});

    csharp('C:\\Users\\Jenster\\Desktop\\Downloads', function (error, result) {
        if (error) {
          throw error
        }else{        
          console.log(result);
        }
    });

}


