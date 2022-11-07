function NhanVien(
  accounts,
  fullName,
  email,
  password,
  datePicker,
  basicSalary,
  position,
  workTime
) {
  this.taiKhoan = accounts;
  this.ten = fullName;
  this.email = email;
  this.matKhau = password;
  this.ngayLam = datePicker;
  this.luongCoBan = basicSalary;
  this.chucVu = position;
  this.gioLam = workTime;
  this.tinhTongLuong = () => {
    if (this.chucVu == "Sếp") {
      var luong = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(this.luongCoBan * 3);
      return luong;
    }
    if (this.chucVu == "Trưởng phòng") {
      var luong = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(this.luongCoBan * 2);
      return luong;
    }
    if (this.chucVu == "Nhân viên") {
      var luong = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(this.luongCoBan * 1);
      return luong;
    }
  };

  this.xepLoaiNhanVien = () => {
    if (this.gioLam >= 192) {
      return "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      return "Nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
