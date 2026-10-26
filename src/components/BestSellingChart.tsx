import Chart from "react-apexcharts";

function BestSellingChart() {
  const series = [940, 790, 740];

  const options = {
    labels: ["Product A", "Product B", "Product C"],

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      height={220}
    />
  );
}

export default BestSellingChart;