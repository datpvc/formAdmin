let dsnv = [];
const DSNV = "DSNV";

// lấy dữ liệu JSON từ localStorage
let dsnvLocalStorage = localStorage.getItem(DSNV);

if (JSON.parse(dsnvLocalStorage) != null) {
  // covert dữ liệu JSON lấy từ localStroage thành array và lưu vào biến dsnv
  var data = JSON.parse(dsnvLocalStorage);

  data.forEach((item) => {
    var nv = new NhanVien(
      item.taiKhoan,
      item.ten,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCoBan,
      item.chucVu,
      item.gioLam
    );
    dsnv.push(nv);
  });

  // render dữ liệu ra tableDanhSach
  rederDanhSachSinhVien(dsnv);
}

let saveLocalStorage = () => {
  // convert arr thành JSON
  var dsnvJSON = JSON.stringify(dsnv);

  // lưu xuống localStorage
  localStorage.setItem(DSNV, dsnvJSON);
};

// Thêm người dùng
let themNguoiDung = () => {
  var newNV = layThongTinTuForm();

  // validator tài khoản
  var isValid =
    validator.kiemTraRong(
      newNV.taiKhoan,
      "tbTKNV",
      "Tài khoản không được để trống"
    ) &&
    validator.kiemTraTrungLap(newNV.taiKhoan, dsnv) &&
    validator.kiemTraTaiKhoan(newNV.taiKhoan);

  // validator tên
  isValid =
    isValid &
      validator.kiemTraRong(
        newNV.ten,
        "tbTen",
        "Họ và tên không được để trống"
      ) && validator.kiemTraTen(newNV.ten);

  // validator email
  isValid =
    isValid &
      validator.kiemTraRong(
        newNV.email,
        "tbEmail",
        "Email không được để trống"
      ) && validator.kiemTraEmail(newNV.email);
  // validator matKhau
  isValid =
    isValid &
      validator.kiemTraRong(
        newNV.matKhau,
        "tbMatKhau",
        "Mật khẩu không được để trống"
      ) && validator.kiemTraMatKhau(newNV.matKhau);
  // validator ngày làm
  isValid =
    isValid &
      validator.kiemTraRong(
        newNV.ngayLam,
        "tbNgay",
        "Ngày Làm không được để trống"
      ) && validator.kiemTraNgay(newNV.ngayLam);
  // validator Lương cơ bản
  isValid =
    isValid &
      validator.kiemTraRong(
        newNV.luongCoBan,
        "tbLuongCB",
        "Lương cơ bản không được để trống"
      ) &&
    validator.kiemTraKhoangGiaTri(
      newNV.luongCoBan,
      "tbLuongCB",
      1000000,
      20000000,
      "Lương cơ bản"
    );

  // validator chức vụ
  isValid = isValid & validator.kiemTraChucVu(newNV.chucVu, "Chọn chức vụ");

  // validator giờ làm
  isValid =
    isValid &
      validator.kiemTraRong(
        newNV.gioLam,
        "tbGiolam",
        "Giờ làm không được để trống"
      ) &&
    validator.kiemTraKhoangGiaTri(newNV.gioLam, "tbGiolam", 80, 200, "Giờ làm");

  if (isValid == false) {
    return;
  }

  dsnv.push(newNV);

  saveLocalStorage();

  rederDanhSachSinhVien(dsnv);
};

// xóa nhân viên
let xoaNV = (id) => {
  var index = timKiemViTri(id, dsnv);
  if (index !== -1) {
    dsnv.splice(index, 1);

    saveLocalStorage();

    rederDanhSachSinhVien(dsnv);
  }
};

// sửa nhân viên
let suaNV = (id) => {
  var index = timKiemViTri(id, dsnv);
  if (index !== -1) {
    var nv = dsnv[[index]];
    showThongTinLenForm(nv);
  }
};

// cập nhật nhân viên
let capNhatNguoiDung = () => {
  var updateNV = layThongTinTuForm();

  // validator tài khoản
  var isValid =
    validator.kiemTraRong(
      updateNV.taiKhoan,
      "tbTKNV",
      "Tài khoản không được để trống"
    ) && validator.kiemTraTaiKhoan(updateNV.taiKhoan);

  // validator tên
  isValid =
    isValid &
      validator.kiemTraRong(
        updateNV.ten,
        "tbTen",
        "Họ và tên không được để trống"
      ) && validator.kiemTraTen(updateNV.ten);

  // validator email
  isValid =
    isValid &
      validator.kiemTraRong(
        updateNV.email,
        "tbEmail",
        "Email không được để trống"
      ) && validator.kiemTraEmail(updateNV.email);

  // validator matKhau
  isValid =
    isValid &
      validator.kiemTraRong(
        updateNV.matKhau,
        "tbMatKhau",
        "Mật khẩu không được để trống"
      ) && validator.kiemTraMatKhau(updateNV.matKhau);

  // validator ngày làm
  isValid =
    isValid &
      validator.kiemTraRong(
        updateNV.ngayLam,
        "tbNgay",
        "Ngày Làm không được để trống"
      ) && validator.kiemTraNgay(updateNV.ngayLam);

  // validator Lương cơ bản
  isValid =
    isValid &
      validator.kiemTraRong(
        updateNV.luongCoBan,
        "tbLuongCB",
        "Lương cơ bản không được để trống"
      ) &&
    validator.kiemTraKhoangGiaTri(
      updateNV.luongCoBan,
      "tbLuongCB",
      1000000,
      20000000,
      "Lương cơ bản"
    );

  // validator chức vụ
  isValid = isValid & validator.kiemTraChucVu(updateNV.chucVu, "Chọn chức vụ");

  // validator giờ làm
  isValid =
    isValid &
      validator.kiemTraRong(
        updateNV.gioLam,
        "tbGiolam",
        "Giờ làm không được để trống"
      ) &&
    validator.kiemTraKhoangGiaTri(
      updateNV.gioLam,
      "tbGiolam",
      80,
      200,
      "Giờ làm"
    );

  if (isValid == false) {
    return;
  }

  var index = timKiemViTri(updateNV.taiKhoan, dsnv);

  if (index !== -1) {
    dsnv[index] = updateNV;

    saveLocalStorage();

    rederDanhSachSinhVien(dsnv);
  }
};

let timKiemNhanVien = () => {
  var searchNameValue = document.getElementById("searchName").value;
  var newDSNV = [];

  dsnv.forEach((nv) => {
    if (searchNameValue == nv.xepLoaiNhanVien()) {
      newDSNV.push(nv);
      rederDanhSachSinhVien(newDSNV);
    }
    if (searchNameValue == "") {
      rederDanhSachSinhVien(dsnv);
    }
  });
};
