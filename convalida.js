$(function(){
$("#contatti").validate( {
    rules:{
        "nome":{
            require:true,
            minleght:3,
            
        },
        "email":{
            require:true,
            email: true
        },
        "messaggio":{
            require:true,
            minleght:8,
        }
},
messages:{
    "nome":{
        required: "Il nome è richiesto",
        minleght:"il tuo nome deve avere almeno 3 lettere "
    },
    "email":{
        required: "La tua mail è necessaria",
        email: "Immetti un email corretta"
    },
    "messaggio":{
        require: "Questo campo è obbligatorio",
        minleght: "devo esserci almeno 8 caratteri"
    }


},
submitHandler : function(form){
    form.submit();
}
}

)
});