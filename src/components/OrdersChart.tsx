import Chart from "react-apexcharts";

function OrdersChart() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        borderRadius: 10,
      },
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      max: 1000,
      labels: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: false,
      },
    },

    grid: {
      show: false,
    },

    colors: ["#4f7cff"],

    tooltip: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Orders",
      data: [734],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={80}
    />
  );
}

export default OrdersChart;