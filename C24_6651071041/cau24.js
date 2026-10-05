function xuatThu() {
    // Lấy giá trị ngày, tháng, năm từ input
    let ngay = document.getElementById("ngay").value;
    let thang = document.getElementById("thang").value;
    let nam = document.getElementById("nam").value;

    // Kiểm tra rỗng
    if (ngay === "" || thang === "" || nam === "") {
        alert("Vui lòng nhập đầy đủ Ngày, Tháng, Năm!");
        return;
    }

    // Tạo đối tượng Date. Lưu ý: Tháng trong JS bắt đầu từ 0 nên phải lấy (thang - 1)
    let dateObj = new Date(nam, thang - 1, ngay);

    // Lấy thứ trong tuần (0: Chủ nhật, 1: Thứ 2, ..., 6: Thứ 7)
    let dayIndex = dateObj.getDay();
    let thuStr = "";

    // Chuyển đổi số sang chuỗi tiếng Việt
    switch (dayIndex) {
        case 0: thuStr = "Chủ nhật"; break;
        case 1: thuStr = "Thứ 2"; break;
        case 2: thuStr = "Thứ 3"; break;
        case 3: thuStr = "Thứ 4"; break;
        case 4: thuStr = "Thứ 5"; break;
        case 5: thuStr = "Thứ 6"; break;
        case 6: thuStr = "Thứ 7"; break;
    }

    // Ghép chuỗi kết quả
    let ketQuaStr = thuStr + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
    
    // Hiển thị ra màn hình
    document.getElementById("ketQua").innerText = ketQuaStr;
}