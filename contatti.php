<?php
if (isset($_POST["submit"]))
{
    $nome=trim(strip_tags($_POST["nome"]));
    $emaiò=trim(strip_tags($_POST["email"]));
    $messaggio=trim(strip_tags($_POST["messaggio"]));

$header = "From $email" . "a nome di $nome";
$subject = "Email form MircoAPPP"
$indirizzo = "appmircoapp@gmail.com"





if(mail($indirizzo, $subject, $messaggio, $header)){
    echo "Email inviata correttamente";
} else {
    echo "errore nell'invio della mail :( riprovare piu tardi
    Ci scusiamo del inconveniente"
}




}



?>