/*
application scope window load
refvar = img, input field
img click event
create a state var to switch img between eye open and eye closed
condition check the state var, toggle the img and input
img.src
input.type
*/

window.addEventListener('load', function(e){
    const eye=document.querySelector('.password img');
    const input=document.querySelector('input');
    let eyeOpen = false;
    eye.addEventListener('click', function(e){
        if(eyeOpen===true){
            eye.src='img/icons/eye-closed.svg';
            input.type='text';
            eyeOpen = false;
        }else{
            eye.src='img/icons/eye-open.svg';
            input.type='password';
            eyeOpen = true;
        }
    })
})