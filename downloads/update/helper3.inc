<?

/**
* this function send the json answer
*/
function sendAnswerAndExit($result, $message, $answer)
{
	$data = array ('result' => $result, 'message' => $message, 'data' => $answer);
	echo json_encode($data);
	//we can exit script
	exit;
}

function startsWith($haystack, $needle) {
    // search backwards starting from haystack length characters from the end
    return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== FALSE;
}

function endsWith($haystack, $needle) {
    // search forward starting from end minus needle length characters
    return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== FALSE);
}

function remove_utf8_bom($text)
{
    $bom = pack('H*','EFBBBF');
    $text = preg_replace("/^$bom/", '', $text);
    return $text;
}

//Make a insensitive and begin with item search
function matchInArray($element, $array, $elementIfMatch)
{
	foreach ($array as $key => $value)
	{
		if (strchr(strtolower($element), $value))
			return $elementIfMatch;
	}
	return $element;
}

function buildVersionInformationForModule($dirName)
{
	if (!is_dir($dirName))
		throw new Exception("folder not found : " . $dirName);

	//everything is ok we can look for all folders, 1 folder -> 1 item
	$itemDirIterator = opendir($dirName);

	if (!$itemDirIterator)
		throw new Exception("Unable to open directory " . $dirName);

	$itemList = array();
		
	while (($item = readdir($itemDirIterator)) !== false)
	{
		$itemDirName = $dirName . $item;
			
		if ((is_dir($itemDirName)) && ($item != ".") && ($item != ".."))
		{
			$itemDirName .= "/";
			$itemValid = false;

			$folder = opendir($itemDirName);
			if (!$folder)
				throw new Exception("Unable to open directory " . $itemDirName);
			
			$versionInformation = array();
			
			$iconName = "icon.png";
			$previewName = "preview.png";
         
         // Add changelog if exists
         if (is_file($itemDirName . "changelog.md"))
            $versionInformation["changelogUrl"] = dirname($_SERVER["SCRIPT_URI"]) . "/" . $itemDirName . "changelog.md";
         
         // Check if obsolete
         if (is_file($itemDirName . "obsolete"))
            $versionInformation["obsolete"] = true;
			
         $versions = array();
			while (($file = readdir($folder)) !== false)
			{
				if ((is_dir($itemDirName . $file)) && ($file != ".") && ($file != ".."))
				{
					//for each folder we look if there is a package.json file inside
					$fullPath = $itemDirName . $file;
					$packageJsonPath = $fullPath . "/" . "package.json";
					$jsonFilePresent = is_file($packageJsonPath);
					$files = glob($fullPath . "/*.zip");
					if (count($files) >= 1)
					{
                  $zipFile = $files[0];
						$iconPath = $fullPath . "/" . $iconName;
						$previewPath = $fullPath . "/" . $previewName;
						if (!$jsonFilePresent)
						{
							//the package.json is not present we extract it from package.zip
							//we get zip content
							$zip = new ZipArchive;
							$res = $zip->open($zipFile);
							if ($res === TRUE) 
							{
								//we get package.json 
								if (!$zip->extractTo($fullPath, "package.json"))
                           throw new Exception('Unable to extract package.json from ' . $zipFile);
								
								//we extract all locales files
								for ($i = 0; $i < $zip->numFiles; $i++) 
								{ 
									$entry = $zip->getNameIndex($i); 
									
									if ( substr( $entry, -1 ) == '/' ) 
										continue; // skip directories 
									
									if (startsWith($entry, "locales/"))
									{
										$localesDir = $fullPath . '/locales';
										//if the locales folder doesn't exists we create it
										if (!is_dir($localesDir))
											mkdir($localesDir);

										//we copy the file inside
										$ofp = fopen( $localesDir . '/' . basename($entry), 'w' ); 
										$fp = $zip->getStream( $entry ); 
										if (!$fp) 
											throw new Exception('Unable to extract the file'); 
									
										while (!feof($fp)) 
											fwrite( $ofp, fread($fp, 8192)); 
										
										fclose($fp); 
										fclose($ofp); 
									}
									
									if (startsWith($entry, $iconName))
									{
										//we copy the file inside
										$ofp = fopen($iconPath, 'w'); 
										$fp = $zip->getStream( $entry ); 
										if (!$fp) 
											throw new Exception('Unable to extract the icon.png file'); 
									
										while (!feof($fp)) 
											fwrite( $ofp, fread($fp, 8192)); 
										
										fclose($fp); 
										fclose($ofp); 
									}
									
									if (startsWith($entry, $previewName))
									{
										//we copy the file inside
										$ofp = fopen($previewPath, 'w'); 
										$fp = $zip->getStream( $entry ); 
										if (!$fp) 
											throw new Exception('Unable to extract the preview.png file'); 
									
										while (!feof($fp)) 
											fwrite( $ofp, fread($fp, 8192)); 
										
										fclose($fp); 
										fclose($ofp); 
									}
								} 

								$zip->close(); 
								
								//we check if the json file is present again
								$jsonFilePresent = is_file($packageJsonPath);
							}
							else
							{
								//echo "unable to open " . $zipFile . "<br/>";
							}	
						}
					}
					
					//the file may be extracted or already present
					if ($jsonFilePresent)
					{
						//we can get package.json informations
						$content = file_get_contents($packageJsonPath);
						$encoding = mb_detect_encoding($content);
						$content = iconv($encoding, 'UTF-8', $content);
						$content = remove_utf8_bom($content);

						$json = json_decode($content, true);
						$dir = array();
						$dir["type"] = $json["type"];
						if($json["name"] != null)
							$dir["name"] = $json["name"];
						else
							$dir["name"] = $json["type"];
						
						$dir["description"] = $json["description"];
						$dir["version"] = $json["version"];
						$dir["author"] = $json["author"];
						$dir["url"] = $json["url"];
						$dir["credits"] = $json["credits"];
						$dir["dependencies"] = $json["dependencies"];
						$dir["downloadUrl"] = dirname($_SERVER["SCRIPT_URI"]) . "/" . $zipFile;
						$dir["md5Hash"] = md5_file($zipFile);
						
						//if the icon is present 
						if (is_file($iconPath))
							$dir["iconUrl"] = dirname($_SERVER["SCRIPT_URI"]) . "/" . $iconPath;
							
						//if the preview is present 
						if (is_file($previewPath))
							$dir["previewUrl"] = dirname($_SERVER["SCRIPT_URI"]) . "/" . $previewPath;
										
						array_push($versions, $dir);
						$itemValid = true;
					}
				}
			}
         $versionInformation["versions"] = $versions;
         
			//if we have a valid item dir we add it to the answer list
			if ($itemValid)
				$itemList[$item] = $versionInformation;
		}
	}
	return $itemList;
}

function findOs($os)
{
   $osWin = array( "windows", "win");
   $osLinux = array("linux", "unix");
   $osMac = array("darwin", "mac", "osx");
   
   $os = matchInArray($os, $osWin, "windows");
   $os = matchInArray($os, $osLinux, "linux");
   $os = matchInArray($os, $osMac, "darwin");
   
   return $os;
}

function findArch($arch)
{
   $archX86 = array("x86", "ia32", "i686");
   $archX64 = array("x64", "ia64");
   $archArmv6l = array("armv6l");
   $archArmv7l = array("armv7l");
   
   $arch = matchInArray($arch, $archX86, "x86");
   $arch = matchInArray($arch, $archX64, "x64");
   $arch = matchInArray($arch, $archArmv6l, "armv6l");
   $arch = matchInArray($arch, $archArmv7l, "armv7l");
   
   return $arch;
}


// Get native sub-packages path (plugins, widgets, scriptInterpreters)
function getNativeSubPackagesPath($subPackagesType, $os, $arch, $devMode)
{
   $os = findOs($os);
   $arch = findArch($arch);

   if (($os == null) || ($arch == null))
      throw new Exception('os and arch GET parameters must be defined');

   //we look for all directories located in /plugins/$os/$arch/ or /dev/plugins/$os/$arch/ in developper mode
   if (isset ($devMode)){
      $dirName = "dev/";   
   }
   else{
      $dirName = "";
   }

   $dirName .= $subPackagesType . "/" . $os;

   if (!is_dir($dirName))
      throw new Exception('Folder not found : ' . $dirName);

   $dirName .= "/" . $arch;

   if (!is_dir($dirName))
      throw new Exception('Folder not found : ' . $dirName);

   $dirName .= '/';
   
   return $dirName;
}


function buildVersionInformationForYadoms($dirName)
{
	if (!is_dir($dirName))
		throw new Exception("folder not found : " . $dirName);

	//everything is ok we can look for all folders, 1 folder -> 1 item
	$itemDirIterator = opendir($dirName);

	if (!$itemDirIterator)
		throw new Exception("Unable to open directory " . $dirName);
		
	$versionInformation = array();
	
	$iconName = "icon.png";
	$previewName = "preview.png";
         
   // Add changelog if exists
   if (is_file($dirName . "changelog.md"))
      $versionInformation["changelogUrl"] = dirname($_SERVER["SCRIPT_URI"]) . "/" . $dirName . "changelog.md";
	
   $versions = array();
	while (($file = readdir($itemDirIterator)) !== false)
	{
		if ((is_dir($dirName . $file)) && ($file != ".") && ($file != ".."))
		{
			//for each folder we look if there is a package.json file inside
			$fullPath = $dirName . $file;
			$packageJsonPath = $fullPath . "/" . "package.json";
			$jsonFilePresent = is_file($packageJsonPath);
			$files = glob($fullPath . "/*.zip");
			if (count($files) >= 1)
			{
				$zipFile = $files[0];
				if (!$jsonFilePresent)
				{
					//the package.json is not present we extract it from package.zip
					//we get zip content
					$zip = new ZipArchive;
					$res = $zip->open($zipFile);
					if ($res === TRUE) 
					{
						//we get package.json 
						$zip->extractTo($fullPath, "package.json");
						
						$zip->close(); 
						
						//we check if the json file is present again
						$jsonFilePresent = is_file($packageJsonPath);
					}
					else
					{
						//echo "unable to open " . $zipFile . "<br/>";
					}	
				}
			}
			
			//the file may be extracted or already present
			if ($jsonFilePresent)
			{
				//we can get package.json informations
				$content = file_get_contents($packageJsonPath);
				$encoding = mb_detect_encoding($content);
				$content = iconv($encoding, 'UTF-8', $content);
				$content = remove_utf8_bom($content);
            
				$json = json_decode($content, true);
				$dir = $json["yadoms"]["information"];
				$dir["downloadUrl"] = dirname($_SERVER["SCRIPT_URI"]) . "/" . $zipFile;
				$dir["md5Hash"] = md5_file($zipFile);


				array_push($versions, $dir);
				$itemValid = true;
			}
		}
	}
   
	$versionInformation["versions"] = $versions;
   
	return $versionInformation;
}

?>