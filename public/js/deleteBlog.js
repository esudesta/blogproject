const delelement = document.getElementById("delete")

delelement.addEventListener("click", (e) => {
    console.log("delete called");
    fetch(`/delete/${delelement.dataset.doc}`, {
        method: "DELETE",
    }).then(res => {
        return res.json()
    }).then(data=>{
        window.location.href = data.redirect
        // console.log(data)
    }).catch(err => {
        console.log(err);
    })
})