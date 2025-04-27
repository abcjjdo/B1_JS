let btnSum2KySo = document.getElementById("btnSum2KySo");
btnSum2KySo.onclick = function() {
    console.log("Button clicked!");
    let NumbXY = document.getElementById("NumbXY").value;
    let  SoHangChuc = Math.floor (NumbXY/10);
    let  SoHangDonVi = NumbXY % 10;
    let  TongKySo = SoHangChuc + SoHangDonVi;
    let outputBt5 = document.getElementById("outputBt5");
    outputBt5.innerHTML = `Tổng của 2 ký số của số ${NumbXY}  là ${TongKySo}`;
}