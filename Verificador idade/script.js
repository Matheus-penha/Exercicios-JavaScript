function verificar(){
    /*variáveis para pegar informações necessárias*/
    var name = document.getElementById('txtnome').value;
    var ano_nasc = document.getElementById('txtnum');
    /*variáveis para armazenar o ano atual*/
    var data = new Date();
    var ano = data.getFullYear();    

    if(ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano || Number(ano_nasc.value) < 1900){
        alert("Existem informações incompatíveis, tente novamente.");
    }else{
        var radio = document.getElementsByName('radiochoice');
        var res = document.getElementById('res');
        var idade = ano - Number(ano_nasc.value);
        var genero= '';
    }if(radio[0].checked){
        genero = 'Masculino';
        /*console.log(genero)*/
        if(idade >= 0 && idade <=10){
            res.innerHTML  = `${name}, você é do gênero ${genero} e tem ${idade} anos!`;
        }else if(idade < 18){
            res.innerHTML = `${name}, você é do gênero ${genero} e tem ${idade} anos!`;
        }else if(idade >= 18){
            res.innerHTML = `${name}, você é do gênero ${genero} e tem ${idade} anos!`;
        }
    }else if(radio[1].checked){
        genero = 'Feminino'
        if(idade >= 0 && idade <=10){
            res.innerHTML = `${name}, você é do gênero ${genero} e tem ${idade} anos!`;
        }else if(idade < 18){
            res.innerHTML = `${name}, você é do gênero ${genero} e tem ${idade} anos!`;
        }else if(idade >= 18){
            res.innerHTML = `${name}, você é do gênero ${genero} e tem ${idade} anos!`;
        }
    }else if(radio[2].checked){
        if(idade >= 0 && idade <=10){
            res.innerHTML = `${name}, você preferiu não revelar seu gênero, sua idade é de ${idade} anos!`;
        }else if(idade < 18){
            res.innerHTML = `${name}, você preferiu não revelar seu gênero, sua idade é de ${idade} anos!`;
        }else if(idade >=18){
            res.innerHTML = `${name}, você preferiu não revelar seu gênero, sua idade é de ${idade} anos!`;
        }
    }
}   
