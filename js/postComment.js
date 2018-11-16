function writeComment() {
    var commentText = localStorage.getItem("commentText");
    var currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    if(commentText) {
        var div = document.getElementsByClassName("next-comment")[0];
        console.log(div);
        var divClone = div.cloneNode(true);

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = commentText;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var index = localStorage.getItem("index");
        var buttons = document.getElementsByClassName("btn");
        var comment = buttons[index];
        console.log(comment);
        var commentString = (String)(comment.innerHTML);
        console.log(commentString);
        var numOfComments = 0;
        for(i = 0; i < commentString.length; i++) {
            if(parseInt(commentString.charAt(i))) {
                numOfComments = parseInt(commentString.charAt(i));
            }
        }

        console.log(numOfComments);
        
        var collapse = document.getElementsByClassName("collapse")[index];
        var locationOfPost = collapse.querySelector("#postBody");
        if(numOfComments == 1) {
            //console.log(index);
            locationOfPost.insertAdjacentElement('afterend', divClone);
        }
        if(numOfComments == 2) {
            locationOfPost = collapse.getElementsByClassName("next-comment")[0];
            //console.log(locationOfPost);
            locationOfPost.insertAdjacentElement('afterend', divClone);
        }
        if(numOfComments == 0) {
            console.log(locationOfPost);
            locationOfPost.insertAdjacentElement('afterend', divClone);
            // locationOfPost = collapse.getElementsByClassName("reply")[0];
            // console.log(locationOfPost);
            // locationOfPost.insertAdjacentElement('beforebegin', divClone);
        }
        console.log(collapse.innerHTML); 

    }
}

writeComment();