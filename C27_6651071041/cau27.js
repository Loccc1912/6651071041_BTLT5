// Hàm xóa dòng, nhận vào phần tử nút (btn) vừa được nhấn
function xoaDong(btn) {
    // Tìm thẻ <tr> (dòng) bao bọc bên ngoài nút đó
    let dong = btn.closest("tr");
    
    // Nếu tìm thấy dòng, tiến hành xóa nó khỏi bảng
    if (dong) {
        dong.remove();
    }
}