const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Carbs", "Proteins", "Fats"],
    datasets: [{
      data: [51, 43, 32],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false // Hide the default legend
      },
      datalabels: {
        color: '#000',
        font: {
          size: 10,
          weight: 'bold'
        },
        formatter: (value, ctx) => {
          let label = ctx.chart.data.labels[ctx.dataIndex];
          return `${value}g\n${label}`;
        },
        align: 'end',
        anchor: 'end',
        offset: 10,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 0,
        clip: false
      }
    },
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30
      }
    }
  },
  plugins: [ChartDataLabels]
});
