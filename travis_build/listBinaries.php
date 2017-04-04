<?

$path = $_GET['path'];


function rsearch($folder, $pattern) {
    $dir = new RecursiveDirectoryIterator($folder);
    $ite = new RecursiveIteratorIterator($dir);
    $files = new RegexIterator($ite, $pattern, RegexIterator::GET_MATCH);
    $fileList = array();
    foreach($files as $file) {
        $fileList = array_merge($fileList, $file);
    }
    return $fileList;
}

function listFilesSuccess()
{
   $itemList = array();
   try {
      foreach (rsearch($_GET['path'], '/.*yadoms.*/') as $filename) {
          array_push($itemList, array('file' => $filename, 'size' => filesize($filename), 'date' => filemtime($filename)));
      }   
   } catch (Exception $e) {
       $globError = 'Exception reçue : ' .  $e->getMessage();
   }
   
   return $itemList;
}

function listFilesFailure()
{
   $itemList = array();
   try {
      foreach (rsearch($_GET['path'], '/.*logs.*/') as $filename) {
          array_push($itemList, array('file' => $filename, 'size' => filesize($filename), 'date' => filemtime($filename)));
      }   
   } catch (Exception $e) {
       $globError = 'Exception reçue : ' .  $e->getMessage();
   }
   return $itemList;
}


echo json_encode( array('success' => listFilesSuccess(), 'failure' => listFilesFailure(), 'error' => $globError));
exit;

?>