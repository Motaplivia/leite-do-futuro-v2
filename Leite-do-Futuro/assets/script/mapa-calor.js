(function () {
  var map = L.map("mapaCalor").setView(
    [-5.125966592211294, -39.73168924193071],
    10
  );
  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 10,
    maxZoom: 10,
  }).addTo(map);

  var addressPoints = [
    {
      lat: -5.192543461525748,
      lon: -39.89487126058299,
      intensity: 0.1,
      info: "Ipiranga",
    },
    {
      lat: -5.056986077791946,
      lon: -39.66188837575254,
      intensity: 0.1,
      info: "Juazeiro",
    },
    {
      lat: -4.913396827607636,
      lon: -39.807762244820076,
      intensity: 0.1,
      info: "Serra da Guia",
    },
    {
      lat: -5.112331744783663,
      lon: -39.60429950281355,
      intensity: 0.1,
      info: "Domingos da Costa",
    },
    {
      lat: -4.971406315037207,
      lon: -39.81345590963282,
      intensity: 0.1,
      info: "Ponta da Serra",
    },
    {
      lat: -5.148244828565691,
      lon: -39.934573742163465,
      intensity: 0.1,
      info: "Fazenda Japão",
    },
    {
      lat: -5.023460734722187,
      lon: -39.6416572779769,
      intensity: 0.1,
      info: "Bom Jesus",
    },
    {
      lat: -5.1515632871099,
      lon: -39.87588668032448,
      intensity: 0.1,
      info: "Trapiazeiro",
    },
    {
      lat: -5.088942002839959,
      lon: -39.81373505896052,
      intensity: 0.1,
      info: "Fazenda Ponte",
    },
    {
      lat: -5.045851891239853,
      lon: -39.881713710595,
      intensity: 0.1,
      info: "Olho d'água seco",
    },
    {
      lat: -5.010106354288251,
      lon: -39.93120623668271,
      intensity: 0.1,
      info: "Fazenda Nova",
    },
    {
      lat: -5.237421985787541,
      lon: -39.984897909382354,
      intensity: 0.1,
      info: "Salgado",
    },
    {
      lat: -4.852247568109668,
      lon: -39.688631863811665,
      intensity: 0.1,
      info: "Várzea do Juá",
    },
    {
      lat: -4.837716088861562,
      lon: -39.67802406722529,
      intensity: 0.1,
      info: "Lagoa do Senador",
    },
    {
      lat: -5.142667817215623,
      lon: -39.688082213768546,
      intensity: 0.1,
      info: "Fazenda Cáis",
    },
    {
      lat: -4.9571556481186185,
      lon: -39.7474587685005,
      intensity: 0.1,
      info: "Olho d'água dos facundos",
    },
    {
      lat: -4.82321328039419,
      lon: -39.70856615531055,
      intensity: 0,
      info: "Santa Teresinha",
    },
    {
      lat: -5.114516572149428,
      lon: -39.57349203549485,
      intensity: 0.1,
      info: "Papa-Leite",
    },
    {
      lat: -5.186295641983387,
      lon: -39.61711025862941,
      intensity: 0.1,
      info: "Xique-Xique",
    },
    {
      lat: -4.969243779140066,
      lon: -39.89530875803655,
      intensity: 0.1,
      info: "Fazenda Malhada",
    },
    {
      lat: -4.844427418600197,
      lon: -39.75043046529788,
      intensity: 0.1,
      info: "Barreira Branca",
    },
    {
      lat: -5.258425070157207,
      lon: -39.68999282279352,
      intensity: 0.1,
      info: "Piedade",
    },
    {
      lat: -5.061331626621941,
      lon: -39.61617748184993,
      intensity: 0.5,
      info: "Agreste",
    },
  ];

  var heatOptions = {
    radius: 25,
    minOpacity: 0.5,
    blur: 15,
    maxZoom: 8,
    gradient: {
      0.1: "#00FFFF", // Agora ciano está mais visível
      0.3: "#FFFF00", // Amarelo
      0.5: "#FFA500", // Laranja
      0.7: "#FF4500", // Laranja avermelhado
      0.9: "#FF0000", // Vermelho
    },
    scaleRadius: true,
  };

  // Convertendo os pontos para o formato aceito pelo heatmap
  addressPoints = addressPoints.map(function (p) {
    return [p.lat, p.lon, p.intensity];
  });

  var heat = L.heatLayer(addressPoints, heatOptions).addTo(map);

  var baseMaps = {
    "Mapa Base": osm,
  };

  var overlayMaps = {
    Heatmap: heat,
  };

  L.control.layers(baseMaps, overlayMaps).addTo(map);

  var legend = L.control({ position: "bottomright" });

  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML +=
      '<div style="background: linear-gradient(to right, #00FFFF, #FFFF00, #FFA500, #FF4500, #FF0000); width: 150px; height: 20px; margin-bottom: 5px;"></div>';
    div.innerHTML += '<div style="font-size: 12px; float: left;">- V.A2</div>';
    div.innerHTML += '<div style="font-size: 12px; float: right;">+ V.A2</div>';
    return div;
  };

  legend.addTo(map);
})();
