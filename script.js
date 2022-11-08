let btn=document.querySelector(".todo-button");
let input=document.querySelector(".todo-input")
var ul=document.querySelector(".todo-list");
var t;
btn.addEventListener('click',()=>{
       var inp=input.value;
       if(inp=="")
        return;
       console.log(inp);
       var div=document.createElement('div');
       div.setAttribute('class','listcontent')

       var li=document.createElement('li');
       li.setAttribute('class','listpart');
       li.textContent=inp;
       div.appendChild(li);

       var edit=document.createElement('button');
       edit.setAttribute('class','edit');
       edit.textContent="Edit";
       div.appendChild(edit);

       var del=document.createElement('button');
       del.setAttribute('class','delete');
       del.textContent="Delete";
       div.appendChild(del);
       ul.appendChild(div);  
       
       input.value="";
})

document.addEventListener('click',(e)=>{
        if(e.target.className=="delete"){
             console.log(e.target.parentElement);
            var ele= e.target.parentElement;
            ele.remove();
        }
        if(e.target.className=="edit"){
               console.log("edit");
               t=e.target.parentElement.children[0];
               document.querySelector('.updation').style.display="block";
        }
})
document.querySelector('.btn').addEventListener('click',()=>{
       var ele=document.querySelector(".editcon");
       var txt=ele.value;
       if(txt=="")
        return;
       console.log(txt);
       t.textContent=txt;
        
       ele.value="";
       document.querySelector('.updation').style.display="none";

 })   



