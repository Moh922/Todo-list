function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  

  // Fecthing API for signup

  const form = document.getElementById("form");

  form.addEventListener('submit',  function(){
   e.preventDefault();

   const payload = new FormData(form)

   console.log([...payload])

   fetch('https://todo-app-bc.herokuapp.com/api/v1/users/signup', {
      method: "POST",
      body: payload,

   })
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))
  })

  // Fetch API for login

  
  const forml = document.getElementById("l-form");

  forml.addEventListener('submit',  function(){
   ev.preventDefault();

   const payload = new FormData(form)

   console.log([...payload])

   fetch('https://todo-app-bc.herokuapp.com/api/v1/users/login', {
      method: "POST",
      body: payload,

   })
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))
  })