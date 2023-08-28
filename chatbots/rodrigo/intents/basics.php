<?php


/* use GuzzleHttp\Client;
use GuzzleHttp\Request; */
// 1. Basic Intent

if (intent('basics_welcome')){

    $context = false;
    $contextBody = [];
    $webTitle = ["basics_welcome"];

    $imageArray = ["https://hips.hearstapps.com/hmg-prod/images/demon-slayer-mugen-train-1677251045.jpg"];

    $aTitleArray = ["Hola Soy Rodrigo, en que te puedo ayudar?"];
    $aSubtitleArray = ["Escoge un opcion"];
    $aTextArray = ["Card Accordeon Text"];

    $cTitleArray = ["Quienes somos","Donde no ubicamos","Que ofrecemos"];
    $cImageArray = ["$img_Geo","$img_Geo","$img_Geo"];
    $cCustomArray = ["Somos","Ubicacion","ofrecemos"];


    $structure = ['image','comma','card','superDivider','reply'];
    $components = [
        [$imageArray,$webTitle],
        [],
        [$aTitleArray,$aSubtitleArray,$aTextArray],
        [],
        [$cTitleArray, $cImageArray, $cCustomArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);

}



if(intent('basics_cita')){
    //Atrapar parametro cita

    $tipoPregunta = getIntentParameter()['cita'];

    if ($tipoPregunta == 'agendar cita') {
        $context = false;
        $contextBody = [];
        $webTitle = ["basics_cita"];
    
        $pTitleArray = ["Guia"];
        $pSubtitleArray = ["Crear cuenta"];
    
        $dTitleArray = ["Gui formafo"];
        $dTextArray = [["*Nombre","*Apellido"]];
    
    
        $structure = ['paragraph','superDivider','description'];
        $components = [
            [$pTitleArray,$pSubtitleArray],
            [],
            [$dTitleArray,$dTextArray]
        ];
    
        webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    }else{
        triggerError(false,[],['test'],["$tipoPregunta"],[]);
    }

}




if(intent('basics_info')){

    $tipoInformacion = getIntentParameter()['informacion'];

    if($tipoInformacion == "quienes somos"){

        $context = false;
        $contextBody = [];
        $webTitle = ["basics_info"];

        $imageArray = ["https://hips.hearstapps.com/hmg-prod/images/demon-slayer-mugen-train-1677251045.jpg"];

        $aTitleArray = ["Somos Bonitos y gorditos"];
        $aSubtitleArray = ["Somos una clinica veterinaria"];
        $aTextArray = ["nos expecializamos en animales"];

        $structure = ['image','comma','card'];
        $components = [
            [$imageArray,$webTitle],
            [],
            [$aTitleArray,$aSubtitleArray,$aTextArray],
        ];

        webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    }elseif ($tipoInformacion == "servicios"){
        $context = false;
        $contextBody = [];
        $webTitle = ["basics_info"];

        $imageArray = ["https://hips.hearstapps.com/hmg-prod/images/demon-slayer-mugen-train-1677251045.jpg"];
        $aTitleArray = ["La clinica bonitos y gorditos se compromete a brindarte los mejores servicios"];
        $aSubtitleArray = ["Ofrecemos:"];
        $aTextArray = ["consultas medicas, baños, cortes, cirugias, hospedaje"];

        $bTitleArray = ["Agendar cita","Proxima cita"];
        $bCustomArray = ["basics_changeCita","somos"];
        $bIconArray = ["change_circle","change_circle"];
        $bColorArray = ["#00efff","#000fff"];


        $structure = ['image','comma','card','superDivider','button'];
        $components = [
            [$imageArray,$webTitle],
            [],
            [$aTitleArray,$aSubtitleArray,$aTextArray],
            [],
            [$bTitleArray,$bCustomArray,$bIconArray,$bColorArray]
        ];

        webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    }
    else{
        triggerError(false,[],['test'],["$tipoInformacion"],[]);
    }

}

if(intent('basics_changeCita')){

    $context = false;
    $contextBody = [];

    $aTitleArray = ["Desea apartar una cita?"];
    $aSubtitleArray = ["escoja un opcion, para apartar una cita debe tener una cuenta creada en bonitos y gorditos."];
    $aTextArray = [""];

    $bTitleArray = ["Tengo un cuenta","No tengo cuenta","abotar mision"];
    $bCustomArray = ["basics_crearCuenta","sin cuenta"];
    $bIconArray = ["change_circle","change_circle"];
    $bColorArray = ["#00efff","#000fff"];


    $structure = ['card','superDivider','button'];
    $components = [
        [$aTitleArray,$aSubtitleArray,$aTextArray],
        [],
        [$bTitleArray,$bCustomArray,$bIconArray,$bColorArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
}


if(intent('basics_crearCuenta')){

    $context = false;
    $contextBody = [];

    $aTitleArray = ["Para crear una cuenta debe digitar el el siguiente formato"];
    $aSubtitleArray = ["el no ingrese los datos juntos ingrese de 1 en 1"];
    $aTextArray = [""];


    $structure = ['card','superDivider','button'];
    $components = [
        [$imageArray,$webTitle],
        [],
        [$aTitleArray,$aSubtitleArray,$aTextArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);

    $dTitleArray = ["nota: asegurese de que nadie vea su contraseña :v"];
    $dTextArray = [["Nombre","Apellido Paterno","Apellido Materno","correo","contraseña"]];

    webDescription($dTitleArray, $dTextArray);
}

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

if(intent('crear_cuenta')){


    $nombre = getIntentParameter()['person'];
    $app = getIntentParameter()['last-name-p'];
    $apm = getIntentParameter()['last-name-m'];
    $password = getIntentParameter()['language'];
    $dni = getIntentParameter()['number'];
    $email = getIntentParameter()['email'];

    $client = new Client();

    // Prepare Request
    $request = new Request('POST', 'http://127.0.0.1:8000/api/register');
    
    // Send Request
    $response = $client->send($request, [
        'headers' => [
            'Content-Type' => 'application/json',
        ],
        'json' => [
            "nombre"=> $nombre,
            "email"=> $email,
            "password"=> $password,
            "dni"=> $dni,
            "app"=> $app,
            "apm"=> $apm
        ]
    ]);
    
    // Read Response
    $responseBody = $response->getBody()->getContents();
    print_r($responseBody);
    

}



if (intent('variable_nombre')) {
    
    $inputuser = getUserInput();
    $contextIndex = [0];

    $parameters = [
        'nombre' =>$inputuser
    ];


    $context = true;
    $contextBody = updateContextParameters($contextIndex,$parameters);
    $webTitle = ["basics_cita"];

    $pTitleArray = ["Guia"];
    $pSubtitleArray = ["Crear cuenta"];

    $dTitleArray = ["datos"];
    $dTextArray = [["$inputuser"]];


    $structure = ['paragraph','superDivider','description'];
    $components = [
        [$pTitleArray,$pSubtitleArray],
        [],
        [$dTitleArray,$dTextArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    
}

if (intent('variable_apellido')) {
    
    $inputuser = getUserInput();
    $contextIndex = [0];

    $parameters = [
        'apellido_p' =>$inputuser
    ];


    $context = true;
    $contextBody = updateContextParameters($contextIndex,$parameters);
    $webTitle = ["basics_cita"];

    $pTitleArray = ["Guia"];
    $pSubtitleArray = ["Crear cuenta"];

    $dTitleArray = ["datos"];
    $dTextArray = [["$inputuser"]];


    $structure = ['paragraph','superDivider','description'];
    $components = [
        [$pTitleArray,$pSubtitleArray],
        [],
        [$dTitleArray,$dTextArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    
}


if (intent('variable_apellidom')) {
    
    $inputuser = getUserInput();
    $contextIndex = [0];

    $parameters = [
        'apellido_m' =>$inputuser
    ];


    $context = true;
    $contextBody = updateContextParameters($contextIndex,$parameters);
    $webTitle = ["basics_cita"];

    $pTitleArray = ["Guia"];
    $pSubtitleArray = ["Crear cuenta"];

    $dTitleArray = ["datos"];
    $dTextArray = [["$inputuser"]];


    $structure = ['paragraph','superDivider','description'];
    $components = [
        [$pTitleArray,$pSubtitleArray],
        [],
        [$dTitleArray,$dTextArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    
}

if (intent('variable_dni')) {
    
    $inputuser = getUserInput();
    $contextIndex = [0];

    $parameters = [
        'number' =>$inputuser
    ];


    $context = true;
    $contextBody = updateContextParameters($contextIndex,$parameters);
    $webTitle = ["basics_cita"];

    $pTitleArray = ["Guia"];
    $pSubtitleArray = ["Crear cuenta"];

    $dTitleArray = ["datos"];
    $dTextArray = [["$inputuser"]];


    $structure = ['paragraph','superDivider','description'];
    $components = [
        [$pTitleArray,$pSubtitleArray],
        [],
        [$dTitleArray,$dTextArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    
}

if (intent('variable_correo')) {
    
    $inputuser = getUserInput();
    $contextIndex = [0];

    $parameters = [
        'email' =>$inputuser
    ];


    $context = true;
    $contextBody = updateContextParameters($contextIndex,$parameters);
    $webTitle = ["basics_cita"];

    $pTitleArray = ["Guia"];
    $pSubtitleArray = ["Crear cuenta"];

    $dTitleArray = ["datos"];
    $dTextArray = [["$inputuser"]];


    $structure = ['paragraph','superDivider','description'];
    $components = [
        [$pTitleArray,$pSubtitleArray],
        [],
        [$dTitleArray,$dTextArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    
}


if (intent('variable_password')) {
    
    $inputuser = getUserInput();
    $contextIndex = [0];

    $parameters = [
        'password' =>$inputuser
    ];


    $context = true;
    $contextBody = updateContextParameters($contextIndex,$parameters);
    $webTitle = ["basics_cita"];

    $pTitleArray = ["Guia"];
    $pSubtitleArray = ["Crear cuenta"];

    $dTitleArray = ["datos"];
    $dTextArray = [["$inputuser"]];


    $structure = ['paragraph','superDivider','description'];
    $components = [
        [$pTitleArray,$pSubtitleArray],
        [],
        [$dTitleArray,$dTextArray]
    ];

    webStructureTemplate($context, $contextBody, $webTitle, $structure, $components);
    
}



?>