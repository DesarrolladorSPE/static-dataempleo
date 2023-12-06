import Chart from 'chart.js/auto';
import React from 'react';

const Graph = (props) => {
    const colors = ["rgba(255, 63, 100, .5)", "rgba(234,28,251,.5)", "rgba(28,123,251,.5)"];

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
                    color: "#000"
                },
                {
                    label: props.datasetLabel[1],
                    data: props.data[1],

                    backgroundColor: colors[1], // Color de fondo
                    borderColor: colors[1], // Color del borde
                    borderWidth: 1,
                    color: "#000"
                },
            ],
        };

        // Configuración del gráfico
        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#000",
                    }
                },
                x: {
                    ticks: {
                        color: "#000",
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#000",
                    },
                },
              }          
        };

        // Crear la instancia del gráfico
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar', // Puedes cambiar el tipo de gráfico (bar, line, pie, etc.)
            data: data,
            options: options,
        });

        // Limpiar el gráfico al desmontar el componente
        return () => {
            myChart.destroy();
        };
    }, [
        props.data, 
        props.labels, 
        props.datasetLabel
    ]);

    return (
        <canvas id="myChart" height={150}></canvas>
    )
};

export { Graph } ;