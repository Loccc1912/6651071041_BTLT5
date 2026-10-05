// Hàm thực hiện phép nhân
function multiply() {
    // Lấy giá trị từ ô input
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    // Kiểm tra nếu người dùng chưa nhập số
    if (num1 === "" || num2 === "") {
        document.getElementById("resultDisplay").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }

    // Tính toán và hiển thị
    let result = Number(num1) * Number(num2);
    document.getElementById("resultDisplay").innerText = result;
}

// Hàm thực hiện phép chia
function divide() {
    // Lấy giá trị từ ô input
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    // Kiểm tra nếu người dùng chưa nhập số
    if (num1 === "" || num2 === "") {
        document.getElementById("resultDisplay").innerText = "Vui lòng nhập đủ 2 số!";
        return;
    }

    // Kiểm tra trường hợp chia cho 0
    if (Number(num2) === 0) {
        document.getElementById("resultDisplay").innerText = "Không thể chia cho 0!";
        return;
    }

    // Tính toán và hiển thị
    let result = Number(num1) / Number(num2);
    document.getElementById("resultDisplay").innerText = result;
}