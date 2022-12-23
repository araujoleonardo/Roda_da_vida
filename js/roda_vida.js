$(document).ready(()=>{
  var chart = AmCharts.makeChart( "chartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "country": "Habilidades e Competências"
    }, {
      "country": "Nivelamento"
    }, {
      "country": "Estratégias e Hábitos de Estudo"
    }, {
      "country": "Saúde Física"
    }, {
      "country": "Saúde Mental"
    }, {
      "country": "Bem-Estar"
    }, {
      "country": "Equidade"
    }, {
      "country": "Integração"
    }, {
      "country": "Acessibilidade e Autonomia"
    }, {
      "country": "Proteção Integral"
    }, {
      "country": "Responsabilidade Social"
    }, {
      "country": "Cidadania e Convivência"
    } ],
    "valueAxes": [ {
      "gridType": "circles",
      "axisTitleOffset": 20,
      "minimum": 0,
      "maximum": 10,
      "axisAlpha": 0.15,
      "guides": [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    } ],
    "graphs": [ {} ],
    "categoryField": "country"
  });
  
  /**
   * Sets value for particular index
   */
  
  $("#btnPDF").hide()
  let contagem = 0
  
  function setValue(index, value) {
    
    // Init starting positions
    var startAngle = 270;
    var angle = Math.round(360 / chart.dataProvider.length);
    
    // Create a guide
    var guide = new AmCharts.Guide();
    guide.angle = startAngle + angle * index;
    guide.fillAlpha = 1;
    guide.fillColor = chart.colors[index];
    guide.tickLength = 0;
    guide.toAngle = guide.angle + angle;
    guide.toValue = value;
    guide.value = 0;
    guide.lineAlpha = 0;
    
    // Add guide
    chart.valueAxes[0].guides[index] = guide;
    
    // Update category
    chart.dataProvider[index]["country"] = chart.dataProvider[index]["country"] + " " + value;
    
    if(contagem == 12){
      $("#btnPDF").show()
      console.log('igual a 12')}
    
    // Update chart
    chart.validateNow(true);
    
    // Reveal next question
    var areas = document.getElementsByClassName("area");
    for(var i = 0; i < areas.length; i++) {
      areas[i].style.display = (index + 1) === i ? "block" : "none";
    }
  }
  
  $("#btnPDF").click(()=>{
      window.print()
  })

  function inserirDadosNaRoda(){
    $("#quiz1, #quiz2, #quiz3, #quiz4, #quiz5, #quiz6, #quiz7, #quiz8, #quiz9, #quiz10, #quiz11, #quiz12, #resultado").hide()

    class areasVidas {
      constructor(area, nota){
        this.area = area
        this.nota = nota
      }
    }
    
    // ******************************************* AREA HOME *******************************************
    $("#btn0").click(()=>{

      $("#titleQ").html('Aprendizagem e Desenvolvimento > Habilidades e Competências')
      $("#home").remove()
      $("#quiz1").show()
    })
    

    // ******************************************* AREA APRENDIZAGEM E DESENVOLVIMENTO *******************************************
    $("#btn1").click(()=>{
      let inputes = document.querySelectorAll("input.aprendizagemDesenvolvimento")

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        console.log(mediaTudo)
        setValue(0, Math.round(mediaTudo))

        // salvando no logalStorage
        let salvarBD = new areasVidas(0, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("aprendizagemDesenvolvimento", salvando)

        $("#titleQ").html('Aprendizagem e Desenvolvimento > Nivelamento')
        $("#quiz1").remove()
        $("#quiz2").show()
      }
    })
    
    // ******************************************* AREA NIVELAMENTO *******************************************
    $("#btn2").click(()=>{
      let inputes = document.querySelectorAll("input.nivelamento")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        console.log(mediaTudo)
        setValue(1, Math.round(mediaTudo))

        let salvarBD = new areasVidas(1, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("nivelamento", salvando)

        $("#titleQ").html('Aprendizagem e Desenvolvimento > Estratégias e Hábitos de Estudo')
        $("#quiz2").remove()
        $("#quiz3").show() 
      }    
    })
    
    // ******************************************* AREA ESTRATÉGIA E HABITOS DE ESTUDO *******************************************
    $("#btn3").click(()=>{
      let inputes = document.querySelectorAll("input.estHabitoEstudo")
      

        let valor0 = inputes[0].value
        if(valor0 == "") {valor0 = 0}
        valor0 = parseInt(valor0)      

        let valor1 = inputes[1].value
        if(valor1 == "") {valor1 = 0}
        valor1 = parseInt(valor1)

        let valor2 = inputes[2].value
        if(valor2 == "") {valor2 = 0}
        valor2 = parseInt(valor2)

        if(valor0 < 0 || valor1 < 0 || valor2 < 0){
          alert('insira uma nota válida!')
        }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
          alert('insira uma nota válida!')
        }else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        console.log(mediaTudo)
        setValue(2, Math.round(mediaTudo))

        let salvarBD = new areasVidas(2, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("estHabitoEstudo", salvando)

        $("#titleQ").html('Saúde Integral > Saúde Física')
        $("#quiz3").remove()
        $("#quiz4").show()
      }
    })

    // ******************************************* AREA SAÚDE FISICA *******************************************
    $("#btn4").click(()=>{
      let inputes = document.querySelectorAll("input.saudeFisica")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(3, Math.round(mediaTudo))

        let salvarBD = new areasVidas(3, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("saudeFisica", salvando)

        $("#titleQ").text('Saúde Integral > Saúde Mental')
        $("#quiz4").remove()
        $("#quiz5").show() 
      }    
    })

    // ******************************************* AREA SAÚDE MENTAL *******************************************
    $("#btn5").click(()=>{
      let inputes = document.querySelectorAll("input.saudeMental")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }else{mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(4, Math.round(mediaTudo))

        let salvarBD = new areasVidas(4, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("saudeMental", salvando)

        $("#titleQ").text('Saúde Integral > Bem-Estar')
        $("#quiz5").remove()
        $("#quiz6").show()
      }  
    })

    // ******************************************* AREA VIDA BEM-ESTAR *******************************************
    $("#btn6").click(()=>{
      let inputes = document.querySelectorAll("input.bemEstar")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(5, Math.round(mediaTudo))

        let salvarBD = new areasVidas(5, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("bemEstar", salvando)

        $("#titleQ").text('Inclusão e Diversidade Humana > Equidade')
        $("#quiz6").remove()
        $("#quiz7").show() 
        }    
    })
    
    // ******************************************* AREA EQUIDADE *******************************************
    $("#btn7").click(()=>{
      let inputes = document.querySelectorAll("input.equidade")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(6, Math.round(mediaTudo))

        let salvarBD = new areasVidas(6, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("equidade", salvando)

        $("#titleQ").text('Inclusão e Diversidade Humana > Integração')
        $("#quiz7").remove()
        $("#quiz8").show() 
        }    
    })

    // ******************************************* AREA INTEGRAÇÃO *******************************************
    $("#btn8").click(()=>{
      let inputes = document.querySelectorAll("input.integracao")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(7, Math.round(mediaTudo))

        let salvarBD = new areasVidas(7, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("integracao", salvando)

        $("#titleQ").text('Inclusão e Diversidade Humana > Acessibilidade e Autonomia')
        $("#quiz8").remove()
        $("#quiz9").show() 
        }    
    })

    // ******************************************* AREA ACESSIBILIDADE E AUTONOMIA *******************************************
    $("#btn9").click(()=>{
      let inputes = document.querySelectorAll("input.acessibilidadeAutonomia")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(8, Math.round(mediaTudo))

        let salvarBD = new areasVidas(8, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("acessibilidadeAutonomia", salvando)

        $("#titleQ").text('Garantia de Direitos e Proteção Integral > Proteção Integral')
        $("#quiz9").remove()
        $("#quiz10").show() 
        }    
    })

    // ******************************************* AREA PROTEÇÃO INTEGRAL *******************************************
    $("#btn10").click(()=>{
      let inputes = document.querySelectorAll("input.protecaoIntegral")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(9, Math.round(mediaTudo))

        let salvarBD = new areasVidas(9, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("protecaoIntegral", salvando)

        $("#titleQ").text('Garantia de Direitos e Proteção Integral > Responsabilidade Social')
        $("#quiz10").remove()
        $("#quiz11").show() 
        }    
    })

    // ******************************************* AREA RESPONSABILIDADE SOCIAL *******************************************
    $("#btn11").click(()=>{
      let inputes = document.querySelectorAll("input.responsabilidadeSocial")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(10, Math.round(mediaTudo))

        let salvarBD = new areasVidas(10, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("responsabilidadeSocial", salvando)

        $("#titleQ").text('Garantia de Direitos e Proteção Integral > Cidadania e Convivência')
        $("#quiz11").remove()
        $("#quiz12").show() 
        }    
    })

    // ******************************************* AREA CIDADANIA E CONVIVÊNCIA *******************************************
    $("#btn12").click(()=>{
      let inputes = document.querySelectorAll("input.cidadaniaConvivencia")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2) / 3
        setValue(11, Math.round(mediaTudo))

        let salvarBD = new areasVidas(11, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("cidadaniaConvivencia", salvando)

        $("#titleQ").text('Resultado').addClass("mt-5")
        $("#quiz12, #infoDaNota").remove()
        $("#resultado").show()
        }    
    })
   
    $("button.btn-info").click(()=>{
      window.scroll(0, 0)
    })
  }

  inserirDadosNaRoda()
})