function tinhCanChi() {
    // 1. Lấy dữ liệu người dùng nhập
    let yearInput = document.getElementById("namDuongLich").value;

    // 2. Validate dữ liệu
    if (yearInput.trim() === "") {
        alert("Vui lòng nhập năm dương lịch!");
        return;
    }
    
    let year = Number(yearInput);
    if (isNaN(year) || year <= 0 || !Number.isInteger(year)) {
        alert("Lỗi: Năm dương lịch phải là một số nguyên dương hợp lệ!");
        return;
    }

    // 3. Khai báo mảng Can và Chi theo thứ tự chuẩn xác để dùng phép chia lấy dư
    const mangCan = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    const mangChi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

    // 4. Tính toán
    // - Can: Năm chia lấy dư cho 10
    // - Chi: Năm chia lấy dư cho 12
    let can = mangCan[year % 10];
    let chi = mangChi[year % 12];

    // Chuyển chữ cái đầu của Chi thành chữ thường cho giống hệt mẫu "Ất mùi"
    chi = chi.toLowerCase();

    // 5. Xuất kết quả ra màn hình
    document.getElementById("canChi").value = can + " " + chi;
}