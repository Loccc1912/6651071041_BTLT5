function getFormvalue(event) {
  // Ngăn hành vi reload lại trang mặc định của form
  event.preventDefault();

  // Lấy giá trị của First name và Last name thông qua DOM
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;

  // In ra màn hình console
  console.log("Họ:", lastName);
  console.log("Tên:", firstName);
  console.log("Họ và tên đầy đủ:", lastName + " " + firstName);

  // Hiển thị trực tiếp kết quả lên giao diện
  document.getElementById("result").innerText = 
    `Họ và tên: ${lastName} ${firstName}`;
}