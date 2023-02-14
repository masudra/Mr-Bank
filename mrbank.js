document.getElementById('submit-btn') .addEventListener('click',function(){
   const userEmail =document.getElementById('emaile-adrres');
   const email =userEmail.value ;

   const userPassword =document.getElementById('password-input');
   const password =userPassword.value;

   if(email === 'mrbank@gmail.com' && password ==='mrbank123'){
      window.location.href = 'dashboard.html';
   }
   else{
    alert('Invalide Email and Password')
   }

   

})