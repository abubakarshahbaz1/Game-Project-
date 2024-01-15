document.onkeydown= function(e){
    console.log("key code is ",e.keycode)
    if(e.keycode==38){
        ch=document.querySelector('.ch');
        ch.classlist.add('animatech');
        setTimeout(() => {
            ch.classlist.remove('animatech')},700); 
        }
    }
