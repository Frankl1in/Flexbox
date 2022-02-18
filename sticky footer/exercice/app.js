    var buttonDOM = document.getElementById('button');
    var texteDOM = document.getElementById('texte');
    var texte = texteDOM.innerHTML;
    var filled = false;

    buttonDOM.addEventListener('click', function() {
        if(filled){
            filled = false;
            texteDOM.innerHTML = texte;
        }else{
            filled = true;
            texteDOM.innerHTML = texte.repeat(35);
        }
    });