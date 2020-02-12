const axios = require('axios');

axios.get("https://viacep.com.br/ws/12400040/json/")
.then(function(res){
    const viacep = res.data;

    if (viacep.complemento){
        console.log(viacep.cep);
        console.log(viacep.logradouro);
        console.log(viacep.complemento);
        console.log(viacep.bairro);
        console.log(viacep.localidade);
        console.log(viacep.uf);
        console.log(viacep.unidade);
    }
    else {
        console.log(viacep.cep);
        console.log(viacep.bairro);
        console.log(viacep.localidade);
        console.log(viacep.uf);
    }

})