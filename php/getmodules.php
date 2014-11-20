<?php
$files = scandir('../modules');
 
for ($i = 0; $i < count($files); $i++) {
	$file=$files[$i];
   if ($file != '.' && $file != '..' && is_dir('../modules/' . $file)) {
   		echo $file; 
   		
   		if ($i < count($files) - 1) {
   			echo(',');
   		}
   }     
};
 
?>