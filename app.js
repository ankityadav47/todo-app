const input=document.querySelector('input');
const listBox=document.querySelector('#list-box');
function addTodo(){
  if(input.value==''){
    alertbox.render( { 
        alertIcon: 'question',
          title: 'Error',
          Message:'please enter a task first',
          btnTitle:'Ok',
          border: true,
        });
      }else {
        let li = document.createElement('li');
        li.innerHTML=input.value;
        listBox.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML=`<lord-icon
        src="https://cdn.lordicon.com/nqtddedc.json"
        trigger="hover"
        style="width:35px;height:35px">
    </lord-icon>`
    li.appendChild(span);
      }
      input.value="";
    
  }
  listBox.addEventListener('click',function tap(e){
    if(e.target.tagName =='LI'){
    e.target.classList.toggle("checked")
  }else if(e.target.tagName=="LORD-ICON"){
    e.target.parentElement.parentElement.remove();
  }
})
  function SaveToLocalstorage(){
    localStorage.setItem("list",listBox.innerHTML)
  }
  function ShowList(){
    listBox.innerHTML=localStorage.getItem("list");
  }
  ShowList();
