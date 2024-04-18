// Função para manipular o clique no botão de menu
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

/* Tanques de Leite */

document.getElementById("button-container").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-local")) {
      toggleMapa(event.target.dataset.local);
    }
  });

  function updateMapaTitulo(local) {
    var mapaTitulo = document.getElementById("mapaTitulo");
    if (mapaTitulo) {
      mapaTitulo.textContent = local;  // Atualiza o texto do título
    }
  }

// Função para lidar com o clique nos botões de localidade
function handleLocalButtonClick(event) {
  if (event.target.classList.contains("btn-local")) {
    toggleMapa(event.target.dataset.local);
  }
}

// Função para mostrar ou ocultar o mapa
var mapaAtual = null;

function toggleMapa(local) {
  var button = document.querySelector('[data-local="' + local + '"]');
  button.classList.toggle('selected');

  // Remova a classe 'selected' de todos os outros botões, exceto o atual
  var allButtons = document.querySelectorAll('.btn-local');
  allButtons.forEach(function (otherButton) {
    if (otherButton !== button) {
      otherButton.classList.remove('selected');
    }

    updateMapaTitulo(local);
  });

  var mapa = document.getElementById("mapa");
  if (mapa.style.display === "none" || mapaAtual !== local) {
    mapa.style.display = "block";
    mapa.querySelector("iframe").src = getMapaURL(local);
    mapaAtual = local;

    // Atualize as informações dos cards com base na localidade
    switch (local) {
      case "Xique-Xique":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 18 ';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 200';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 17 KM';
        break;
      case "Papa-Leite":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 23';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 150';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 22 KM';
        break;
      case "Fazenda Ponte":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 14';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 137'; 
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 36%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 10 KM';
        break;
      case "Olho D-Água Seco":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 11';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 70';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 20 KM';
        break;
      case "Fazenda Nova":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 14';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 89';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 27 KM';
        break;
      case "Trapiazeiro":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 22';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 90';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 19 KM';
        break;
      case "Salgado":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 21';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 98';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 36 KM';
        break;
      case "Ponta da Serra":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 22';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 129';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 50%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 26 KM';
        break;
      case "Domingo da Costa":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 10';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 77';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 9%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 17 KM';
        break;
      case "Várzea do juá":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 6';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 39';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 15%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 40 KM';
        break;
      case "Ipiranga":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 16';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 84';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 22 KM';
        break;
      case "Guia":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 12';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 86';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 33 KM';
        break;
      case "Juazeiro":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 16';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 143';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 29%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 13 KM';
        break;
      case "Japão":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 9';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 33';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 40 KM';
        break;
      case "Bom Jesus":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 16';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 91';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 16 KM';
        break;
      case "Cais":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 10';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 63';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 40%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 6,7 KM';
        break;
      case "Santa Teresinha":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 8';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 26';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 45 KM';
        break;
      case "Olho D-Água dos Facundos":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 13';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 87';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 27 KM';
        break;
      case "Agreste":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 14';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 89';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 38%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 20 KM';
        break;
      case "Lagoa do Senador":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 11';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 89';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 27 KM';
        break;
      case "Piedade":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 16';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 96';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 0';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 22 KM';
        break;
      case "Fazenda da Malhada":
        document.getElementById("card-1-info").innerHTML =
          ' <i class="fa-solid fa-user"></i> │ Produtores: 23';
        document.getElementById("card-2-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas: 150';
        document.getElementById("card-3-info").innerHTML =
          ' <i class="fa-solid fa-cow"></i> │ Vacas a2a2: 38%';
        document.getElementById("card-4-info").innerHTML =
          ' <i class="fa-solid fa-car"></i> │ Distancia: 32 KM';
        break;
      // Adicione mais casos conforme necessário para outras localidades
      default:
        // Caso padrão
        break;
    }
  } else {
    mapa.style.display = "none";
    mapaAtual = null; // Limpa a referência do mapa atual
  }
}

// Função para obter a URL do mapa com base na localidade
function getMapaURL(local) {
  switch (local) {
    case "Xique-Xique":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127141.3422762175!2d-39.775493155801904!3d-5.236453714620011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.1862955!2d-39.6171112!5e0!3m2!1spt-BR!2sbr!4v1698278863499!5m2!1spt-BR!2sbr";
    case "Papa-Leite":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127141.3422762175!2d-39.775493155801904!3d-5.236453714620011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.114516!2d-39.5734934!5e0!3m2!1spt-BR!2sbr!4v1698278793841!5m2!1spt-BR!2sbr";
    case "Fazenda Ponte":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127169.1421266466!2d-39.85795905681574!3d-5.097931655553814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.088941!2d-39.8137368!5e0!3m2!1spt-BR!2sbr!4v1698277860947!5m2!1spt-BR!2sbr";
    case "Olho D-Água Seco":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127169.1421266466!2d-39.85795905681574!3d-5.097931655553814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.0458514!2d-39.881714699999996!5e0!3m2!1spt-BR!2sbr!4v1698278119284!5m2!1spt-BR!2sbr";
    case "Fazenda Nova":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127169.1421266466!2d-39.85795905681574!3d-5.097931655553814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.0101059!2d-39.9312067!5e0!3m2!1spt-BR!2sbr!4v1698278227589!5m2!1spt-BR!2sbr";
    case "Trapiazeiro":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127169.1421266466!2d-39.85795905681574!3d-5.097931655553814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.151563599999999!2d-39.8758893!5e0!3m2!1spt-BR!2sbr!4v1698277981905!5m2!1spt-BR!2sbr";
    case "Salgado":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127141.15692776932!2d-40.06713835579514!3d-5.2373650136932595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.2374201!2d-39.9848986!5e0!3m2!1spt-BR!2sbr!4v1698278276267!5m2!1spt-BR!2sbr";
    case "Ponta da Serra":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127193.73661685546!2d-39.895563457712676!3d-4.972173783607484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-4.9714068!2d-39.813456599999995!5e0!3m2!1spt-BR!2sbr!4v1698277485778!5m2!1spt-BR!2sbr";
    case "Domingo da Costa":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d63583.15206505916!2d-39.64558602972977!3d-5.112244487713576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.1123313!2d-39.604300099999996!5e0!3m2!1spt-BR!2sbr!4v1701113313248!5m2!1spt-BR!2sbr";
    case "Várzea do juá":
      return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5194058115485!2d-39.69121239040841!3d-4.852241349899224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be0cf6ba65bdd1%3A0xedb0e7df57b5e544!2sFazenda%20Belmonte%20-%20Terra%20de%20Eduardo%20Patricio%20de%20Almeida!5e0!3m2!1spt-BR!2sbr!4v1701113605595!5m2!1spt-BR!2sbr";
    case "Ipiranga":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127150.23687284713!2d-39.97727275612628!3d-5.192534359290551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.1925397!2d-39.8948708!5e0!3m2!1spt-BR!2sbr!4v1698276612258!5m2!1spt-BR!2sbr";
    case "Guia":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127205.0310979632!2d-39.89014215812458!3d-4.913346643542558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-4.9133517!2d-39.8077402!5e0!3m2!1spt-BR!2sbr!4v1698277369227!5m2!1spt-BR!2sbr";
    case "Juazeiro":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127177.21836263624!2d-39.744290157110264!3d-5.056979797242299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.0569993!2d-39.661885999999996!5e0!3m2!1spt-BR!2sbr!4v1698279045556!5m2!1spt-BR!2sbr";
    case "Japão":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127159.1312044628!2d-40.016956056450645!3d-5.148242704352469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.148248!2d-39.9345541!5e0!3m2!1spt-BR!2sbr!4v1698277554690!5m2!1spt-BR!2sbr";
    case "Bom Jesus":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127183.78024812894!2d-39.724028257349566!3d-5.023461531371396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.0234667!2d-39.6416263!5e0!3m2!1spt-BR!2sbr!4v1698277619985!5m2!1spt-BR!2sbr";
    case "Cais":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127160.2609101086!2d-39.77045615649184!3d-5.142589810104583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.1426666999999995!2d-39.688083299999995!5e0!3m2!1spt-BR!2sbr!4v1698278432521!5m2!1spt-BR!2sbr";
    case "Santa Teresinha":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127207.57227863112!2d-39.74453975821726!3d-4.900013857129422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-4.8232129!2d-39.7085663!5e0!3m2!1spt-BR!2sbr!4v1698278652856!5m2!1spt-BR!2sbr";
    case "Olho D-Água dos Facundos":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127196.63415688305!2d-39.82986205781835!3d-4.95714839891381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-4.9572965!2d-39.7474184!5e0!3m2!1spt-BR!2sbr!4v1698278573538!5m2!1spt-BR!2sbr";
    case "Agreste":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127174.46973529903!2d-39.54813995701004!3d-5.070954183015348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.061331!2d-39.616178!5e0!3m2!1spt-BR!2sbr!4v1698279009179!5m2!1spt-BR!2sbr";
    case "Lagoa do Senador":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127219.35580207944!2d-39.76042685864699!3d-4.837710320634686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-4.8377153!2d-39.6780249!5e0!3m2!1spt-BR!2sbr!4v1698278392723!5m2!1spt-BR!2sbrc";
    case "Piedade":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127141.3422762175!2d-39.775493155801904!3d-5.236453714620011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-5.2584232!2d-39.6899934!5e0!3m2!1spt-BR!2sbr!4v1698278973825!5m2!1spt-BR!2sbr";
    case "Fazenda da Malhada":
      return "https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d127194.3036453265!2d-39.97771115773335!3d-4.969236986599081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-4.9692421!2d-39.8953092!5e0!3m2!1spt-BR!2sbr!4v1698278924756!5m2!1spt-BR!2sbr";
    // Adicione mais casos conforme necessário para outras localidades
    default:
      return ""; // URL padrão caso a localidade não seja encontrada
  }
}
