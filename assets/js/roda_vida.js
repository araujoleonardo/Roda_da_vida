$(document).ready(()=>{
  $("#ad1, #ad2, #ad3, #si1, #si2, #si3, #id1, #id2, #id3, #gdp1, #gdp2, #gdp3").hide()

  recuperaDados()

  $("#refazer").click(() => {
        window.open('index.html', "_self")
        localStorage.clear();
    })

  function recuperaDados(){
    // Create root element
    var root = am5.Root.new("chartdiv");

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    var chart = root.container.children.push(am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "12",
        wheelY: "12"
    }));

    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    var xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({
        radius: 10
    });

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min: 0,
        max: 11,
        renderer: am5radar.AxisRendererRadial.new(root, {
            minGridDistance: 10,
            gridVisible: true
        })
    }));

    // Deixar os valores invisiveis
    yAxis.get("renderer").labels.template.set("forceHidden", true);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    var series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category"
    }));

    series.columns.template.setAll({
        tooltipText: "{categoryX}: {valueY}",
        templateField: "columnSettings",
        strokeOpacity: 0,
        width: am5.p100
    });


    // Recupera o json do localStorage
    let heCompetencias = JSON.parse(localStorage.getItem('habilidadesEcompetencias'))
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

    if(heCompetencias == null && cidConvivencia == null){
        window.open('index.html', "_self")
    }

    if(heCompetencias){var hc = (heCompetencias.nota1);}
    if(nivelamento){var nv = (nivelamento.nota2);}
    if(estHabitoEstudo){var ee = (estHabitoEstudo.nota3);}
    if(saudeFisica){var sf = (saudeFisica.nota4);}
    if(saudeMental){var sm = (saudeMental.nota5);}
    if(bemEstar){var be = (bemEstar.nota6);}
    if(equidade){var eq = (equidade.nota7);}
    if(integracao){var it = (integracao.nota8);}
    if(acesAutonomia){var aa = (acesAutonomia.nota9);}
    if(protIntegral){var pi = (protIntegral.nota10);}
    if(respSocial){var rs = (respSocial.nota11);}
    if(cidConvivencia){var cc = (cidConvivencia.nota12);}


    var data = [{
        category: "1",
        value: (sf + 1),
        columnSettings: {
            fill: am5.color("rgba(107, 89, 162, 0.5)")
        }
    }, {
        category: "2",
        value: (sm + 1),
        columnSettings: {
            fill: am5.color("rgb(242, 151, 178)")
        }
    }, {
        category: "3",
        value: (be + 1),
        columnSettings: {
            fill: am5.color("rgb(139, 20, 59)")
        }
    }, {
        category: "4",
        value: (eq + 1),
        columnSettings: {
            fill: am5.color("rgb(230, 33, 71)")
        }
    }, {
        category: "5",
        value: (it + 1),
        columnSettings: {
            fill: am5.color("rgb(107, 89, 162)")
        }
    }, {
        category: "6",
        value: (aa + 1),
        columnSettings: {
            fill: am5.color("rgb(242, 151, 178)")
        }
    }, {
        category: "7",
        value: (cc + 1),
        columnSettings: {
            fill: am5.color("rgb(139, 20, 59)")
        }
    },{
        category: "8",
        value: (rs + 1),
        columnSettings: {
            fill: am5.color("rgb(230, 33, 71)")
        }
    }, {
        category: "9",
        value: (pi + 1),
        columnSettings: {
            fill: am5.color("rgb(107, 89, 162)")
        }
    }, {
        category: "10",
        value: (ee + 1),
        columnSettings: {
            fill: am5.color("rgb(242, 151, 178)")
        }
    }, {
        category: "11",
        value: (nv + 1),
        columnSettings: {
            fill: am5.color("rgb(139, 20, 59)")
        }
    }, {
        category: "12",
        value: (hc + 1),
        columnSettings: {
            fill: am5.color("rgb(230, 33, 71)")
        }
    }];

    if((hc + nv + ee)/3 <= 3){
        $("#ad1").show()
    }if ((hc + nv + ee)/3 <= 7) {
        $('#ad2').show()
    } else {
        $('#ad3').show()
    }

    if((eq + it + aa)/3 <= 3){
        $("#id1").show()
    }if ((eq + it + aa)/3 <= 7) {
        $('#id2').show()
    } else {
        $('#id3').show()
    }

    if((cc + rs + pi)/3 <= 3){
        $("#gdp1").show()
    }if ((cc + rs + pi)/3 <= 7) {
        $('#gdp2').show()
    } else {
        $('#gdp3').show()
    }

    if((sf + sm + be)/3 <= 3){
        $("#si1").show()
    }if ((sf + sm + be)/3 <= 7) {
        $('#si2').show()
    } else {
        $('#si3').show()
    }

    series.data.setAll(data);
    xAxis.data.setAll(data);
  }
})