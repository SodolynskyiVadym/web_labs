function calculate() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    if (parseFloat(length) < 0 || parseFloat(width) < 0){
        specifyValue(document.getElementsByTagName("span"), "Error data");
    }else if (length === "" || width === "") {
        specifyValue(document.getElementsByTagName("span"), "No data entered");
    } else if(length === "0" || width === "0"){
        specifyValue(document.getElementsByTagName("span"), "0");
    } else{
        length = parseFloat(length);
        width = parseFloat(width);

        document.getElementById("perimeter").innerHTML = ((length + width) * 2).toString();
        document.getElementById("square").innerHTML = (length * width).toString();
        document.getElementById("diagonal").innerHTML = (Math.sqrt(length ** 2 + width ** 2)).toString();
    }
}

function specifyValue(elements, value){
    for (let element of elements){
        element.innerHTML = value;
    }
}
