const form=document.getElementById('form');
        const email=document.getElementById('email');
        const password = document.getElementById('password');

        function showError(input,message){
            const formControl = input.parentElement;
            formControl.className = 'form-control error';
            const small = formControl.querySelector('small');
            small.innerText=message;
        }
        function showSuccess(input){
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }

        function isValidEmail(email){
            const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }


        function admin(){
            var name = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(name ==''){
			    alert("please enter user name.");
		    }
		    else if(name.value ==='oltiiiiahmetii@gmail.com'){
                showSuccess(name);
            }
            else if(password==''){
        	    alert("enter the password");
		    }
            else if(password.value ==='Zvezda77'){
                showSuccess(password);
            }
		    else if(!filter.test(name)){
			    alert("Enter valid email id.");
		    }
		    else if(password.length < 5 || password.length > 9){
			    alert("Password min and max length is 5-9.");
            }
		    else{
	            alert('Thank You for Login & You are Redirecting to KB-Prishtina');
                window.location = "index.html";
		    }
	    }

        function clearFunc(){
		    document.getElementById("email").value="";
		    document.getElementById("pwd1").value="";
	    }
