import Chart from "react-apexcharts"

function SalesChart () {
  const options={
    chart:{
      toolbar:{
        show:false
      },
    },
    dataLabels:{
      enabled:false
    },
    xaxis:{
      labels:{
        show: false,
      },
    },
    yaxis:{
      labels:{
        show:false
      }
    },
    grid:{
     show:false
    },
    colors:["#4f7cff"]
  };
  const series=[
    {
      name:"Sales",
      data:[
        20, 30, 26, 35, 28, 18, 31, 27, 19, 25,
        33, 37, 30, 35, 28, 32, 25, 29, 34, 27,
        30, 25, 20,
      ]
    }
  ]
   return(
    <Chart
    options={options}
    series={series}
    type="bar"
    height={100}
    />
   )
}
export default SalesChart