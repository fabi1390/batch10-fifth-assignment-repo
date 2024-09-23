const showHistoryBtn = document.getElementById('show-history-btn');
const showDonateBtn = document.getElementById('show-donate-btn');
const donateNowBtn = document.getElementById('donate-now');
const donateNowBtn2 = document.getElementById('donate-now2');
const donateNowBtn3 = document.getElementById('donate-now3');
showHistoryBtn.addEventListener('click',function(){
    showHistoryBtn.classList.remove("bg-white", "border", "border-gray-300");
    showHistoryBtn.classList.add('bg-btn-bg');
    showDonateBtn.classList.remove('bg-btn-bg');
    showDonateBtn.classList.add("bg-white", "border", "border-gray-300");
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    
})
showDonateBtn.addEventListener('click', function(){
    showDonateBtn.classList.remove("bg-white", "border", "border-gray-300");
    showDonateBtn.classList.add('bg-btn-bg');
    showHistoryBtn.classList.add("bg-white", "border", "border-gray-300");
    showHistoryBtn.classList.remove('bg-btn-bg');

    document.getElementById('history-section').classList.add("hidden");
    document.getElementById('donate-section').classList.remove("hidden");

})
donateNowBtn.addEventListener('click', function(){
    const donateMoney= getInputField('input-field');
    donateMoneyNumber= parseFloat(donateMoney);
    const balance = getTextById('total-input-amount');
        const balanceNumber = parseFloat(balance);
     
     if(donateMoneyNumber <= balance && donateMoneyNumber !=="" && donateMoneyNumber>0){
        
        const newBalance = balanceNumber - donateMoneyNumber;
        document.getElementById('total-input-amount').innerText = newBalance;
        const donationAmount= getTextById('donation-amount');
        const donationAmountNumber = parseFloat(donationAmount);
             const donationCardAmount = donationAmountNumber + donateMoneyNumber
        document.getElementById('donation-amount').innerText= donationCardAmount;
     }
      else{
        alert('Invalid data is found and stop the transaction')
      }
      const transactionForm = document.getElementById('transaction-history');
      transactionForm.innerHTML=`<h1>${donateMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
       <p class="text-sm text-lighter-text mt-4">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>`
       transactionForm.classList.remove('hidden');
})
donateNowBtn2.addEventListener('click', function(){
    const donateMoney2= getInputField('input-field2');
    donateMoneyNumber2= parseFloat(donateMoney2);
    const balance = getTextById('total-input-amount');
        const balanceNumber = parseFloat(balance);
     
     if(donateMoneyNumber2 <= balance && donateMoneyNumber2 !=="" &&  donateMoneyNumber2 >0){
        
        const newBalance = balanceNumber - donateMoneyNumber2;
        document.getElementById('total-input-amount').innerText = newBalance;
        const donationAmount2= getTextById('donation-amount2');
        const donationAmountNumber2 = parseFloat(donationAmount2);
             const donationCardAmount2 = donationAmountNumber2 + donateMoneyNumber2;
        document.getElementById('donation-amount2').innerText= donationCardAmount2;
     }
      else{
        alert('Invalid data is found and stop the transaction')
      }
      const transactionForm2 = document.getElementById('transaction-history2');
      transactionForm2.innerHTML=`<h1>${donateMoney2} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
       <p class="text-sm text-lighter-text mt-4">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>`
       transactionForm2.classList.remove('hidden');
})
donateNowBtn3.addEventListener('click', function(){
    const donateMoney3= getInputField('input-field3');
    donateMoneyNumber3= parseFloat(donateMoney3);
    const balance = getTextById('total-input-amount');
        const balanceNumber = parseFloat(balance);
     
     if(donateMoneyNumber3 <= balance && donateMoneyNumber3 !=="" && typeof donateMoneyNumber3 !=='negative number'){
        
        const newBalance = balanceNumber - donateMoneyNumber3;
        document.getElementById('total-input-amount').innerText = newBalance;
        const donationAmount3= getTextById('donation-amount3');
        const donationAmountNumber3= parseFloat(donationAmount3);
             const donationCardAmount3 = donationAmountNumber3 + donateMoneyNumber3;
        document.getElementById('donation-amount3').innerText= donationCardAmount3;
     }
      else{
        alert('Invalid data is found and stop the transaction')
      }
      const transactionForm3 = document.getElementById('transaction-history3');
      transactionForm3.innerHTML=`<h1>${donateMoney3} Taka is Donated for famine-2024 at Quota Movement Injured people , Bangladesh</h1>
       <p class="text-sm text-lighter-text mt-4">${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} (Bangladesh Standard Time)</p>`
       transactionForm3.classList.remove('hidden');
       
})

