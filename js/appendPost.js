function appendPost() {
    var content = localStorage.getItem("postQuestionText");
    var recommendation = localStorage.getItem("postRecommendationText");
    var hashtags = JSON.parse(localStorage.getItem("hashtags"));
    var allHashtagsQuestion = "";
    var allHashtagsRecommendation = "";
    var hashtagLink = "";

    for(i = 0; i < hashtags.length; i++) {
        if(hashtags[i]) {
            hashtagLink = hashtags[i];
            hashtagLink = hashtagLink.substring(1, hashtagLink.length);
            break;
        }
    }

    var currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    if(content) {
        var div = document.getElementsByClassName("question")[2];
        document.getElementById("hashtag").setAttribute("href", hashtagLink + ".html");
        var divClone = div.cloneNode(true);
        document.getElementById("hashtag").setAttribute("href", "oily.html");

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = content;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var changeLikeCount = divClone.querySelector('.heartCount');
        changeLikeCount.innerHTML = "0 Likes";

        var likeCount = divClone.querySelector('.heart');
        likeCount.setAttribute("onclick", "changeImage(this, 3)");

        var changeHashtag = divClone.querySelector('#hashtag');
        for(i = 0; i < hashtags.length; i++) {
            if(hashtags[i]) {
                allHashtagsQuestion += hashtags[i];
            }
        }
        changeHashtag.innerHTML = allHashtagsQuestion;

        var changeComment = divClone.querySelector(".btn");
        changeComment.setAttribute("data-target", "#q-nocomment2");

        var changeCollapse = divClone.querySelector('.collapse');
        changeCollapse.setAttribute("id", "q-nocomment2");

        var questionTab = document.getElementById("questionTab");
        questionTab.appendChild(document.createElement("br"));
        questionTab.appendChild(divClone);

        document.getElementsByClassName("heart")[4].setAttribute("onclick", "changeImage(this,4)");
    }

    if(recommendation) {
        var div = document.getElementsByClassName("question")[2];
        document.getElementById("hashtag").setAttribute("href", hashtagLink + ".html");
        var divClone = div.cloneNode(true);
        document.getElementById("hashtag").setAttribute("href", "oily.html");

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = recommendation;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var changeLikeCount = divClone.querySelector('.heartCount');
        changeLikeCount.innerHTML = "0 Likes";

        var changeHashtag = divClone.querySelector('#hashtag');
        for(i = 0 ; i < hashtags.length; i++) {
            if(hashtags[i]) {
                allHashtagsRecommendation += hashtags[i];
            }
        }
        changeHashtag.innerHTML = allHashtagsRecommendation;

        var changeComment = divClone.querySelector(".btn");
        changeComment.setAttribute("data-target", "#q-nocomment3");

        var changeCollapse = divClone.querySelector('.collapse');
        changeCollapse.setAttribute("id", "q-nocomment3");

        var questionTab = document.getElementById("recommendationTab");
        questionTab.appendChild(document.createElement("br"));
        questionTab.appendChild(divClone);

        document.getElementsByClassName("heart")[5].setAttribute("onclick", "changeImage(this,5)");
    }

}

appendPost();