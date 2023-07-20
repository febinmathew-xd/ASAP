<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Dompdf\Dompdf;

use Illuminate\Support\Facades\Storage;

class PdfGeneratorController extends Controller
{
    //

    public function index($data)
    {

        $pdf = new Dompdf();
        $pdf->loadHtml(view('certificate', compact('data'))->render());
        $pdf->render();


        $filename = "$data->username._.$data->title._.certificate.pdf";
        $filePath = public_path('\public\img\\' . $filename);

        file_put_contents($filePath, $pdf->output());

        $publicPath = asset($filename);

        return $filename;

    }
}