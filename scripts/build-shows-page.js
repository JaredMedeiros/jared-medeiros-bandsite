//Create an array of objects to serve as the shows list content
// const showsArray = [
//     {
//         date: "Mon Sept 06 2021",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Tue Sept 21 2021",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Fri Oct 15 2021",
//         venue: "View Lounge",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Sat Nov 06 2021",
//         venue: "Hyatt Agency",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Fri Nov 26 2021 ",
//         venue: "Moscow Center",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Wed Dec 15 2021",
//         venue: "Press Club",
//         location: "San Francisco, CA"
//     }
// ]




const apiKey = "a2c4d-a959-4ddc-99a7350-0bbe641068c8";
const showsUrl = "https://project-1-api.herokuapp.com/showdates?api_key=" + apiKey;

function getShowDates() {
    axios
    .get (showsUrl)
    .then(response => {
        console.log(response);
        let showsArray = response.data;
        showsArray.forEach(showArr => {
            displayShowDates (showArr)
        })
        function toggleColor(show) {
            for (let i = 0; i < show.length; i++) {
              show[i].addEventListener("click", function (e) {
                for (let i = 0; i < show.length; i++) {
                  if (this !== show[i]) {
                    show[i].classList.remove("shows__card-active");
                  } else if (
                    this.classList.contains("shows__card-active") === true
                  ) {
                    this.classList.remove("shows__card-active");
                  } else {
                    this.classList.add("shows__card-active");
                  }
                }
                e.preventDefault();
              });
            }
          }
          toggleColor(document.querySelectorAll(".shows__card"));
    })
    .catch((error) => {
        console.log(error);
    })
}

let showsContainer = document.querySelector(".shows__card-container");

//Create a function that will display the shows as content within the list items
function displayShowDates (showArr) {

    let show = document.createElement("li");
    show.classList.add("shows__card");

    let dateHeading = document.createElement("h3");
    dateHeading.innerText = "DATE";
    dateHeading.classList.add("shows__subtitle");

    let showDate = document.createElement("p");
    let days = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
    let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    showDate.innerText = 
    days[new Date(parseInt(showArr.date)).getDay()] +
    " "+
    months[new Date(parseInt(showArr.date)).getMonth()] +
    " "+
    new Date(parseInt(showArr.date)).getDate() +
    " "+
    new Date(parseInt(showArr.date)).getFullYear();   
    showDate.classList.add("shows__copy--bold");

    let venueHeading = document.createElement("h3");
    venueHeading.innerText = "VENUE";
    venueHeading.classList.add("shows__subtitle");

    let showVenue = document.createElement("p");
    showVenue.innerText = showArr.place;
    showVenue.classList.add("shows__copy");

    let locationHeading = document.createElement("h3");
    locationHeading.innerText = "LOCATION";
    locationHeading.classList.add("shows__subtitle");

    let showLocation = document.createElement("p");
    showLocation.innerText = showArr.location;
    showLocation.classList.add("shows__copy");

    let button = document.createElement("a");
    button.innerText = "BUY TICKETS"
    button.classList.add("shows__button")

    //append the elements within eachother as structured on the html doc
    showsContainer.appendChild(show);
    show.appendChild(dateHeading);
    show.appendChild(showDate);
    show.appendChild(venueHeading);
    show.appendChild(showVenue);
    show.appendChild(locationHeading);
    show.appendChild(showLocation);
    show.appendChild(button);
}

getShowDates();


