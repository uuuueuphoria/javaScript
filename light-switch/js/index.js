/* 
windows on load even5
create 2 ref var img and button
button add click event

read and write an element attributes 
elm.getAttribute(attribute name)
elm.getAttribute(attribute name, assign value)
elm.value
elm.style
*/

window.addEventListener('load', function(){
    const light = document.querySelector('aside img');
    const switchButton = document.querySelector('button');
    let isLightOn=false;
    switchButton.addEventListener('click', function (e) {
        if(isLightOn===true){
            light.src='img/light-off.jpg'
            isLightOn=false;
        }else{
            light.src='img/light-on.jpg'
            isLightOn=true;
        }
    })
})

//global space, state variable
// = assignment
// == equality
// ===strict equality (check even data type)

let isAudioPlaying=false;
//true or false
if(isAudioPlaying===true){
    console.log('the audio is playing')
}else{
    console.log('audio is off')
    isAudioPlaying=true;
}





