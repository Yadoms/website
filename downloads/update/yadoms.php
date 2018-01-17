<?
header('Content-Type: application/json');
require('helper.inc');
?>

<?

$answer = array( 'inputParameters' => array('os' => $_GET["os"], 'arch' => $_GET["arch"], 'lang' => $_GET["lang"], 'devMode' => $_GET["devMode"]));

try
{
   $subPackagesPath = getNativeSubPackagesPath("yadoms", $_GET["os"], $_GET["arch"], $_GET["devMode"]);
   $answer["yadoms"] = buildItemListForYadoms($subPackagesPath, $_GET["lang"]);
   sendAnswerAndExit(true, "", $answer);
}
catch (Exception $e)
{
   sendAnswerAndExit(false, $e->getMessage(), $answer);
}

?>