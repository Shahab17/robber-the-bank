// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
  
    //step-2: get the email address inside the email input field
    // always remember to use ".value" to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3: get password
    //3.a: set id on the html element
    // 3.b: get the element 
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
   
    // DANGER: DO NOT VERIFY email and password on the client side this way
    // step-4: verify email and password
    if( email == 'shahabmat@gmail.com' && password == '12345'){
        location.href = 'bank.html';
    }else{
        alert('matha tik kor beta mal');
    }

})