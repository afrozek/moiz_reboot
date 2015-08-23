<?php  
//CONNECTION
		 mysql_connect("localhost","root","root");
		 mysql_select_db('moizlatif');


//get request method
 $method = $_SERVER['REQUEST_METHOD'];

 switch ($method) {
//-------------------------------------------------------------------
 	case 'GET':
		$sth = mysql_query("SELECT * FROM posts");
		$rows = array();
		while($r = mysql_fetch_assoc($sth)) {
		    $rows[] = $r;
		}
		print json_encode($rows);

//-------------------------------------------------------------------
 		break;
 	
 	default:
 		# code...
 		break;
 }


?>