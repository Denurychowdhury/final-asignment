
function handlecontact(event){
    event.preventDefault();
    const email=event.target.email.value;
    console.log(email);
    const successcontainer=document.getElementById("success_container");
    console.log(successcontainer);
    const emailParagraph =document.createElement('p');
    emailParagraph.innerText =`your email: ${email}`;
    console.log(emailParagraph);
    successcontainer.appendChild(emailParagraph);
}
const imageArray =[
    {
    url :"./image/items/green-beans.png",
    
 },
 {
    url:"./image/items/beef-enchiladas.png",
 },
 {
    url:"./image/items/gyro-sandwich.png",
 },
 {
    url:"./image/items/pizza.png",
 },
 {
    url:"./image/items/chicken pot.png",
 },{
    url:"./image/items/salad.png",
   
 }
 ];

 
  
 



 function handleshowmoreproject(){
   const projectcontainer =document.getElementById('item-card');

    for(const item of imageArray){
        console.log(item);
       const projectdivimage=document.createElement('div');
       projectdivimage.classList.add("food");
        projectdivimage.innerHTML=`
        <img src="${item.url}">
        `;
       
        projectcontainer.appendChild(projectdivimage);
        console.log(projectdivimage);
      
     } 
 
     
 }
 