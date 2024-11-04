var pro_name=document.getElementById('pro_name');
var pro_name2=document.getElementById('pro_name2');
var pro_nproperties=document.getElementById('pro_pro');
var pro_list;
if (localStorage.getItem('products')==null){
    pro_list=[];
}
else{
    pro_list=JSON.parse(localStorage.getItem('products'));
    display_prodacts( )
}

function prodacts(){

   var prodact= {
        name:pro_name.value,
        price:pro_name2.value,
        properties:pro_nproperties.value
    }
    pro_list.push(prodact);
    localStorage.setItem("products",JSON.stringify(pro_list)); 
    console.log(pro_list);

    display_prodacts();
    clearform();
}

function display_prodacts()
{
   var cartonna=` `;
    for(var i = 0 ; i < pro_list.length ; i++) 
    {
        cartonna+=` <tr>
        <td>${pro_list[i].name}</td>
        <td>${pro_list[i].price}</td>
        <td>${pro_list[i].properties}</td>
        <td><button class="btn btn-warning">update</button></td>
        <td><button  onclick="delete_element(${i})" class="btn btn-danger" >delete</button></td>
    </tr>`;
    }
    document.getElementById('oppo').innerHTML=cartonna;
}
function delete_element(proIndex){
    pro_list.splice(proIndex , 1);
    display_prodacts();
}
function clearform(){
    pro_name.value="";
    pro_name2.value="";
    pro_nproperties.value="";
}
