<?php

    // Conecta ao banco de dados
    $conn = mysqli_connect('localhost', 'root', '', 'roda_vida');

    // Verifica se a conexão foi bem sucedida
    if (!$conn) {
        die("Conexão falhou: " . mysqli_connect_error());
    }else {
        echo "Conexão realizada";
    }

    // Recupera os dados do localstorage
    $data = json_decode($_POST['data'], true);

    // Prepara a query de inserção
    $sql = "INSERT INTO usuarios (nome, matricula, email, telefone, nota1, nota2, nota3)
    VALUES ('" . $data['nome'] . "', '" . $data['matricula'] . "', '" . $data['email'] . "', '" . $data['telefone'] . "', '" . $data['nota1'] . "', '" . $data['nota2'] . "', '" . $data['nota3'] . "')";

    // Executa a query
    if (mysqli_query($conn, $sql)) {
        echo "Dados salvos com sucesso";
    } else {
        echo "Erro ao salvar dados: " . mysqli_error($conn);
    }

    // Fecha a conexão
    mysqli_close($conn);

?>
