
const productImg = document.getElementById("productImg");
const btn = document.querySelectorAll(".btn");


btn[0].onclick = ()=>{
    productImg.src = "image/image1.png";

     for (bt of btn) {
        bt.classList.remove("active");
     }
     this.classList.add("active");
}
btn[1].onclick = ()=>{
    productImg.src = "image/image2.png";
    for (bt of btn) {
        bt.classList.remove("active");
     }
     this.classList.add("active");
}
btn[2].onclick = ()=>{
    productImg.src = "image/image3.png";
    for (bt of btn) {
        bt.classList.remove("active");
     }
     this.classList.add("active");
}