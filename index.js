const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(content => content.classList.remove("visible"));
    tab.classList.add("active");
    document.getElementById(tab.id.replace("Tab", "")).classList.add("visible");
  });
});




const ctx = document.getElementById('chart').getContext('2d');

const backgroundColor = ['#FFCA3A', '#C1292E', '#6FD08C'];
const fontColor = ['#07120A', '#f0f0f0', '#1C0D0D'];

const data = {
  labels: ['Carbs', 'Protein', 'Fat'],
  datasets: [{
    data: [16, 14, 8],
    backgroundColor: backgroundColor
  }]
};

const dataLabels = {
  color: fontColor,
  font: {
    size: 12,
    weight: 'bold'
  },
  formatter: (value, context) => {
    let label = context.chart.data.labels[context.dataIndex];
    let firstLetter = label.charAt(0);
    return `${value}g ${firstLetter}`;
  },
  align: 'end',
  anchor: 'end',
  offset: 10,
  borderRadius: 30,
  backgroundColor: backgroundColor,
  padding: 5,
  clip: false
};

const chart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      },
      datalabels: dataLabels
    },
    layout: {
      padding: 60
    }
  },
  plugins: [ChartDataLabels]
});