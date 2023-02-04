<?php

    include_once "./conexao.php";

    // Recupera os dados do localstorage
    $data = json_decode($_POST['data'], true);

    $data1 = ($data['nota1'] + $data['nota2'] + $data['nota3'])/3;
    $data2 = ($data['nota4'] + $data['nota5'] + $data['nota6'])/3;
    $data3 = ($data['nota7'] + $data['nota8'] + $data['nota9'])/3;
    $data4 = ($data['nota10'] + $data['nota11'] + $data['nota12'])/3;

    // Prepara a query de inserção
    $sql = "INSERT INTO usuarios (nome, matricula, email, telefone, nota1, nota2, nota3, nota4)
    VALUES ('" . $data['nome'] . "', 
        '" . $data['matricula'] . "', 
        '" . $data['email'] . "', 
        '" . $data['telefone'] . "', 
        '" . $data1 . "', 
        '" . $data2 . "',
        '" . $data3 . "',
        '" . $data4 . "'
    )";

    // Executa a query
    if (mysqli_query($conexao, $sql)) {
        echo "Dados salvos com sucesso";
    } else {
        echo "Erro ao salvar dados: " . mysqli_error($conexao);
    }

    // Fecha a conexão
    mysqli_close($conexao);

?>
