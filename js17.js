document.getElementById('first').onmousemove = function (event) {
    var x = event.offsetX;
    console.log(x);
    document.getElementById('three').style.width = x + 'px';
}

document.getElementById('first').onmouseleave = function (event) { document.getElementById('three').style.width = "542px"; }