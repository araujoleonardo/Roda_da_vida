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
        let arFamilia = JSON.parse(localStorage.getItem('areaFamilia'))
        let areaRelAmor = JSON.parse(localStorage.getItem('areaRelAmor'))
        let vidSocial = JSON.parse(localStorage.getItem('vidSocial'))
        let espiritualidade = JSON.parse(localStorage.getItem('espiritualidade'))
        let hobbiesDiversao = JSON.parse(localStorage.getItem('hobbiesDiversao'))
        let plenitudeFeliz = JSON.parse(localStorage.getItem('plenitudeFeliz'))
        let contrbSocial = JSON.parse(localStorage.getItem('contrbSocial'))
        let recFinancas = JSON.parse(localStorage.getItem('recFinancas'))
        let relProposito = JSON.parse(localStorage.getItem('relProposito'))
        let saudeDisp = JSON.parse(localStorage.getItem('saudeDisp'))
        let equiEmo = JSON.parse(localStorage.getItem('equiEmo'))
        let desenvIntelect = JSON.parse(localStorage.getItem('desenvIntelect'))

        let areasVidas = [
            arFamilia, 
            areaRelAmor, 
            vidSocial, 
            espiritualidade, 
            hobbiesDiversao, 
            plenitudeFeliz, 
            contrbSocial, 
            recFinancas, 
            relProposito, 
            saudeDisp,
            equiEmo,
            desenvIntelect
        ]

        areasVidas.forEach((x)=>{
            setValue(parseInt(x.area), parseFloat(x.nota))
        })      
    }
    recuperarDados()
  })