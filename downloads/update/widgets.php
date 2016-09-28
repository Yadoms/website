<?
header('Content-Type: application/json');
require('helper.inc');
?>

<?
//getting parameters
$lang = $_GET["lang"];
$devMode = $_GET["devMode"];

$answer = array( 'inputParameters' => array('lang' => $lang, 'devMode' => $devMode));

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
	$answer["widgets"] = buildItemList($dirName, $lang);
}
catch (Exception $e)
{
	sendAnswerAndExit(false, $e->getMessage(), $answer);
}

sendAnswerAndExit(true, "", $answer);
?>