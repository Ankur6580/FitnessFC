const chart = document.getElementById("chart-canvas");

// Assumed Nutrition Data
let avgRawData = [160, 53, 120]
let avgData = [100, 100, 100]

let userRawData = [140, 45, 90];
let userData = [
  (userRawData[0] / avgRawData[0]) * 100,
  (userRawData[1] / avgRawData[1]) * 100,
  (userRawData[2] / avgRawData[2]) * 100
];
// ======================

let bgColors = []
let brdColors = []
const chartLabels = document.querySelectorAll(".label span")
chartLabels.forEach((span) => {
  let style = window.getComputedStyle(span)
  bgColors.push(style.backgroundColor)
  brdColors.push(style.borderColor)
})

console.log("Chart Colors =================");
console.log(`BackgroundColors are:\n ${bgColors[0]} and \n ${bgColors[1]}`)
console.log(`BorderColors are:\n ${brdColors[0]} and\n ${brdColors[1]}`)
console.log("============================");


let userBgColor = bgColors[0]
let userBrdColor = brdColors[0]
let avgBgColor = bgColors[1]
let avgBrdColor = brdColors[1]

const chartData = {
  labels: [
    `${avgRawData[0]}g C`,
    `${avgRawData[1]}g F`,
    `${avgRawData[2]}g P`
  ],
  datasets: [{
    label: "Your Data",
    data: userData,
    fill: true,
    backgroundColor: userBgColor,
    borderColor: userBrdColor,
    pointBackgroundColor: userBrdColor,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: userBrdColor
  },
  {
    label: "Avg Data",
    data: avgData,
    fill: true,
    backgroundColor: avgBgColor,
    borderColor: avgBrdColor,
    pointBackgroundColor: avgBgColor,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: avgBrdColor
  }
  ]
};

const options = {
  color: "#fff",
  elements: {
    line: {
      borderWidth: 3
    }
  },
  plugins: {
    legend: false,
  },
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: { color: "#fff1" },
      angleLines: { color: '#fff1' },
      pointLabels: {
        color: avgBrdColor,
        font: {
          size: 14,
          weight: 900
        }
      },
      ticks: {
        backdropColor: "#fff0",
        color: '#fff0',

        stepSize: 20,
        min: 20,
        max: 100
      }
    }
  }
};

const config = {
  type: 'radar',
  data: chartData,
  options: options
};

new Chart(chart, config);