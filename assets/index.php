<?php

$servername= "localhost";
$username="root";
$password="";
$database="codeinit";

    $con=mysqli_connect($servername,$username,$password,$database);

	$fullname=   $_GET['fname'];
	$email= $_GET['lname'];
	$password=   $_GET['phoneno'];
	  
	   if($fullname == " "){
		   $fail = array("status"=>"0","message"=>"Blank Value");   
	   }  
	   elseif($email == " "){
		   $fail = array("status"=>"0","message"=>"Blank Value");
	   } 
	   elseif($password == " "){
		   $fail=array("status"=>"0","message"=>"Blank Value");
	   }
	   else{
	$query = "INSERT INTO `customapi`(name,email,password) VALUES ('$fullname','$email','$password')";
	
	 $result=mysqli_query($con,$query);
	 
	 if($result === FALSE){
		  
		   $fail = array("status"=>"0","message"=>"error");
		 }
	 else{
		   $fail = array("status"=>"1","message"=>"Success");
		 }
	  echo json_encode($fail);
	 }
	 
	  


?>
