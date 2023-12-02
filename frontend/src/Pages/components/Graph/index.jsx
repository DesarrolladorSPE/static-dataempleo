import Chart from 'chart.js/auto';
import React from 'react';

const Graph = (props) => {
    const colors = ["rgba(28,123,251,.5)", "rgba(251,28,96,.5)", "rgba(234,28,251,.5)"];

    React.useEffect(() => {
        // Configuración de los datos
        const data = {
            labels: props.labels,
            datasets: [
                {
                    label: props.datasetLabel,
                    data: props.data,

                    backgroundColor: colors[0], // Color de fondo
                    borderColor: 'rgba(255,255,255,1)', // Color del borde
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
    }, [props.data, props.labels, props.datasetLabel]);

    return (
        <canvas id="myChart"  height={175}></canvas>
    )
};

export { Graph } ;