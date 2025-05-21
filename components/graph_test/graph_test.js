// function renderAttendancePerMonthGraph(wrapper, selectedYear = 2015) {
//   const TEST_DJ_ID = 4310; // replace with any DJ's ID you want to test

//   let old = document.getElementById("graphContainer");
//   if (old) wrapper.removeChild(old);

//   let graphContainer = document.createElement("div");
//   graphContainer.id = "graphContainer";
//   wrapper.append(graphContainer);

//   let svg = d3.select(graphContainer)
//               .append("svg")
//               .attr("width", wSvg)
//               .attr("height", hSvg)
//               .style("margin-top", "20px")
//               .style("margin-left", "20px")
//               .style("border-top", "10px solid #E52572")
//               .style("border-radius", "4px")
//               .style("background-color", "#110f34");

//   const dj = DJs.find(d => d.id === TEST_DJ_ID);
//   if (!dj) {
//     console.error(`DJ with ID ${TEST_DJ_ID} not found.`);
//     return;
//   }

//   console.log(dj)

//   const dataset = {
//     id: dj.id,
//     name: dj.name,
//     attendance: {},
//   };

//   for (let monthIndex = 0; monthIndex < 1; monthIndex++) {
//     const year = 2015 + Math.floor(monthIndex / 12);
//     const month = monthIndex % 12;

//     let djGigs = Gigs.filter(gig => gig.djID === dj.id)
//                      .filter(gig => {
//                        let date = new Date(gig.date);
//                        return date.getFullYear() === year && date.getMonth() === month;
//                      });

//     let djCitiesPopulation = [];

//     for (let gig of djGigs) {
//       let currentCity = Cities.find(city => city.id === gig.cityID);
//       if (currentCity) {
//         djCitiesPopulation.push(currentCity.population);
//       } else {
//         console.warn(`City with ID ${gig.cityID} not found`);
//       }
//       console.log(djCitiesPopulation)
//     }

//     let totalAttendance = djGigs.reduce((sum, gig) => sum + gig.attendance, 0);
//     let totalPopulation = djCitiesPopulation.reduce((sum, djCitiesPopulation) => sum + djCitiesPopulation, 0);

//     let attendanceRate = totalAttendance / totalPopulation

//     let attendanceRatePercent = Math.round(attendanceRate * 100);

//     console.log(attendanceRatePercent + "%");
//     if (!dataset.attendance[year]) dataset.attendance[year] = [];

//     let point = {
//       month: month,
//       totalAttendance: totalAttendance
//     };

//     dataset.attendance[year].push(point);

//     console.log(`Year ${year} Month ${month + 1}:`, point);
//   }

//   console.log("Test DJ dataset:", dataset);
// }
