//Create an array of objects to serve as the shows list content
const showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021 ",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

//Select my UL as the container to populate the shows
const showsList = document.querySelector(".shows__card-container");

//Create a function that will display the shows as content within the list items
function displayShows (arr) {

    let show = document.createElement("li");
    show.classList.add("shows__card");

    let dateHeading = document.createElement("h3");
    dateHeading.innerText = "DATE";
    dateHeading.classList.add("shows__subtitle");

    let showDate = document.createElement("p");
    showDate.innerText = arr.date;
    showDate.classList.add("shows__copy--bold");

    let venueHeading = document.createElement("h3");
    venueHeading.innerText = "VENUE";
    venueHeading.classList.add("shows__subtitle");

    let showVenue = document.createElement("p");
    showVenue.innerText = arr.venue;
    showVenue.classList.add("shows__copy");

    let locationHeading = document.createElement("h3");
    locationHeading.innerText = "LOCATION";
    locationHeading.classList.add("shows__subtitle");

    let showLocation = document.createElement("p");
    showLocation.innerText = arr.location;
    showLocation.classList.add("shows__copy");

    let button = document.createElement("a");
    button.innerText = "BUY TICKETS"
    button.classList.add("shows__button")

    //append the elements within eachother as structured on the html doc
    showsList.appendChild(show);
    show.appendChild(dateHeading);
    show.appendChild(showDate);
    show.appendChild(venueHeading);
    show.appendChild(showVenue);
    show.appendChild(locationHeading);
    show.appendChild(showLocation);
    show.appendChild(button);
}

//create a function that calls back the display function once for each array object
showsArray.forEach ((show) => {
    displayShows(show);
})
