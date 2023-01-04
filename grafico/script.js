am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
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
      max: 10,
      renderer: am5radar.AxisRendererRadial.new(root, {
          minGridDistance: 20
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

  // Set data
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
  var data = [{
      category: "teste",
      value: 5,
      columnSettings: {
        fill: am5.color("rgba(107, 89, 162, 0.5)")
      }
  }, {
      category: "teste2",
      value: 8,
      columnSettings: {
          fill: am5.color("rgb(242, 151, 178)")
      }
  }, {
      category: "teste3",
      value: 7,
      columnSettings: {
          fill: am5.color("rgb(139, 20, 59)")
      }
  }, {
      category: "teste4",
      value: 4,
      columnSettings: {
          fill: am5.color("rgb(230, 33, 71)")
      }
  }, {
      category: "teste5",
      value: 9,
      columnSettings: {
          fill: am5.color("rgb(107, 89, 162)")
      }
  }, {
      category: "teste6",
      value: 10,
      columnSettings: {
          fill: am5.color("rgb(242, 151, 178)")
      }
  }, {
      category: "teste7",
      value: 3,
      columnSettings: {
          fill: am5.color("rgb(139, 20, 59)")
      }
  },{
      category: "teste8",
      value: 10,
      columnSettings: {
          fill: am5.color("rgb(230, 33, 71)")
      }
  }, {
      category: "teste9",
      value: 5,
      columnSettings: {
          fill: am5.color("rgb(107, 89, 162)")
      }
  }, {
      category: "teste10",
      value: 10,
      columnSettings: {
          fill: am5.color("rgb(242, 151, 178)")
      }
  }, {
      category: "teste11",
      value: 8,
      columnSettings: {
          fill: am5.color("rgb(139, 20, 59)")
      }
  }, {
      category: "teste13",
      value: 6,
      columnSettings: {
          fill: am5.color("rgb(230, 33, 71)")
      }
  }];

  series.data.setAll(data);
  xAxis.data.setAll(data);

  // Animate chart
  // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
  // series.appear(1000);
  // chart.appear(1000, 100);

  // Function for updating value
  function setValue(index, value) {

      // Set value
      var row = data[index];
      row.value = value;
      console.log(row)
      series.data.setIndex(index, {
          category: row.category,
          value: value,
          columnSettings: row.columnSettings
      });

      // Reveal next question
      var areas = document.getElementsByClassName("area");
      for (var i = 0; i < areas.length; i++) {
          areas[i].style.display = (index + 1) === i ? "block" : "none";
      }

  }

}); // end am5.ready()