import edge from 'reflow-edge';

export function GetFilesInDirectory(){
  var filesInDirectory = [];
  var getFilesInDirectory = edge.func({
    assemblyFile: 'rfcore.dll',
    typeName: 'ReflowCore.Reflow.ReflowController',
    methodName: 'GetFilesInDirectory'
  });
  getFilesInDirectory("C:\\Users\\Jenster\\Desktop\\Test\\Files", (error, result) => {
    if (error) throw error;
    filesInDirectory = JSON.parse(result);
  });
  return filesInDirectory;
}

export function GetTagNames(){
  var tagNames = [];
  var getTagNames = edge.func({
    assemblyFile: 'rfcore.dll',
    typeName: 'ReflowCore.Reflow.ReflowController',
    methodName: 'GetTagNames'
  });
  getTagNames(null, (error, result) => {
    if (error) throw error;
    tagNames = JSON.parse(result);
  });
  return tagNames;
}

export function GetTags(){
  var tags = [];
  var getTags = edge.func({
    assemblyFile: 'rfcore.dll',
    typeName: 'ReflowCore.Reflow.ReflowController',
    methodName: 'GetTags'
  });
  getTags(null, (error, result) => {
    if (error) throw error;
    tags = JSON.parse(result);
  });
  return tags;
}