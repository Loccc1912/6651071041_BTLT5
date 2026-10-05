// Tạo một Object (Từ điển) chứa bảng giá các món ăn và nước uống
const bangGia = {
    "Bún bò": 20000,
    "Hủ tiếu": 18000,
    "Bánh canh": 17000,
    "Phở bò": 19000,
    "Nuôi": 15000,
    "Bánh mì thịt": 12000,
    "Bánh cuốn": 15000,
    "Cà phê đá": 12000,
    "Cà phê sữa": 15000,
    "Chanh dây": 13000,
    "Chanh muối": 12000,
    "Xí muội": 14000,
    "Sữa tươi": 13000,
    "Cam vắt": 17000
};

function tinhTien() {
    let tbody = document.getElementById("resultBody");
    tbody.innerHTML = ""; // Xóa dữ liệu cũ mỗi lần bấm tính tiền
    let tongTien = 0;

    // Hàm phụ để xử lý mảng các thẻ select
    function layMonDaChon(selectId) {
        let selectElement = document.getElementById(selectId);
        // Duyệt qua tất cả các <option> trong thẻ select
        for (let i = 0; i < selectElement.options.length; i++) {
            let option = selectElement.options[i];
            
            // Nếu option đó được người dùng chọn
            if (option.selected) {
                let tenMon = option.value;
                let giaTien = bangGia[tenMon];
                tongTien += giaTien;

                // Tạo một dòng mới <tr> thêm vào bảng kết quả
                let row = `<tr>
                    <td class="col-left">${option.text}</td>
                    <td>${giaTien}</td>
                </tr>`;
                tbody.innerHTML += row;
            }
        }
    }

    // Lấy món ăn và nước uống
    layMonDaChon("thucAn");
    layMonDaChon("nuocUong");

    // Kiểm tra nếu chưa chọn món nào
    if (tongTien === 0) {
        alert("Bạn chưa chọn món nào!");
        return;
    }

    // Kiểm tra thời điểm (ban đêm tăng thêm 10%)
    let isBanDem = document.getElementById("banDem").checked;
    if (isBanDem) {
        tongTien = tongTien + (tongTien * 0.1);
    }

    // Hiển thị bảng kết quả và gán tổng tiền
    document.getElementById("resultTable").style.display = "table";
    document.getElementById("tongTien").innerText = tongTien + " đồng";
}