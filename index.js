// adding list while clicking button
var container=document.querySelector(".container")
var container1=document.querySelector(".container1")
var ul=document.querySelector("#todo-list")
var inputText=document.querySelector("#todo-input")
var descInputText=document.querySelector("#todo-input-text")
btn=document.querySelector('#add-btn')
btn.addEventListener('click', function (){
var li= document.createElement('li')
var div1=document.createElement('div')// This is div1 inside li
div1.className='div1'
var div2=document.createElement('div')// this is div2 inside li
div2.className='div2'
var cross=document.createElement('img')//cross inside div1
var p=document.createElement('h4')//p inside div1
var h3=document.querySelector('#small-heading')
var editImage=document.createElement("img")
var div1_left=document.createElement('div')

// for edit
var editText=document.querySelector('#todo-edit')
var editMessage=document.querySelector('#todo-edit-text')
var saveBtn=document.querySelector('#save-btn')
var discardBtn=document.querySelector('#discard-btn')
if(inputText.value!=''){
    editImage.src="https://cdn-icons-png.flaticon.com/512/5251/5251816.png"
    editImage.height=30
    editImage.width=30
    
    h3.textContent="Your Tasks: "
    cross.src="https://www.shutterstock.com/shutterstock/photos/1696758415/display_1500/stock-vector-grunge-letter-x-red-cross-sign-1696758415.jpg"
    cross.height=30
    cross.width=30
    ul.appendChild(li)  
    // li.appendChild(div1)
    // li.appendChild(div2)
    p.textContent=inputText.value
    div1.style.width='100%';
    div2.style.width='100%'
    div1.style.display='flex';
    div1.style.justifyContent='space-between'
    div1.appendChild(p)
    div1_left.style.display='flex'
    div1_left.style.gap='10px'
    div1.appendChild(div1_left)
    div1_left.appendChild(cross)
    div1_left.appendChild(editImage)
    li.appendChild(div1)
    div2.textContent=descInputText.value
    li.appendChild(div2)
    cross.addEventListener('click',()=>ul.removeChild(ul.firstElementChild))
    editImage.addEventListener('click',function(){
        container.style.display='none'
        container1.style.display='block'
        editText.value=p.textContent
        editMessage.value=div2.textContent
    })
    discardBtn.addEventListener('click',function(){
        container.style.display='block'
        container1.style.display='none'
    })
    saveBtn.addEventListener('click',function(){
        if(editText.value==p.textContent&&editMessage.value==div2.textContent){
        container.style.display='block'
        container1.style.display='none'
        }else{
            p.textContent=editText.value;
            div2.textContent=editMessage.value
            container.style.display="block"
            container1.style.display="none"
        }
    })
    // editImage.addEventListener('click',()=>)
    inputText.value='' // This line sets the value to be clear after user enters something
    descInputText.value=''
}
})
