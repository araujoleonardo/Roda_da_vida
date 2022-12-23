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
    // console.log(chart.dataProvider[index]["country"])
    // console.log(contagem++)
    // console.log(value)
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
  
  function recuperarDados(){
      let aprDesenvolvimento = JSON.parse(localStorage.getItem('aprendizagemDesenvolvimento'))
      let nivelamento = JSON.parse(localStorage.getItem('nivelamento'))
      let estHabitoEstudo = JSON.parse(localStorage.getItem('estHabitoEstudo'))
      let saudeFisica = JSON.parse(localStorage.getItem('saudeFisica'))
      let saudeMental = JSON.parse(localStorage.getItem('saudeMental'))
      let bemEstar = JSON.parse(localStorage.getItem('bemEstar'))
      let equidade = JSON.parse(localStorage.getItem('equidade'))
      let integracao = JSON.parse(localStorage.getItem('integracao'))
      let acesAutonomia = JSON.parse(localStorage.getItem('acessibilidadeAutonomia'))
      let protIntegral = JSON.parse(localStorage.getItem('protecaoIntegral'))
      let respSocial = JSON.parse(localStorage.getItem('responsabilidadeSocial'))
      let cidConvivencia = JSON.parse(localStorage.getItem('cidadaniaConvivencia'))

      let areasVidas = [
          aprDesenvolvimento, 
          nivelamento, 
          estHabitoEstudo, 
          saudeFisica, 
          saudeMental, 
          bemEstar,
          equidade, 
          integracao, 
          acesAutonomia,
          protIntegral,
          respSocial,
          cidConvivencia
      ]

      areasVidas.forEach((x)=>{
          setValue(parseInt(x.area), parseFloat(x.nota))
      })      
  }
  recuperarDados()
})