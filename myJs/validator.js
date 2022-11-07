var validator = {
  kiemTraRong: (valueInput, idError, message) => {
    if (valueInput == "") {
      document.getElementById(idError).style.display = "block";
      document.getElementById(idError).innerText = message;
      return false;
    } else {
      document.getElementById(idError).style.display = "none";
      return true;
    }
  },
  kiemTraTrungLap: (accounts, dsnv) => {
    var index = dsnv.findIndex((nv) => {
      return nv.taiKhoan == accounts;
    });

    if (index !== -1) {
      document.getElementById("tbTKNV").style.display = "block";
      document.getElementById("tbTKNV").innerText = "Tài khoản này đã tồn tại";
      return false;
    } else {
      document.getElementById("tbTKNV").style.display = "none";
      return true;
    }
  },
  kiemTraKhoangGiaTri: (valueInput, idError, min, max, message) => {
    if (valueInput < min || valueInput > max) {
      document.getElementById(idError).style.display = "block";
      document.getElementById(
        idError
      ).innerHTML = `${message} phải từ ${min} - ${max}`;
      return false;
    } else {
      document.getElementById(idError).style.display = "none";
      return true;
    }
  },
  kiemTraTaiKhoan: (valueInput) => {
    var regex = /^[0-9]{1,6}$/;
    if (regex.test(valueInput)) {
      document.getElementById("tbTKNV").style.display = "none";
      return true;
    } else {
      document.getElementById("tbTKNV").style.display = "block";
      document.getElementById("tbTKNV").innerText =
        "Tài khoản tối đa 4 - 6 ký số";
      return false;
    }
  },
  kiemTraTen: (valueInput) => {
    var regex = /^[a-zA-Z\s\.]*$/;
    if (regex.test(valueInput)) {
      document.getElementById("tbTen").style.display = "none";
      return true;
    } else {
      document.getElementById("tbTen").style.display = "block";
      document.getElementById("tbTen").innerText =
        "Họ và tên nhân viên phải là chữ";
      return false;
    }
  },
  kiemTraEmail: (valueInput) => {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex.test(valueInput)) {
      document.getElementById("tbEmail").style.display = "none";
      return true;
    } else {
      document.getElementById("tbEmail").style.display = "block";
      document.getElementById("tbEmail").innerText =
        "Định dạng Email không đúng";
      return false;
    }
  },
  kiemTraMatKhau: (valueInput) => {
    var regex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;

    if (regex.test(valueInput)) {
      document.getElementById("tbMatKhau").style.display = "none";
      return true;
    } else {
      document.getElementById("tbMatKhau").style.display = "block";
      document.getElementById("tbMatKhau").innerText =
        "Mật khẩu có 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa và 1 ký tự đặc biệt)";
      return false;
    }
  },
  kiemTraNgay: (valueInput) => {
    var regex =
      /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (regex.test(valueInput)) {
      document.getElementById("tbNgay").style.display = "none";
      return true;
    } else {
      document.getElementById("tbNgay").style.display = "block";
      document.getElementById("tbNgay").innerText = "Định dạng ngày không đúng";
      return false;
    }
  },
  kiemTraChucVu: (valueInput, select) => {
    if (valueInput == select) {
      document.getElementById("tbChucVu").style.display = "block";
      document.getElementById("tbChucVu").innerText =
        "Hãy chọn 1 trong 3 chức vụ";
      return false;
    } else {
      document.getElementById("tbChucVu").style.display = "none";
      return true;
    }
  },
};
