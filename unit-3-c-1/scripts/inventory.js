var item=JSON.parse(localStorage.getItem("products"));

function display()
{

item.forEach(function(el,i){
var box=document.createElement("div")
    var image=document.createElement("img"); 
image.src=el.image;
 var name=document.createElement("h4");
name.innerText=el.type;
    var desc=document.createElement("h5");
desc.innerText=el.desc;
    var price=document.createElement("p");
price.innerText=el.price;

var btn=document.createElement("button");
btn.innerText="Remove";
btn.addEventListener("click",function(){
    del(el,i)
})
box.append(image,name,desc,price,btn)
document.querySelector("#all_products").append(box)
})

}
function del(el,i)
{
item.splice(i,1);
localStorage.setItem("products",JSON.stringify(item))
window.location.reload();
}
display();