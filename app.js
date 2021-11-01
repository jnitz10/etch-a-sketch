
function genDivs(v) {
    var e = document.querySelector('.container');
    for(var i = 0; i < v; i++) {
        var row = document.createElement("div");
        row.className = "row";
        var h = 100 / v;
        document.getElementsByClassName("row").style.height = `${h}%`;
        e.appendChild(row);
    }

}