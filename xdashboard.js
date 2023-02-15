document.getElementById('deposit-submit-btn').addEventListener('click',function(){
    const  depositFild =document.getElementById('deposit-input-filed');
    const depostiAmount =depositFild.value ;
    const newDipositAmound =parseFloat(depostiAmount);

    if(isNaN(newDipositAmound)){
        alert('Please input Number');
        return;
    
       }
     
   const depositTotal =document.getElementById('deposit-text');
   const depostiAmountTotal =depositTotal.innerText;
   const curentDepositAmound = parseFloat(depostiAmountTotal);



   const totalDepositAmount = newDipositAmound + curentDepositAmound;
   depositTotal.innerText = totalDepositAmount;



  const balanceTextAdd = document.getElementById('Balance-text');
  const balanceIner = balanceTextAdd.innerText; 
  const totalBalance = parseFloat(balanceIner);

  const depositToBlanceAdd = totalBalance +newDipositAmound;
  balanceTextAdd.innerText = depositToBlanceAdd;


    depositFild.value= '';


})


// Withdraw==============-------------


document.getElementById('Withdraw-submit-btn').addEventListener('click',function(){
    const  withdrawFild = document.getElementById('Withdraw-input-filed');
    const withdrawFildValue = withdrawFild.value;
    const newWithdrawAmount = parseFloat(withdrawFildValue);

   if(isNaN(newWithdrawAmount)){
    alert('Please input Number');
    return;

   }

    const withdrawText =document.getElementById('Withdraw-text');
    const withdrawTextInerText = withdrawText.innerText;
    const curentWithdrawAmount =parseFloat(withdrawTextInerText);


   
     const balanceTotal1= document.getElementById('Balance-text');
     const balanceTotal1InerText11 =balanceTotal1.innerText;
     const BalanceTotoal11 = parseFloat(balanceTotal1InerText11);

     withdrawFild.value = '';

     if(newWithdrawAmount >= BalanceTotoal11  ){
        alert('Your account does not have enough money. You must have one dollar left in your account')
        return;
    }
    const totalwithdraw = newWithdrawAmount + curentWithdrawAmount;
    withdrawText.innerText = totalwithdraw;



     const calculetBalance =  BalanceTotoal11 -newWithdrawAmount;
     balanceTotal1.innerText = calculetBalance;


    

})
