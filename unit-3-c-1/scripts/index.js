//store the products array in localstorage as "products"
let form=document.querySelector("form");
form.addEventListener("submit",myfun)
var item=JSON.parse(localStorage.getItem("products"))||[]
function myfun()
{
   
    let obj={
         type:form.type.value,

         desc:form.desc.value,
    
         price:form.price.value,
    
         image:form.image.value,

    }
 
  

    item.push(obj)
   let array=new Product(type,desc,price,image);

localStorage.setItem("products",JSON.stringify(item))
    console.log(item)
}


// function fun(e)
// {
//     let form=document.querySelector("form");
//     var type=form.document.querySelector("#type").value;

//     var desc=form.document.querySelector("#desc").value;

//     var price=form.document.querySelector("#price").value;

//     var image=form.document.querySelector("#image").value;

//     let array=new Product(type,desc,price,image);
//     item.push(array)
//     localStorage.setItem("products",JSON.stringify(item))
//     console.log(array)
// }

function Product(t,d,p,i)
{
this.type=t;
this.desc=d;
this.price=p;
this.image=i;
}
Product();
