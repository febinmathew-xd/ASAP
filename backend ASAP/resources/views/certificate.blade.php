<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <style>
    @page {
        margin: 0;
    }

    body {
        background-color: #f1f1f1;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 50px;
    }

    .container {
        background-color: #fff;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        border: 5px solid #219ebc
    }

    .header {
        margin-bottom: 30px;
    }

    .header h1 {
        color: #FF5722;
        font-size: 28px;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        border-bottom: 2px solid #FF5722;
        padding-bottom: 10px;
        display: inline-block;
    }

    .subheader {
        margin-bottom: 30px;
    }

    .subheader p {
        color: #666;
        font-size: 20px;
        margin: 0;
    }

    .content {
        margin-top: 50px;
    }

    .content h2 {
        color: #3F51B5;
        font-size: 24px;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 2px solid #3F51B5;
        display: inline-block;
        padding-bottom: 10px;
    }

    .content p {
        color: #777;
        font-size: 18px;
        margin: 0;
    }

    .footer {
        margin-top: 50px;
    }

    .footer p {
        color: #666;
        font-size: 16px;
        margin: 0;
    }

    .underline {
        border-bottom: 1px solid;
        display: inline-block;
    }

    .border-color1 {
        border-color: #9C27B0;
    }

    .border-color2 {
        border-color: #E91E63;
    }

    .text-color1 {
        color: #9C27B0;
    }

    .text-color2 {
        color: #E91E63;
    }
    </style>
</head>
@php
use Carbon\Carbon;
$opciones_ssl=array(
"ssl"=>array(
"verify_peer"=>false,
"verify_peer_name"=>false,
),
);
$img_path = 'public/img/admin_sign.png';
$extencion = pathinfo($img_path, PATHINFO_EXTENSION);
$imgdata = file_get_contents($img_path, false, stream_context_create($opciones_ssl));
$img_base_64 = base64_encode($imgdata);
$path_img = 'data:image/' . $extencion . ';base64,' . $img_base_64;
@endphp 

<body>
    <div class="container">
        <div class="header">
            <h1>ASAP Certificate of Achievement</h1>
        </div>

        <div class="subheader">
            <p>This is to certify that</p>
        </div>

        <div class="content " style="margin-bottom:20px">
            <h2>{{$data->username}}</h2>
            <p>has successfully completed the course</p>
            <h3 style="color: #4CAF50;">{{$data->title}}</h3>
        </div>

        <div class="footer">
            <p>Date: <span class="text-color1">{{ \Carbon\Carbon::now()->format('F d, Y') }}</span></p>
            <p>Signature: 
            
            <br/>
            <br/>
            <br/>
            <br/>
            <img src="{{$path_img}}" alt='sign'    width="150" height="150"/> 
        </div>
    </div>
</body>

</html>