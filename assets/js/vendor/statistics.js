
     // chart statistic
    const xValues = ["Kabul", "Mazar-e-Sharif", "Kandahar", "Herat", "Nangarhar"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
    ];

    new Chart("pie-chart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        title: {
        display: true,
        text: "Afghanistan best Restuarent Province Wise"
        }
    }
    });

const data_Values = [100,200,300,400,500,600,700,800,900,1000];
new Chart("line-chart", {
  type: "line",
  data: {
    labels: data_Values,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false},
    title:{
        display:true,
        text:"Order income number of customer visit"
    }
  }
});
const listItem = document.querySelectorAll(".menu-link");
listItem.forEach(element => {
    element.addEventListener("click", function(e){
        for(let i = 0; i < listItem.length; i++){
            if(listItem[i].classList.contains("menu-active")){
                listItem[i].classList.remove("menu-active");
            }
        }
        element.classList.add("menu-active");
    });
});
