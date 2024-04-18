// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de Pizza
    var ctxPizza = document.getElementById('meuGraficoDePizza').getContext('2d');
    var dadosPizza = {
        labels: ['A1A1', 'A1A2', 'A2A2'],
        datasets: [{
            data: [3, 5, 2],
            backgroundColor: ['#F8B21A', '#17067A', '#790075']
        }]
    };
    var opcoesPizza = {
        // Adicione opções personalizadas, se necessário
    };
    var meuGraficoPizza = new Chart(ctxPizza, {
        type: 'pie',
        data: dadosPizza,
        options: opcoesPizza
    });

    // Gráfico de Barras
    var ctxBarra = document.getElementById('meuGraficoDeBarras').getContext('2d');
    var dadosBarra = {
        labels: ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'],
        datasets: [{
            label: 'Produção de Leite',
            backgroundColor: '#0D6EFD', // Cor de preenchimento das barras
            data: [45, 61, 51, 55, 42, 60, 84]
        }]
    };
    var opcoesBarra = {
        // Adicione opções personalizadas, se necessário
    };
    var meuGraficoBarra = new Chart(ctxBarra, {
        type: 'bar', // Alterado para 'bar' para criar um gráfico de barras
        data: dadosBarra,
        options: opcoesBarra
    });
});
