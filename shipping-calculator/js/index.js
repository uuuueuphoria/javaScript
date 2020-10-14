const rate=11.75;

window.addEventListener('load', function(e){
    const quoteButton = document.querySelector('form')
    const warning = document.querySelector('.warning')
    let price = document.querySelector('.rate')
    const input = document.querySelector('input')
    const text=document.querySelector('.warning-text')
    quoteButton.addEventListener('submit', function(e){
        e.preventDefault();
        let validationData=Number(input.value.trim())
        if(isNaN(validationData)){
            warning.classList.remove('hide')
            price.textContent='Invalid'
            text.textContent='You need to enter a number'
        }
        else if (validationData < 1) {
            price.textContent = '$11.75';
            warning.classList.remove('hide')
            text.textContent = 'one kilogram minimum shipping rate will apply'
        }
        else if (validationData > 1000) {
            warning.classList.remove('hide') 
            price.textContent = 'Invalid';
            text.textContent = 'Maxmimum weight is 1000kg'     
        }
        else{
            warning.classList.add('hide')
            price.textContent=`$${rate*validationData}`;
        }
    })   
})
