import Chart from 'chart.js/auto';
import React from 'react';
import { AppContext } from '../../../../Context';

const Graph = (props) => {
    const context = React.useContext(AppContext);

    const colors = ["rgba(255, 63, 100, .5)", "rgba(234,28,251,.5)", "rgba(28,123,251,.5)"];
    let highContrastStyle = context.activeHighContrast ? "#FFF" : "#000";


    React.useEffect(() => {
        // Configuración de los datos
        const data = {
            labels: props.labels,
            datasets: [
                {
                    label: props.datasetLabel[0],
                    data: props.data[0],

                    backgroundColor: colors[0], // Color de fondo
                    borderColor: colors[0], // Color del borde
                    borderWidth: 1,
                    color: highContrastStyle
                },
                {
                    label: props.datasetLabel[1],
                    data: props.data[1],

                    backgroundColor: colors[1], // Color de fondo
                    borderColor: colors[1], // Color del borde
                    borderWidth: 1,
                    color: highContrastStyle
                },
            ],
        };

        // Configuración del gráfico
        const options = {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: highContrastStyle, }
                },
                x: {
                    ticks: { color: highContrastStyle, }
                },
            },
            plugins: {
                legend: {
                    labels: { color: highContrastStyle }
                },
              },
              color: highContrastStyle,       
        };

        // Crear la instancia del gráfico
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: context.graphValues.graphType,
            data: data,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, [props.data, props.labels, props.datasetLabel]);

    return (
        <canvas id="myChart" height={150}></canvas>
    )
};

export { Graph } ;