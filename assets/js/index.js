function animacao(){
    const tela = document.querySelector('#tela')
    const triangulo = document.querySelector('#triangulo')
    
    if(tela.classList.contains(('slide-in'))){
        tela.classList.remove('slide-in')
        tela.classList.add('slide-out')
        triangulo.classList.remove('slide-in-t')
        triangulo.classList.add('slide-out-t')
    }else{
        tela.classList.add('slide-in')
        tela.classList.remove('slide-out')
        triangulo.classList.add('slide-in-t')
        triangulo.classList.remove('slide-out-t')
        
        
    }
}
