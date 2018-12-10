<?php
			if(isset($_REQUEST['create_acc']))
			{
				echo "Form Submitted";
				echo $_REQUEST['cname']."-". $_REQUEST['uname']."-". $_REQUEST['pwd']."-". $_REQUEST['cpwd']."-". $_REQUEST['dob']."-". $_REQUEST['mobile']."-". $_REQUEST['mailid']."-". $_REQUEST['gender']."-".  $_REQUEST['branch']."-". $_REQUEST['year'];
				print_r($_REQUEST['tech']);
				$res_str=implode("#",$_REQUEST['tech']);
				echo "<br>".$res_str;
				
			}
			
		?>