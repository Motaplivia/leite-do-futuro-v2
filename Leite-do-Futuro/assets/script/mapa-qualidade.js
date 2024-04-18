// Função auto-invocada para encapsular o código
(function () {
  // Inicialização do mapa Leaflet
  var map = L.map("mapaQualidade").setView(
    [-5.067869173148441, -39.696407852954636], 10
  );

  // Adição do layer do OpenStreetMap
  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 9,
    maxZoom: 10,
  }).addTo(map);

  // Informações sobre os tanques
  var tanques = [
    {
      id: 1,
      nome: "Ipiranga",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1790096203&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1270843988&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.192543461525748,
      longitude: -39.89487126058299,
      // Lista de vacas no tanque
    },
    {
      id: 2,
      nome: "Juazeiro",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1883712020&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=778908318&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.056986077791946,
      longitude: -39.66188837575254,
      // Lista de vacas no tanque
    },
    {
      id: 3,
      nome: "Serra da Guia",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=113251060&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1401478868&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.913396827607636,
      longitude: -39.807762244820076,
      // Lista de vacas no tanque
    },
    {
      id: 4,
      nome: "Domingos da Costa",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1759629091&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=769953785&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.112331744783663,
      longitude: -39.60429950281355,
      // Lista de vacas no tanque
    },
    {
      id: 5,
      nome: "Ponta da Serra",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1132542417&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=698732016&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.971406315037207,
      longitude: -39.81345590963282,
      // Lista de vacas no tanque
    },
    {
      id: 6,
      nome: "Fazenda Japão",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1374489014&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=267202895&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.148244828565691,
      longitude: -39.934573742163465,
      // Lista de vacas no tanque
    },
    {
      id: 7,
      nome: "Bom Jesus",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1781293740&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=349922185&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.023460734722187,
      longitude: -39.6416572779769,
      // Lista de vacas no tanque
    },
    {
      id: 8,
      nome: "Trapiazeiro",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=990643780&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubchart?oid=588449097&amp;format=interactive", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.1515632871099,
      longitude: -39.87588668032448,
      // Lista de vacas no tanque
    },
    {
      id: 9,
      nome: "Fazenda Ponte",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubchart?oid=1122924378&amp;format=interactive", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1246239643&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.088942002839959,
      longitude: -39.81373505896052,
      // Lista de vacas no tanque
    },
    {
      id: 10,
      nome: "Olho d'água seco",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubchart?oid=712585429&amp;format=interactive", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1552724141&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.045851891239853,
      longitude:  -39.881713710595,
      // Lista de vacas no tanque
    },
    {
      id: 11,
      nome: "Fazenda Nova",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1107712664&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1139221210&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.010106354288251,
      longitude: -39.93120623668271,
      // Lista de vacas no tanque
    },
    {
      id: 12,
      nome: "Salgado",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1917718174&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubchart?oid=2009625590&amp;format=interactive", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.237421985787541,
      longitude: -39.984897909382354,
      // Lista de vacas no tanque
    },
    {
      id: 13,
      nome: "Várzea do Juá",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1326575029&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=962217940&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.852247568109668,
      longitude: -39.688631863811665
      // Lista de vacas no tanque
    },
    {
      id: 14,
      nome: "Lagoa do Senador",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=700349041&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=798098062&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.837716088861562,
      longitude: -39.67802406722529
      // Lista de vacas no tanque
    },
    {
      id: 15,
      nome: "Fazenda Cáis",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=155033993&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=2119573632&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.142667817215623,
      longitude: -39.688082213768546
      // Lista de vacas no tanque
    },
    {
      id: 16,
      nome: "Olho d'água dos facundos",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=875285324&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=405614518&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.9571556481186185,
      longitude: -39.7474587685005
      // Lista de vacas no tanque
    },
    {
      id: 17,
      nome: "Santa Teresinha",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubchart?oid=1835737527&amp;format=interactive", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1456317601&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.82321328039419,
      longitude: -39.70856615531055,
      // Lista de vacas no tanque
    },
    {
      id: 18,
      nome: "Papa-Leite",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=68347706&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=2006747076&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.114516572149428,
      longitude: -39.57349203549485,
      // Lista de vacas no tanque
    },
    {
      id: 19,
      nome: "Xique-Xique",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=68347706&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=2006747076&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.186295641983387,
      longitude: -39.61711025862941,
      // Lista de vacas no tanque
    },
    {
      id: 20,
      nome: "Fazenda Malhada",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=68347706&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=2006747076&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.969243779140066,
      longitude: -39.89530875803655,
      // Lista de vacas no tanque
    },
    {
      id: 21,
      nome: "Barreira Branca",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=624153644&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1772938341&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -4.844427418600197,
      longitude: -39.75043046529788,
      // Lista de vacas no tanque
    },
    {
      id: 22,
      nome: "Piedade",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=569111845&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1474135350&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.258425070157207,
      longitude: -39.68999282279352,
      // Lista de vacas no tanque
    },
    {
      id: 23,
      nome: "Agreste",
      planilhaLinkPopup: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=488239438&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o popup
      planilhaLinkInfoDiv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcWE3eFGqczcur-s6FIpHv_KPBHKNPy-LVvWeVXJGY4l9jjbmnW429o36pkyB5jdGKYMKFyS-qyH8u/pubhtml?gid=1261082669&amp;single=true&amp;widget=true&amp;headers=false", // Link da planilha para o infoDiv
      // Informações de qualidade
      qualidade: "",
      latitude: -5.061331626621941,
      longitude: -39.61617748184993,
      // Lista de vacas no tanque
    },
    
  ];
  
  // Definição do ícone personalizado para os marcadores
  var customIcon = L.icon({
    iconUrl: "/assets/img/tanque-marcador.png",
    iconSize: [22, 22],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

 // Criação de marcadores para os tanques
var markers = tanques.map(function (tanque) {
  var marker = L.marker([tanque.latitude, tanque.longitude], {
    id: tanque.id,
    icon: customIcon,
  });

  marker.on("click", function (e) {
    var idTanque = marker.options.id;
    var tanqueInfo = tanques.find(function (tanque) {
      return tanque.id == idTanque;
    });
        
      if (tanqueInfo) {
        var planilhaLinkPopup = tanqueInfo.planilhaLinkPopup; // Link para o popup
        var planilhaLinkInfoDiv = tanqueInfo.planilhaLinkInfoDiv; // Link para o infoDiv

        // Conteúdo do popup
        var contentPopup = `<strong>${tanqueInfo.nome}</strong><br>${tanqueInfo.qualidade}<br><iframe src="${planilhaLinkPopup}" width="375" height="350"></iframe>`;

        // Conteúdo do infoDiv
        var contentInfoDiv = `<iframe src="${planilhaLinkInfoDiv}" width="100%" height="350"></iframe>`;

        // Adiciona o conteúdo ao popup
        marker.bindPopup(contentPopup);

        // Adiciona o conteúdo ao infoDiv
        infoDiv.innerHTML = contentInfoDiv;
      }
    });

    return marker;
  });

  // Adição de marcadores ao mapa
  markers.forEach(function (marker) {
    marker.addTo(map);
  });
})();