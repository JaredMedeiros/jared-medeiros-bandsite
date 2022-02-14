//Create an array of objects to serve as the pre-existing comments
const commentsArray = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this  majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If ther was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

//Select the UL as my container to populate the comments
const commentList = document.querySelector(".comment")

//Create a functiont that will display the comments as content within the list items
function displayComments (arr) {
    let comment = document.createElement("li");
    comment.classList.add("comment__post");

    let commentPicture = document.createElement("span");
    commentPicture.classList.add("comment__picture");

    let commentProfile = document.createElement("div");
    commentProfile.classList.add("comment__profile");

    let commentUser = document.createElement("div");
    commentUser.classList.add("comment__user");

    let commentName = document.createElement("p")
    commentName.innerText = arr.name;
    commentName.classList.add("comment__name");

    let commentDate = document.createElement("p");
    commentDate.innerText = arr.date;
    commentDate.classList.add("comment__date");

    let commentCopy = document.createElement("p");
    commentCopy.innerText = arr.comment;
    commentCopy.classList.add("comment__copy");

    //Append the elements within eachother as structured in the HTML DOC
    commentList.appendChild(comment);
    comment.appendChild(commentPicture);
    comment.appendChild(commentProfile);
    commentProfile.appendChild(commentUser);
    commentProfile.appendChild(commentCopy);
    commentUser.appendChild(commentName)
    commentUser.appendChild(commentDate)
}

//Create a function that will callback the displayComments function once for each object in the array
commentsArray.forEach((comment) => {
    displayComments(comment)
})

//Create a function that allows users to submit comments to the page
const formCta = document.querySelector(".conversation__form")
let inputField = document.querySelector(".coversation__label")

formCta.addEventListener('submit',(event) => {
    event.preventDefault();

    let userName = event.target.commentName.value;
    let today = new Date();
    let commentDate = ("0" + (today.getMonth() + 1)).slice(-2) + "/" + today.getDate() + "/" + today.getFullYear();
    let userComment = event.target.commentCopy.value;
    let nameInput = document.getElementById("conversation-name");
    let commentInput = document.getElementById("conversation-comment");

    if (userName && userComment) {
        commentList.innerText = '';
        nameInput.value = '';
        commentInput.value = '';
        commentsArray.unshift({
            name: userName,
            date: commentDate,
            comment: userComment
        })
        commentsArray.forEach((comment) => {
            displayComments(comment);
        })
    }    
})

