<?
header('Content-Type: application/json');
require('helper3.inc');
?>

<?
//getting parameters
$devMode = $_GET["devMode"];

$answer = array( 'inputParameters' => array('devMode' => $devMode));

//we look for all directories located in /widgets/ or /dev/widgets/ in developper mode
if (isset ($devMode)){
   $dirName = "dev/";   
}
else{
   $dirName = "";
}

$dirName .= "widgets/";

try
{
	$answer["widgets"] = buildVersionInformationForModule($dirName);
}
catch (Exception $e)
{
	sendAnswerAndExit(false, $e->getMessage(), $answer);
}

sendAnswerAndExit(true, "", $answer);
?>