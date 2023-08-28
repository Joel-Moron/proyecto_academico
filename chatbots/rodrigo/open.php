<?php
##-----------------------------Core--------------------------##
// Zaroc
require_once("../zaroc/zaroc.php");                          # Zaroc Library
// Vendor
require_once("../vendor/autoload.php");                    # Optional (For vendor and thir party components)

##------------------Chatbot Variables------------------------##
// Links, Emails, Information
require_once("core/variables.php");                         # Informational Variables
// Url of common images
require_once("core/images.php");                            # Specific Images for your bot

##---------------------------Classes----------------------------------##
# Classes

require_once("classes/Sessions.php");
require_once("classes/Transcripts.php");

##---------------------------VIEWS----------------------------------##
# basicIntents
require_once("intents/test.php");                        #To make test Create Test Intent, connect Webhook and test your Request/Response

// require_once("functionalities/functionalities.php");    # Transcripts functionality

/* use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

$client = new Client();

// Prepare Request
$request = new Request('POST', 'http://127.0.0.1:8000/api/register');

// Send Request
$response = $client->send($request, [
    'headers' => [
        'Content-Type' => 'application/json',
    ],
    'json' => [
        "nombre"=>"joelito",
        "email"=>"jmo123@gmail.com",
        "password"=>"123456",
        "dni"=> "45681354",
        "app"=>"moroncito",
        "apm"=>"ochan"
    ]
]);

// Read Response
$responseBody = $response->getBody()->getContents();
print_r($responseBody); */


?>
