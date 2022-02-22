const apiKey = "a73a2c4d-a959-4ddc-9950-0bbe641068c8";
const commentUrl = "https://project-1-api.herokuapp.com/comments?api_key=" + apiKey;

//Store the comment container as a variable
let commentContainer = document.querySelector('.comment');
//Create a functino that calls the api
function getComments() {
    axios  
    .get(commentUrl)
    .then((response) => {
        //Sort the returned data in retured chornological order. Newest items will populate at the top of the list
        response.data.sort((a,b) => {
            return b.timestamp - a.timestamp;
        });
        //Resest this div
        commentContainer.innerText = "";
        response.data.forEach((comment) => {
            displayComments(comment);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    }
//Create a function that displays the comments
function displayComments (comm) {
    let comment = document.createElement("li");
    comment.classList.add("comment__post");
        
    let commentPicture = document.createElement("span");
    commentPicture.classList.add("comment__picture");
        
    let commentProfile = document.createElement("div");
    commentProfile.classList.add("comment__profile");
        
    let commentUser = document.createElement("div");
    commentUser.classList.add("comment__user");
        
    let commentName = document.createElement("p")
    commentName.innerText = comm.name;
    commentName.classList.add("comment__name");
        
    let commentDate = document.createElement("p");
    commentDate.innerText = 
        ("0" + (new Date(comm.timestamp).getMonth() + 1)).slice(-2) +
        "/" +
        new Date(comm.timestamp).getDate() +
        "/" +
        new Date(comm.timestamp).getFullYear();
    commentDate.classList.add("comment__date");
        
    let commentCopy = document.createElement("p");
    commentCopy.innerText = comm.comment;
    commentCopy.classList.add("comment__copy");
        
    //Append the elements within eachother as structured in the HTML DOC
    commentContainer.appendChild(comment);
    comment.appendChild(commentPicture);
    comment.appendChild(commentProfile);
    commentProfile.appendChild(commentUser);
    commentUser.appendChild(commentName);
    commentUser.appendChild(commentDate);
    commentProfile.appendChild(commentCopy);
}
//Call the get comments function 
getComments();

//Store the submission form as a variable 
const submissionForm = document.querySelector(".conversation__form");

//Create a function that stores the submitted comment into the api as an object
function postComment(commenter, comment) {
    let newComment = {
        name: commenter,
        comment: comment,
        };
        axios
        .post(commentUrl, newComment)
        .then(() => {
            getComments();
        })
        .catch((error) => {
            console.log(error);
        });
}
//When the comment is submitted display it on top of the comment list
submissionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let commName = event.target.commentName.value
    let commCopy = event.target.commentCopy.value
    //reset the inputs in the submission form
    if (commName && commCopy) {
        postComment(commName, commCopy)
        submissionForm.reset();
    }
 });

      