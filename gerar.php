<?php
ob_start();
require './gerar-html.php';
$html = ob_get_clean();
require_once './vendor/autoload.php';

use Dompdf\Dompdf;

$dompdf = new Dompdf();
$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

$dompdf->stream('currículo.pdf');
