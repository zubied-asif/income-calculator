function getInputValue(id){
    const inputField = document.getElementById(id);
    const value = parseFloat(inputField.value);
    return value;
} 
function getInputText(id){
    const inputField = document.getElementById(id);
    const value = parseFloat(inputField.innerHTML);
    return value;
} 
function funOne(){
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');

    const totalExpense = document.getElementById('total');
    const remaining = document.getElementById('remaining');

    const expense = food+rent+clothes;
    const total = income - expense ;
    

    totalExpense.innerText = expense + '৳';
    remaining.innerText = total + '৳';
    
    if(expense > income){
        
        alert("you don't have enough money to spend");
        totalExpense.innerText = [] + '৳';
        remaining.innerText = [] + '৳';
        document.getElementById('income').value = [];
        document.getElementById('food').value = [];
        document.getElementById('rent').value = [];
        document.getElementById('clothes').value = [];
        

        return;
    }
}

function funTwo(){

    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    
    const clothes = getInputValue('clothes');
   
    const expense = food+rent+clothes;
 
    const total = income - expense ;
   

    
    const save = getInputValue('saving');
    
    const savingAmount = document.getElementById('saving-amount');
   
    savingAmount.innerText = income*save / 100  + '৳'
  
    const remainingAmount = document.getElementById('remaining-amount');

    remainingAmount.innerHTML = total - parseFloat( savingAmount.innerText) +'৳';

    if(parseFloat( savingAmount.innerText) > total ){
        alert("you don't have enough money to save");
      
        savingAmount.innerText = [] + '৳';
        remainingAmount.innerText = [] + '৳';


    }


    
}