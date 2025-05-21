const years = 
[
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    
]

function updateGraph(year) {
  currentYear = year;
  drawVisibleDJs();
}

function returnSelectedDjs () {
  let allSelectedDjs = [];

  for (let selected of selectedDJs) {
    for (let dj of djDataset) {
      if (dj.id === selected) {
        allSelectedDjs.push(dj);
      }
    }
  }
  
  return allSelectedDjs;
}

function calculateHighestAttendance(dj, year) {
  //should calculate the given djs highest attendance based on the current year
}