function changeImage(e) {
    if(e.getAttribute('src') == 'images/heart.png') {
        e.setAttribute('src', 'images/heartfilled.png');
        e.setAttribute('height', '15px');
        e.setAttribute('width', '15px');
    } else {
        e.setAttribute('src', 'images/heart.png');
        e.setAttribute('height', '20px');
        e.setAttribute('width', '20px');
    }
}
