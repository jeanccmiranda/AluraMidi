const midiButtons = document.querySelectorAll('.tecla');
const soundList = document.querySelectorAll('.som_tecla');


function playSound(index){
    soundList[index].play();

}
// audioBiding
for(let index = 0; index < soundList.length; index++){
    midiButtons[index].onclick = function (){
        playSound(index);
    }

    midiButtons[index].onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            midiButtons[index].classList.add('ativa');
        }
    
    }
    
    midiButtons[index].onkeyup = function () {
        midiButtons[index].classList.remove('ativa');
    }
}
// audioBiding
