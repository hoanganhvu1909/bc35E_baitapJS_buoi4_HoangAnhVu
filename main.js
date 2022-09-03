/**
 * bài 1: Sắp xếp các số theo thứ tự tăng dần:
 * Mô hình 3 khối
 * đầu vào:
 * - Nhập số nguyên dương thứ nhất
 * - Nhập số nguyên dương thứ hai
 * - Nhập số nguyên dương thứ ba
 * Xử lý
 * - điều kiện 1: a > b và b > c
 * - điều kiện 2: a > c và c > b
 * - điều kiện 3: b > a và a > c
 * - điều kiện 4: b > c và c > a
 * - điều kiện 5: c > a  và a > b
 * - điều kiện 6: c > b  và b > a
 * Đầu ra:
 * - kết quả thứ tự tăng dần 
 */
document.getElementById("btnSapxep").onclick = function () {
    //đầu vào
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var thuTu = "";

    //xử lý
    if (so1 > so2 && so2 > so3) {
        thuTu = so3 + "<" + so2 + "<" + so1
    } else if (so1 > so3 && so3 > so2) {
        thuTu = so2 + "<" + so3 + "<" + so1;
    } else if (so2 > so1 && so1 > so3) {
        thuTu = so3 + "<" + so1 + "<" + so2;
    } else if (so2 > so3 && so3 > so1) {
        thuTu = so1 + "<" + so3 + "<" + so2;
    } else if (so3 > so1 && so1 > so2) {
        thuTu = so2 + "<" + so1 + "<" + so3;
    } else {
        thuTu = so1 + "<" + so2 + "<" + so3;
    }
    var result1 = "<p> kết quả là: " + thuTu + "</p>";

    //đầu ra
    document.getElementById("showThutu").innerHTML = result1;

};

/**
 * bài 2: Chào hỏi các thành viên trong gia đình:
 * Mô hình 3 khối"
 * Đầu vào:
 * - Người dùng chọn thành viên
 * Xử lý
 * - Nếu giá trị user chọn là bố => true => hành động: "xin chào bố"
 * - Tương tự else if cho các đối tượng còn lại
 * Đầu ra
 * - Kết quả hiển thị: "xin chào..."
 */
document.getElementById("btnXinchao").onclick = function () {
    //đầu vào
    var welcome = document.getElementById("welcome").value;
    var xinChao = "";
    //xử lý
    if (welcome === "khac") {
        xinChao = "xin chào người lạ ơi"
    } else if (welcome === "bo") {
        xinChao = "xin chào bố"

    } else if (welcome === "me") {
        xinChao = "Xin chào mẹ"
    } else if (welcome === "anh") {
        xinChao = "Xin chào anh trai"
    } else {
        xinChao = "xin chào em gái"
    }
    //đầu ra
    document.getElementById("showXinchao").innerHTML = xinChao;
};

// bài 3: Viết chương trình xuất ra có bao nhiêu số chẵn và số nguyên 
/**
 * Mô hình 3 khối:
 * Đầu vào:
 * - User nhập vào 3 số nguyên
 * - var count = 0,
 * Xử lý:
 * số chẵn:
 * - Nếu a chia hết cho 2 thì count + 1
 * - Nếu b chia hết cho 2 thì count + 1
 * - Nếu c chia hết cho 2 thì count + 1
 * Só lẽ:
 * soLe = 3 -count
 * Đầu ra
 * số chẵn là: + số lẽ là:
 */
document.getElementById("btnchanle").onclick = function () {
    //Đầu vào:
    var a = document.getElementById("num1").value * 1;
    var b = document.getElementById("num2").value * 1;
    var c = document.getElementById("num3").value * 1;
    // var ketQua = "";
    var count = 0;
    //xử lý
    if (a % 2 === 0) {
        count++;
    } 
    if (b % 2 === 0) {
        count++;
    } 
    if (c % 2 === 0) {
        count++;
    }
    var soLe = 3 - count;
    var kq = "số chẵn là: " + count + "<br>" + "số lẽ là: " + soLe;
    //đầu ra
    document.getElementById("showkq").innerHTML = kq;

};

// bài 4
document.getElementById("btntamgiac").onclick = function () {
    //đầu vào
    var a = document.getElementById("canh1").value;
    var b = document.getElementById("canh2").value;
    var c = document.getElementById("canh3").value;
    var kq = "";

    //xử lý
    if (a === b && a === c) {
        kq = "tam giác cân"
    } else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
        kq = `tam giac cân`
    } else if (a * a + b * b === c * c || c * c + b * b === a * a || a * a + c * c === a * a) {
        kq = "tam giác vuông"

    }
    else {
        kq = "tam gíac thường"
    }

    //đầu ra
    document.getElementById("showkq1").innerHTML = kq;

};
