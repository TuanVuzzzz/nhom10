// Trang đăng nhập - đăng ký
function login(frm){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value)==false){
        alert("Vui lòng nhập Email lại");
        frm.email.focus();
        return false;
    }
    if(frm.psw.value.length<8){
        alert("Vui lòng nhập mật khẩu >=8");
        frm.pws.focus();
        return false;
    }
    alert("Đã đăng nhập thành công");
    return true;
}
function register(frm){
    if(frm.user.value.length<4){
        alert("Vui lòng nhập lại tên >= 4");
        frm.user.focus();
        return false;
    }
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value)==false){
        alert("Vui lòng nhập Email lại");
        frm.email.focus();
        return false;
    }
    if(frm.psw.value.length<8){
        alert("Vui lòng nhập mật khẩu >= 8");
        frm.psw.focus();
        return false;
    }
    if(frm.psw.value !== frm.psw1.value){
        alert("Vui lòng nhập mật khẩu giống trên");
        frm.psw1.focus();
        return false;
    }
        alert("Đã đăng nhập thành công");
       return true; 
}