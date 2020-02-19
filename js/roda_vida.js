$(document).ready(()=>{
  var chart = AmCharts.makeChart( "chartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [ {
      "country": "Familia"
    }, {
      "country": "Relação Amorosa"
    }, {
      "country": "Vida Social"
    }, {
      "country": "Espiritualidade"
    }, {
      "country": "Hobbies e Diversão"
    }, {
      "country": "Plenitude e Felicidade"
    }, {
      "country": "Contribuição Social"
    }, {
      "country": "Recursos Financeiros"
    }, {
      "country": "Realização e Propósito"
    }, {
      "country": "Saúde e Disposição"
    }, {
      "country": "Equilíbrio Emocional "
    }, {
      "country": "Desenvolvimento Intelectual"
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
    $("#quiz2, #quiz3, #quiz4, #quiz5, #quiz6, #quiz7, #quiz8, #quiz9, #quiz10, #quiz11, #quiz12, #resultado").hide()

    class areasVidas {
      constructor(area, nota){
        this.area = area
        this.nota = nota
      }
    }
    
    // ******************************************* AREA FAMILIA *******************************************
    $("#btn1").click(()=>{
      let inputes = document.querySelectorAll("input.areaFamilia")

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        console.log(mediaTudo)
        setValue(0, Math.round(mediaTudo))

        // salvando no logalStorage
        let salvarBD = new areasVidas(0, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("areaFamilia", salvando)

        $("#titleQ").html('Relação Amorosa <i class="fas fa-heart"></i>')
        $("#quiz1").remove()
        $("#quiz2").show()
      }
    })
    
    // ******************************************* AREA RELACAO AMOROSA *******************************************
    $("#btn2").click(()=>{
      let inputes = document.querySelectorAll("input.areaRelAmor")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        console.log(mediaTudo)
        setValue(1, Math.round(mediaTudo))

        let salvarBD = new areasVidas(1, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("areaRelAmor", salvando)

        $("#titleQ").html('Vida Social <i class="fas fa-users"></i>')
        $("#quiz2").remove()
        $("#quiz3").show() 
      }    
    })
    
    // ******************************************* AREA VIDA SOCIAL *******************************************
    $("#btn3").click(()=>{
      let inputes = document.querySelectorAll("input.vidSocial")
      

        let valor0 = inputes[0].value
        if(valor0 == "") {valor0 = 0}
        valor0 = parseInt(valor0)      

        let valor1 = inputes[1].value
        if(valor1 == "") {valor1 = 0}
        valor1 = parseInt(valor1)

        let valor2 = inputes[2].value
        if(valor2 == "") {valor2 = 0}
        valor2 = parseInt(valor2)

        let valor3 = inputes[3].value
        if(valor3 == "") {valor3 = 0}
        valor3 = parseInt(valor3)
      
        let valor4 = inputes[4].value
        if(valor4 == "") {valor4 = 0}
        valor4 = parseInt(valor4)

        if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
          alert('insira uma nota válida!')
        }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
          alert('insira uma nota válida!')
        }else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        console.log(mediaTudo)
        setValue(2, Math.round(mediaTudo))

        let salvarBD = new areasVidas(2, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("vidSocial", salvando)

        $("#titleQ").html('Espiritualidade <i class="fab fa-empire"></i>')
        $("#quiz3").remove()
        $("#quiz4").show()
      }
    })

    // ******************************************* AREA VIDA Espitirualidade *******************************************
    $("#btn4").click(()=>{
      let inputes = document.querySelectorAll("input.espiritualidade")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(3, Math.round(mediaTudo))

        let salvarBD = new areasVidas(3, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("espiritualidade", salvando)

        $("#titleQ").text('Hobbies e Diversão')
        $("#quiz4").remove()
        $("#quiz5").show() 
      }    
    })

    // ******************************************* AREA VIDA HOBBIES *******************************************
    $("#btn5").click(()=>{
      let inputes = document.querySelectorAll("input.hobbiesDiversao")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }else{mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(4, Math.round(mediaTudo))

        let salvarBD = new areasVidas(4, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("hobbiesDiversao", salvando)

        $("#titleQ").text('Plenitude e Felicidade')
        $("#quiz5").remove()
        $("#quiz6").show()
      }  
    })

    // ******************************************* AREA VIDA Plenitude e Felicidade *******************************************
    $("#btn6").click(()=>{
      let inputes = document.querySelectorAll("input.plenitudeFeliz")
      

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(5, Math.round(mediaTudo))

        let salvarBD = new areasVidas(5, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("plenitudeFeliz", salvando)

        $("#titleQ").text('Contribuição Social')
        $("#quiz6").remove()
        $("#quiz7").show() 
        }    
    })

    // ******************************************* AREA VIDA Contribuicao Social *******************************************
    $("#btn7").click(()=>{
      let inputes = document.querySelectorAll("input.contrbSocial")
      
      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(6, Math.round(mediaTudo))

        let salvarBD = new areasVidas(6, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("contrbSocial", salvando)
  
        $("#titleQ").text('Recursos Financeiros')
        $("#quiz7").remove()
        $("#quiz8").show()  
      }   
    })

    // ******************************************* AREA VIDA Recursos Financeiros *******************************************
    $("#btn8").click(()=>{
      let inputes = document.querySelectorAll("input.recFinancas")
      
      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }
      else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(7, Math.round(mediaTudo))

        let salvarBD = new areasVidas(7, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("recFinancas", salvando)
  
        $("#titleQ").text('Realização e Propósito')
        $("#quiz8").remove()
        $("#quiz9").show() 
      }    
    })

    // ******************************************* AREA VIDA Realização e Propósito *******************************************
    $("#btn9").click(()=>{
      let inputes = document.querySelectorAll("input.relProposito")

      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(8, Math.round(mediaTudo))

        let salvarBD = new areasVidas(8, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("relProposito", salvando)

        $("#titleQ").text('Saúde e Disposição')
        $("#quiz9").remove()
        $("#quiz10").show() 
      }    
    })

    // ******************************************* AREA VIDA Saúde e Disposição *******************************************
    $("#btn10").click(()=>{
      let inputes = document.querySelectorAll("input.saudeDisp")
    
      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(9, Math.round(mediaTudo))

        let salvarBD = new areasVidas(9, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("saudeDisp", salvando)

        $("#titleQ").text('Equilíbrio Emocional')
        $("#quiz10").remove()
        $("#quiz11").show() 
      }    
    })

    // ******************************************* AREA VIDA Equilíbrio Emocional *******************************************
    $("#btn11").click(()=>{
      let inputes = document.querySelectorAll("input.equiEmo")
     
      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(10, Math.round(mediaTudo))

        let salvarBD = new areasVidas(10, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("equiEmo", salvando)

        $("#titleQ").text('Desenvolvimento Intelectual')
        $("#quiz11").remove()
        $("#quiz12").show()  
      }   
    })

    // ******************************************* AREA VIDA Equilíbrio Emocional *******************************************
    $("#btn12").click(()=>{
      let inputes = document.querySelectorAll("input.desenvIntelect")
      
      let valor0 = inputes[0].value
      if(valor0 == "") {valor0 = 0}
      valor0 = parseInt(valor0)      

      let valor1 = inputes[1].value
      if(valor1 == "") {valor1 = 0}
      valor1 = parseInt(valor1)

      let valor2 = inputes[2].value
      if(valor2 == "") {valor2 = 0}
      valor2 = parseInt(valor2)

      let valor3 = inputes[3].value
      if(valor3 == "") {valor3 = 0}
      valor3 = parseInt(valor3)
    
      let valor4 = inputes[4].value
      if(valor4 == "") {valor4 = 0}
      valor4 = parseInt(valor4)

      if(valor0 < 0 || valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0){
        alert('insira uma nota válida!')
      }else  if(valor0 > 10 || valor1 > 10 || valor2 > 10 || valor3 > 10 || valor4 > 10){
        alert('insira uma nota válida!')
      }else{
        mediaTudo = (valor0 + valor1 + valor2 + valor3 + valor4) / 5
        setValue(11, Math.round(mediaTudo))
        
        let salvarBD = new areasVidas(11, Math.round(mediaTudo))
        let salvando = JSON.stringify(salvarBD)
        localStorage.setItem("desenvIntelect", salvando)

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