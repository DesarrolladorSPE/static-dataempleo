import Chart from 'chart.js/auto';
import React from 'react';
import { AppContext } from '../../../../Context';

import "./styles.css"

const Graph = ({values={}, index=""}) => {
    const context = React.useContext(AppContext);

    const colors = context.activeHighContrast ? ["#FFF", "#FFF", "#FFF"] :  ["#E0161E", "rgba(234,28,251,.5)", "rgba(28,123,251,.5)"];
    let highContrastStyle = context.activeHighContrast ? "#FFF" : "#000";

    React.useEffect(() => {
        // Configuración de los datos
        const data = {
            labels: values?.labels,
            datasets: [
                {
                    label: values?.datasetLabel,
                    data: values?.data,

                    backgroundColor: colors[index], // Color de fondo
                    borderColor: colors[index], // Color del borde
                    borderWidth: 1,
                    color: highContrastStyle
                },
            ],
        };

        // Configuración del gráfico
        const options = {
            indexAxis: values?.options?.indexAxis,
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
            maintainAspectRatio: false,
                   
        };

        // Crear la instancia del gráfico
        const ctx = document.getElementById(`myChart${index}`).getContext('2d');
        const myChart = new Chart(ctx, {
            type: values?.options.type,
            data: data,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, [values, highContrastStyle, index]);

    return (
        <div className='graph-container'>
            <canvas id={`myChart${index}`}></canvas>
        </div>
    )
};

export { Graph } ;