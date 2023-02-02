<?php

    include_once "./conexao.php";

    // Recupera os dados do localstorage
    $data = json_decode($_POST['data'], true);

    // Prepara a query de inserção
    $sql = "INSERT INTO usuarios (nome, matricula, email, telefone, nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9, nota10, nota11, nota12)
    VALUES ('" . $data['nome'] . "', 
        '" . $data['matricula'] . "', 
        '" . $data['email'] . "', 
        '" . $data['telefone'] . "', 
        '" . $data['nota1'] . "', 
        '" . $data['nota2'] . "', 
        '" . $data['nota3'] . "',
        '" . $data['nota4'] . "', 
        '" . $data['nota5'] . "', 
        '" . $data['nota6'] . "',
        '" . $data['nota7'] . "', 
        '" . $data['nota8'] . "', 
        '" . $data['nota9'] . "',
        '" . $data['nota10'] . "', 
        '" . $data['nota11'] . "', 
        '" . $data['nota12'] . "'
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
