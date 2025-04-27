let btnUSDToVND = document.getElementById("btnUSDToVND");
btnUSDToVND.onclick = function() {
    console.log("Button clicked!");
    let amountOfUSD = document.getElementById("amountOfUSD").value;
    let  content = amountOfUSD * 23000;
    let outputBt3 = document.getElementById("outputBt3");
    outputBt3.innerHTML = "Value of your USD: " + content.toLocaleString('vi-VN') + " VND";
}