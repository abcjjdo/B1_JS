let btnSPHcn = document.getElementById("btnSPHcn");
btnSPHcn.onclick = function() {
    console.log("Button clicked!");
    let hcn_length = document.getElementById("hcn_length").value;
    let hcn_width = document.getElementById("hcn_width").value;
    let  Hcn_S = hcn_length  * hcn_width ;
    let Hcn_P = (hcn_length * 1 + hcn_width * 1) * 2;
    let outputBt4 = document.getElementById("outputBt4");
    outputBt4.innerHTML = "Chu vi hình chữ nhật là: " + Hcn_P + " (cm) và diện tích hình chữ nhật là: " + Hcn_S + " (cm2)";
}