import edge from 'reflow-edge';

export function GetFile(){
  var files = 0;
  var csharp = edge.func({
    assemblyFile: 'rfcore.dll',
    typeName: 'ReflowCore.Reflow.ReflowController',
    methodName: 'GetFilesInDirectory'
  });
  csharp("C:\\Users\\Jenster\\Desktop\\Test\\Files", function (error, result) {
      if (error) {
        throw error
      }else{
        files = JSON.parse(result);
      }
  });
  return files; 
}


