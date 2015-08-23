<?php  
//CONNECTION
		 mysql_connect("localhost","root","root");
		 mysql_select_db('moizlatif');


/* APILOGIC---------------------------------------------------------------

1.DETERMINE REQUEST METHOD WITH SWITCH STATEMENTS
2.IF GET, DETERMINE WHICH QUERY STRING PASSED WITH SWITCH AGAIN
3.IF NO QUERY PASSED, RETURN ALL THE POSTS


---------------------------------------------------------------------*/

//DETERMINE REQUEST METHOD
 $method = $_SERVER['REQUEST_METHOD'];

 switch ($method) {
//-------------------------------------------------------------------
 	case 'GET':
 				//LOOP THROUGH QUERY STRING FOR POST NUM OR CATEGORY
 				if(!empty($_GET)){
					foreach ($_GET as $key=>$val) {
					  switch ($key) {
					  	case 'post_num':
					  		$post_no = $_GET['post_num'];
							$q = mysql_query("SELECT * FROM posts WHERE post_num = '$post_no' AND post_type = 'article' LIMIT 1");
					  		break;

					  	case 'category':
					  		$post_category = $_GET['category'];
							$q = mysql_query("SELECT * FROM posts WHERE post_category = '$post_category' AND post_type = 'article' ORDER BY post_num DESC ");
					  		break;
					  
					  } //END SWITCH
					} //END FOREACH

				} // END IF
				else{
					$q = mysql_query("SELECT * FROM posts WHERE post_type = 'article' ORDER BY post_num DESC");
				}

				//AFTER QUERY HAS BEEN SELECTED
				//GET DATA
				$rows = array();
				while($r = mysql_fetch_assoc($q)) {
				    $rows[] = $r;
				}
				print json_encode($rows);


 		break;
//-------------------------------------------------------------------
 	default:
 		# code...
 		break;
 }


?>


