function graphData(y, x){
    console.log("Klickat")
  // Our labels along the x-axis
  new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
      labels: y,
      datasets: [
        { 
          data: x,
          label:"Hej"
        }
      ]
    },
    options: {
      responsive: false
    }
  });
}