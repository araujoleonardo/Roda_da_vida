$(document).ready(()=>{
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

    if(heCompetencias){var hc = (heCompetencias.nota) + 1;}
    if(nivelamento){var nv = (nivelamento.nota) + 1;}
    if(estHabitoEstudo){var ee = (estHabitoEstudo.nota) + 1;}
    if(saudeFisica){var sf = (saudeFisica.nota) + 1;}
    if(saudeMental){var sm = (saudeMental.nota) + 1;}
    if(bemEstar){var be = (bemEstar.nota) + 1;}
    if(equidade){var eq = (equidade.nota) + 1;}
    if(integracao){var it = (integracao.nota) + 1;}
    if(acesAutonomia){var aa = (acesAutonomia.nota) + 1;}
    if(protIntegral){var pi = (protIntegral.nota) + 1;}
    if(respSocial){var rs = (respSocial.nota) + 1;}
    if(cidConvivencia){var cc = (cidConvivencia.nota) + 1;}


    var data = [{
        category: "teste1",
        value: sf,
        columnSettings: {
            fill: am5.color("rgba(107, 89, 162, 0.5)")
        }
    }, {
        category: "teste2",
        value: sm,
        columnSettings: {
            fill: am5.color("rgb(242, 151, 178)")
        }
    }, {
        category: "teste3",
        value: be,
        columnSettings: {
            fill: am5.color("rgb(139, 20, 59)")
        }
    }, {
        category: "teste4",
        value: eq,
        columnSettings: {
            fill: am5.color("rgb(230, 33, 71)")
        }
    }, {
        category: "teste5",
        value: it,
        columnSettings: {
            fill: am5.color("rgb(107, 89, 162)")
        }
    }, {
        category: "teste6",
        value: aa,
        columnSettings: {
            fill: am5.color("rgb(242, 151, 178)")
        }
    }, {
        category: "teste7",
        value: cc,
        columnSettings: {
            fill: am5.color("rgb(139, 20, 59)")
        }
    },{
        category: "teste8",
        value: rs,
        columnSettings: {
            fill: am5.color("rgb(230, 33, 71)")
        }
    }, {
        category: "teste9",
        value: pi,
        columnSettings: {
            fill: am5.color("rgb(107, 89, 162)")
        }
    }, {
        category: "teste10",
        value: ee,
        columnSettings: {
            fill: am5.color("rgb(242, 151, 178)")
        }
    }, {
        category: "teste11",
        value: nv,
        columnSettings: {
            fill: am5.color("rgb(139, 20, 59)")
        }
    }, {
        category: "teste12",
        value: hc,
        columnSettings: {
            fill: am5.color("rgb(230, 33, 71)")
        }
    }];

    series.data.setAll(data);
    xAxis.data.setAll(data);
  }
})