let layThongTinTuForm = () => {
  var accounts = document.getElementById("tknv").value.trim();
  var fullName = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var datePicker = document.getElementById("datepicker").value;
  var basicSalary = document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var workTime = document.getElementById("gioLam").value;

  var nv = new NhanVien(
    accounts,
    fullName,
    email,
    password,
    datePicker,
    basicSalary,
    position,
    workTime
  );

  return nv;
};

let rederDanhSachSinhVien = (list) => {
  var contentHTML = "";
  list.forEach(function (item) {
    var content = `<tr>
        <td>${item.taiKhoan}</td>
        <td>${item.ten}</td>
        <td>${item.email}</td>
        <td>${item.ngayLam}</td>
        <td>${item.chucVu}</td>
        <td>${item.tinhTongLuong()}</td>
        <td>${item.xepLoaiNhanVien()}</td>
        <td>
         <div style="display: flex; justify-content: space-between; align-items: center">
         <button class="btn btn-danger" onclick="xoaNV('${
           item.taiKhoan
         }')">Xóa</button>
        <button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="suaNV('${
          item.taiKhoan
        }')">Sửa</button>
         </div>
        
        </td>
      </tr>
    `;
    contentHTML += content;

    // style="display: flex; justify-content: center; align-items: center"
  });

  document.getElementById("tableDanhSach").innerHTML = contentHTML;
};

// tim kiếm index
let timKiemViTri = (id, arr) => {
  for (var index = 0; index < arr.length; index++) {
    var nv = arr[index];
    if (nv.taiKhoan == id) {
      return index;
    }
  }
  return -1;
};

// showthongTinlenform
let showThongTinLenForm = (nv) => {
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCoBan;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
};
