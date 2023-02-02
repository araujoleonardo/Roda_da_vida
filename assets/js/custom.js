// Receber o seletor do formulário
var cadForm = document.getElementById("cad-usuario");

// Aguardar o usuário ao clicar no botão cadastrar do formulário
cadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    class objUsuario {
        constructor(nome, matricula, email, telefone) {
            this.nome = nome
            this.matricula = matricula
            this.email = email
            this.telefone = telefone
        }
    }

    // Receber os dados do formulário
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    //Salvar no localstorage
    let usuario = new objUsuario(nome, matricula, email, telefone);
    localStorage.setItem("usuario", JSON.stringify(usuario));
});


// Adiciona um evento de clique ao botão
document.getElementById('save-data').addEventListener('click', function() {
    // Recupera os dados do localstorage
    let usuarioData = JSON.parse(localStorage.getItem('usuario'));
    let habilidadesData = JSON.parse(localStorage.getItem('habilidadesEcompetencias'));
    let nivelamentoData = JSON.parse(localStorage.getItem('nivelamento'));
    let estHabitoData = JSON.parse(localStorage.getItem('estHabitoEstudo'));
    let saudeFisica = JSON.parse(localStorage.getItem('saudeFisica'))
    let saudeMental = JSON.parse(localStorage.getItem('saudeMental'))
    let bemEstar = JSON.parse(localStorage.getItem('bemEstar'))
    let equidade = JSON.parse(localStorage.getItem('equidade'))
    let integracao = JSON.parse(localStorage.getItem('integracao'))
    let acesAutonomia = JSON.parse(localStorage.getItem('acessibilidadeAutonomia'))
    let protIntegral = JSON.parse(localStorage.getItem('protecaoIntegral'))
    let respSocial = JSON.parse(localStorage.getItem('responsabilidadeSocial'))
    let cidConvivencia = JSON.parse(localStorage.getItem('cidadaniaConvivencia'))

    let data = {
        nome: usuarioData.nome,
        matricula: usuarioData.matricula,
        email: usuarioData.email,
        telefone: usuarioData.telefone,
        nota1: habilidadesData.nota1,
        nota2: nivelamentoData.nota2,
        nota3: estHabitoData.nota3,
        nota4: saudeFisica.nota4,
        nota5: saudeMental.nota5,
        nota6: bemEstar.nota6,
        nota7: equidade.nota7,
        nota8: integracao.nota8,
        nota9: acesAutonomia.nota9,
        nota10: protIntegral.nota10,
        nota11: respSocial.nota11,
        nota12: cidConvivencia.nota12
    };

    // Envia os dados para o script PHP via AJAX
    $.ajax({
        type: 'POST',
        url: 'salvar.php',
        data: { data: JSON.stringify(data) },
        success: function(response) {
            console.log(response);
            console.log(data);
        }
    });
});



