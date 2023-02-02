<?php

    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'roda_vida';

    //$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    // Conecta ao banco de dados
    $conexao = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

    // Verifica se a conexão foi bem sucedida
    // if (!$conexao) {
    //     die("Conexão falhou: " . mysqli_connect_error());
    // }else {
    //     echo "Conexão realizada";
    // }
    