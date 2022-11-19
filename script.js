let btn=document.querySelector(".todo-button");
let input=document.querySelector(".todo-input")
var ul=document.querySelector(".todo-list");
var t;

let ls=localStorage.getItem("todo");
let todo=ls?JSON.parse(ls):[];


 function ExistedItems(){
       todo.map((info)=>{
              var div=document.createElement('div');
              div.setAttribute('class','listcontent')
       
              var li=document.createElement('li');
              li.setAttribute('class','listpart');
              li.textContent=info;
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
           })
       
 }
window.addEventListener('load',()=>{
       console.log("loading...")
       ExistedItems();
    
})



btn.addEventListener('click',()=>{
       var inp=input.value;
       if(inp=="")
        return;
       console.log(inp);
       todo.push(inp);
       localStorage.setItem("todo",JSON.stringify(todo));
      
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

      
     
            var ele= e.target.parentElement;
            ele.remove();

            var dele=e.target.parentElement.children[0].innerHTML;
            let arr=[];
            todo.map((info)=>{
                if(info!=dele){
                     arr.push(info);
                }
            })
            todo=[...arr];
            localStorage.setItem("todo",JSON.stringify(todo));

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
       todo.map((info,index)=>{
              if(info==t.innerHTML){
                     todo.splice(index,1,txt);
              }
      })
      localStorage.setItem("todo",JSON.stringify(todo));
       t.textContent=txt;
       
        
       ele.value="";
       document.querySelector('.updation').style.display="none";

 })   



