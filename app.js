
function genDivs(v) {
    var e = document.querySelector('.container');
    for(var i = 0; i < v; i++) {
        var row = document.createElement("div");
        row.className = "row";
        e.appendChild(row);
        for(var x = 0; x < v; x++) {
            var pix = document.createElement("div");
            pix.className = "pixel";
            pix.id = i + (x * v);
            row.appendChild(pix);
        }
    }

}

document.querySelector(".container").addEventListener('mouseover', function(e) {
    if(e.target.className == "pixel") {
        e.target.classList.add("filled");
    }
})
