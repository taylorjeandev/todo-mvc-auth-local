const deleteBtn = document.querySelectorAll('.lnr-trash')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteItem)
})


async function deleteItem(){
    const itemId = this.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.id
    try{
        const response = await fetch('items/deleteItem', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemIdFromJSFile': itemId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
