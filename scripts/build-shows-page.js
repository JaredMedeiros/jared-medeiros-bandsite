const apiKey = "a2c4d-a959-4ddc-99a7350-0bbe641068c8";
const showsUrl = "https://project-1-api.herokuapp.com/showdates?api_key=" + apiKey;

function getShowDates() {
    //Make an axios call to retrieve the show dates data
    axios
    .get (showsUrl)
    .then(response => {
        console.log(response);
        //create a shows array with the data from this response
        let showsArray = response.data;
        showsArray.forEach(showArr => {
            displayShowDates (showArr)
        })
        //create a function that toggles the color of the selected list item
        function toggleColor(show) {
            for (let i = 0; i < show.length; i++) {
              show[i].addEventListener("click", function (e) {
                for (let i = 0; i < show.length; i++) {
                    //if a show has not been clicked, remove the active class
                    //additionally, when a show has been clicked, remove the active class from the previous show
                  if (this !== show[i]) {
                    show[i].classList.remove("shows__card-active");
                  } else if (
                    this.classList.contains("shows__card-active") === true
                  ) {
                    this.classList.remove("shows__card-active");
                  } else {
                      //if a show has been clicked, add the active class
                    this.classList.add("shows__card-active");
                  }
                }
                e.preventDefault();
              });
            }
          }
          //call this toggle function
          toggleColor(document.querySelectorAll(".shows__card"));
    })
    .catch((error) => {
        console.log(error);
    })
}
//Store the shows container as a variable
let showsContainer = document.querySelector(".shows__card-container");

//Create a function that will display the shows list items within the unordered list
function displayShowDates (showArr) {

    let show = document.createElement("li");
    show.classList.add("shows__card");

    let dateHeading = document.createElement("h3");
    dateHeading.innerText = "DATE";
    dateHeading.classList.add("shows__subtitle");

    let showDate = document.createElement("p");
    //create an array of months and days
    let days = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
    let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    showDate.innerText = 
    //convert convert the returned data into a "day" string using the previously made array
    days[new Date(parseInt(showArr.date)).getDay()] +
    " "+
    //convert convert the returned data into a "day" string using the previously made array
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

//call this function
getShowDates();


