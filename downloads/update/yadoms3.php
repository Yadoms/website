<?
header('Content-Type: application/json');
require('helper3.inc');
?>

<?

$answer = array( 'inputParameters' => array('os' => $_GET["os"], 'arch' => $_GET["arch"], 'devMode' => $_GET["devMode"]));

try
{
   $subPackagesPath = getNativeSubPackagesPath("yadoms", $_GET["os"], $_GET["arch"], $_GET["devMode"]);
   $answer["yadoms"] = buildVersionInformationForYadoms($subPackagesPath);
   sendAnswerAndExit(true, "", $answer);
}
catch (Exception $e)
{
   sendAnswerAndExit(false, $e->getMessage(), $answer);
}

?>