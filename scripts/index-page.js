const apiKey = "a73a2c4d-a959-4ddc-9950-0bbe641068c8";
const commentUrl = "https://project-1-api.herokuapp.com/comments?api_key=" + apiKey;


// axios
//     .get(commentUrl)
//     .then(response => {
//         console.log(response);
//         let commentArray = response.data;
//         commentArray.forEach(comm => {
//             displayComments(comm)
//         })
//     })    
//     .catch(error => {
//         console.log(error);
//     })

let commentContainer = document.querySelector('.comment');

function getComments() {
    axios  
    .get(commentUrl)
    .then((response) => {
        // let commentArray = 
        response.data.sort((a,b) => {
            return b.timestamp - a.timestamp;
        });
        commentContainer.innerText = "";
        // console.log(commentArray);
        response.data.forEach((comment) => {
            displayComments(comment);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    }

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

getComments();

 
const submissionForm = document.querySelector(".conversation__form");


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

submissionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let commName = event.target.commentName.value
    let commCopy = event.target.commentCopy.value
            

    // let nameField = document.getElementById("conversation--name");
    // let commentField = document.getElementById("conversation__copy");

    if (commName && commCopy) {
        postComment(commName, commCopy)
        submissionForm.reset();
    }

        });

