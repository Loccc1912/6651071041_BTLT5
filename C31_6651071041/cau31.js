function removecolor() {
  // Lấy thẻ select theo ID
  const selectElement = document.getElementById("colorSelect");

  // Kiểm tra nếu còn phần tử để xóa
  if (selectElement.selectedIndex !== -1) {
    // Xóa option đang được chọn thông qua chỉ số (selectedIndex)
    selectElement.remove(selectElement.selectedIndex);
  } else {
    alert("Danh sách đã trống!");
  }
}