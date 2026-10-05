function tinhLuong() {
    // Lấy giá trị từ các ô input
    let luong = document.getElementById("luong").value;
    let heSo = document.getElementById("heSo").value;

    // Kiểm tra nếu người dùng để trống
    if (luong === "" || heSo === "") {
        alert("Vui lòng nhập đầy đủ Lương và Hệ số lương!");
        return;
    }

    // Tính toán: Lương tháng = Lương * Hệ số lương
    let luongThang = Number(luong) * Number(heSo);

    // Xuất kết quả ra màn hình
    document.getElementById("ketQua").innerText = luongThang;
}