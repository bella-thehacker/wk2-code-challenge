let itemsArray = []

let form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
    e.preventDefault()
   handleAdd(e.target.frm1.value)
   

   itemsArray.push(e.target.frm1.value)
   console.log(itemsArray)
    
   

})




function handleAdd(list){
    let li = document.createElement('li')
    li.className = 'list-item'

    let textNode = document.createTextNode(list)

    let btn = document.createElement('button')
    btn.textContent =  ' Mark Purchased'
    btn.addEventListener('click', Purchased)
    btn.className = 'markbtn'

   


    li.appendChild(textNode)
    li.appendChild(btn)
    document.getElementById('listItems').appendChild(li)
    
    
    
}

function Purchased(e){
    let li = e.target.parentNode
    li.classList.toggle('strikethrough')
}

document.querySelector('form').addEventListener('reset', (e) => {
    const listItems = document.getElementById('listItems')
    listItems.innerHTML = ''
    

    itemsArray = []
    console.log(itemsArray)

   

})


    






















































