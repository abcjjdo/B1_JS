let btnAverage = document.getElementById("btnAverage");
btnAverage.onclick = function() {
    console.log("Button clicked!");
    let numb1 = document.getElementById("numb1").value;
    let numb2 = document.getElementById("numb2").value;
    let numb3 = document.getElementById("numb3").value;
    let numb4 = document.getElementById("numb4").value;
    let numb5 = document.getElementById("numb5").value;
    let  content = (numb1 * 1 + numb2 * 1 + numb3 * 1 + numb4 * 1 + numb5 * 1) / 5;
    let outputBt2 = document.getElementById("outputBt2");
    outputBt2.innerHTML = "Average of five number: " + content;
}