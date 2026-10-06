function insert_Row() {
  // Lấy đối tượng bảng thông qua ID
  const table = document.getElementById("sampleTable");

  // Thêm một hàng mới vào cuối bảng (-1 để chèn vào vị trí cuối)
  const newRow = table.insertRow(-1);

  // Tính số thứ tự của hàng mới
  const rowCount = table.rows.length;

  // Thêm 2 ô (cell) vào hàng mới
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Gán nội dung văn bản cho 2 ô vừa tạo
  cell1.innerHTML = `Row${rowCount} cell1`;
  cell2.innerHTML = `Row${rowCount} cell2`;
}