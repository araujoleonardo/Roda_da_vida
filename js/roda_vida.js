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
  } );
  
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
    $("#quiz2, #quiz3, #quiz4, #quiz5, #quiz6, #resultado").hide()

    class areasVidas {
      constructor(area, nota){
        this.area = area
        this.nota = nota
      }
    }
    
    // ******************************************* AREA APRENDIZAGEM E DESENVOLVIMENTO *******************************************
    $("#btn1").click(()=>{
      let inputes = document.querySelectorAll("input.areaAprendizagemDesenvolvimento")

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
        localStorage.setItem("areaAprendizagemDesenvolvimento", salvando)

        $("#titleQ").html('Nivelamento')
        $("#quiz1").remove()
        $("#quiz2").show()
      }
    })
    
    // ******************************************* AREA NIVELAMENTO *******************************************
    $("#btn2").click(()=>{
      let inputes = document.querySelectorAll("input.areaNivelamento")
      

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
        localStorage.setItem("areaNivelamento", salvando)

        $("#titleQ").html('Estratégias e Hábitos de Estudo <i class="fas fa-users"></i>')
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

        $("#titleQ").html('Saúde Física')
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

        $("#titleQ").text('Saúde Mental')
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

        $("#titleQ").text('Bem-Estar')
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

        $("#titleQ").text('Resultado')
        $("#quiz6").remove()
        $("#resultado").show() 
        }    
    })    
   
    $("button.btn-info").click(()=>{
      window.scroll(0, 0)
    })
  }

  inserirDadosNaRoda()
})