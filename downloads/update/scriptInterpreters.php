<?
header('Content-Type: application/json');
require('helper.inc');
?>

<?

try
{
   sendAnswerAndExit(true, "", listNativeSubPackages("scriptInterpreters", $_GET["os"], $_GET["arch"], $_GET["lang"], $_GET["devMode"]));
}
catch (Exception $e)
{
   sendAnswerAndExit(false, $e->getMessage(), $answer);
}

?>