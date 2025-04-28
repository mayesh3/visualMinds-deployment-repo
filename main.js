// Embed all four charts
vegaEmbed('#Barchart', 'charts/month_barchart.json', { actions: false, renderer: "svg", container: "#Barchart" });
vegaEmbed('#stackbar', 'charts/linked_stacked_barchart.json', { actions: false, renderer: "svg", container: "#stackbar" });
vegaEmbed('#Choropleth', 'charts/choropleth.json', { actions: false, renderer: "svg", container: "#Choropleth" });
vegaEmbed('#BarLineChart', 'charts/multi_linked_view.json', { actions: false, renderer: "svg", container: "#BarLineChart" });
