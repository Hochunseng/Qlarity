function store(){
    console.log("Storing Username")
    var postText = document.getElementById("postText");
    localStorage.setItem("postText", postText.value);
    console.log(postText);
    window.alert("Worked!");
}