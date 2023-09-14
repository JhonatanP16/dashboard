export const barChartData = [
    {
      name: "Masculino",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Femenino",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ];
  
  export const barChartOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels:{
        style:{
          colors:'#86929F'
        }
      }
    },
    grid: {
      show: false,
    },
    yaxis: {
      title: {
        text: "Visitas",
        style:{
          color:"#86929F"
        }
      },
      labels: {
        show: true,
        style: {
          colors: "#86929F",
          fontSize: "14px",
        },
      },
    },

    fill: {
      opacity: 1,
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
      },
      theme: "dark",
    },
  };