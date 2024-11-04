export function showToast(operation,id){
    const toast = document.createElement("div")
    toast.classList.add("toast")

    if(operation === "add"){
        toast.textContent = `product with ID ${id} is added`
    }else{
        toast.textContent = `product with ID ${id} is deleted`
    }
    document.body.appendChild(toast)

    setTimeout(()=>{
        toast.remove()},2000)
}