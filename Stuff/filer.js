function saveFile() {
    var title = document.getElementById('title').value;
    var text = document.getElementById('textcon').value;
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, title + ".anywiki");
}

function loadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var content = e.target.result;
        document.getElementById('fileContent').innerHTML = content;
    };

    reader.readAsText(file);
}