import Chart from "react-apexcharts";

function CustomersChart() {
  const series = [
    {
      name: "Customers",
      data: [10, 25, 18, 30, 22, 28, 20, 35, 24, 29, 18, 32, 20],
    },
  ];

  return (
    <Chart
      options={{
        chart: {
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: false,
        },

        stroke: {
          curve: "smooth",
        },

        xaxis: {
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
      }}
      series={series}
      type="line"
      height={100}
    />
  );
}

export default CustomersChart;