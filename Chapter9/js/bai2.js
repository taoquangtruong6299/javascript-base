// var ds = [
//   {
//     ten: "A",
//     nsx: "ABC",
//     soluong: 12,
//     gia: 123,
//   },
//   {
//     ten: "B",
//     nsx: "ABC",
//     soluong: 12,
//     gia: 123,
//   },
//   {
//     ten: "C",
//     nsx: "ABC",
//     soluong: 12,
//     gia: 123,
//   }
// ]

// // var ten = $("h1");
// // var nhasanxuat = $("h3");
// // var soluong = $(".soluong");
// // var gia = $(".gia");
// // if(window.localStorage){
// //   localStorage.setItem("cart", "[1,3,4]")
// //   console.log(localStorage.getItem("cart"));
// //   localStorage.clear();
// // }
// $(document).ready(function(){
//   var data = document.querySelector(".data");

//   var template = ``;
//   for (var i in ds) {
//     template += `
//     <h1>${ds[i].ten}</h1>
//     <h3>${ds[i].nsx}</h3>
//     <p><span class="soluong">${ds[i].soluong}</span></p>
//     <p><span class="gia">${ds[i].gia}</span></p>
//     <button>Add to card</button>
//     `
//   }
//   data.innerHTML = template;

//   var button = document.querySelector('button');
//   button.addEventListener('click',function(){
//     console.log("ok");
//     if(window.localStorage){
//       localStorage.setItem("ds", "ds")
//       console.log(localStorage.getItem("ds"));
//       localStorage.clear();
//   }
//   })
//   console.log(button);
// })
// var button = document.querySelectorAll('button');

var products = [
    {
        name: "A",
        nsx: "A",
        price: 5000,
        category: "A"
    },
    {
        name: "B",
        nsx: "A",
        price: 7000,
        category: "B"
    },
    {
        name: "C",
        nsx: "B",
        price: 6000,
        category: "C"
    },
    {
        name: "E",
        nsx: "A",
        price: 3000,
        category: "A"
    },
    {
        name: "D",
        nsx: "A",
        price: 2000,
        category: "A"
    },
    {
        name: "F",
        nsx: "A",
        price: 7000,
        category: "A"
    },
    {
        name: "G",
        nsx: "C",
        price: 9000,
        category: "A"
    },
    {
        name: "L",
        nsx: "C",
        price: 9000,
        category: "A"
    }
]
var length = products.length;
for(let i = 0;i<length;i++){
    $('table').append("<tr></tr>");
    $($('table tr')[i+1]).html('<td>'+products[i].name+'</td>'+'<td>'+products[i].nsx+'</td>'+'<td>'+products[i].price+'</td>'+'<td>'+products[i].category+'</td>'+'<td><button id='+(i+1)+'>add</button></td>');
}

var cart = window.localStorage;
$('button').click(function(){
    var a = $(this).attr('id');
    console.log(a);
    if(cart && a!='viewcart' && a!='clearcart'){
        cart.setItem(localStorage.length+1, (a-1));
    }
    for (i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
    });
$("#viewcart").click(function showcart(){
    $('#showcart').show();
    $("#showcart").html("<tr><th>Tên</td><th>Nhà sản xuất</td><th>Giá</td><th>Loại</td></tr>");
    console.log("leng: "+localStorage.length);
    for(let i = 0;i<localStorage.length;i++){
        var j = localStorage.getItem(localStorage.key(i));
        console.log("j: "+j);
        $('#showcart').append('<tr><td>'+products[j].name+'</td>'+'<td>'+products[j].nsx+'</td>'+'<td>'+products[j].price+'</td>'+'<td>'+products[j].category+'</td></tr>');
    }
});
$('#clearcart').click(function(){
    cart.clear();
    $("#showcart").html("<tr><th>Tên</td><th>Nhà sản xuất</td><th>Giá</td><th>Loại</td></tr>");
});
