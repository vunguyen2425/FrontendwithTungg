//  thêm hoặc xóa key ra object
let infoUser = {
    fullName:"Dang Tieu Binh",
    email:"emanhviet@gmail.com"
};
infoUser.phone="029323384380";
infoUser["so dien thoai"]="3186548346";

delete infoUser.email;
console.log(infoUser);