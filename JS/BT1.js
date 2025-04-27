let btnSalary = document.getElementById("btnSalary");
btnSalary.onclick = function() {
    console.log("Button clicked!");
    let dayOfWork = document.getElementById("dayOfWork").value;
    let  content = dayOfWork * 100000;
    let outputBt1 = document.getElementById("outputBt1");
    outputBt1.innerHTML = "Your salary is: " + content.toLocaleString('vi-VN') + " VND";
}