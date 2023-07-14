function changeIcon(obj){
    // let icon = document.getElementsByTagName("span");
    // let a = obj.getElementsByTagName("i");
    // // a.setAttribute
    
    // // icon.set
    // a.setAttribute("color","blue");
    // // alert(obj)
    var icon = document.querySelectorAll(".icon-heart")
    for (var i =0;i<=icon.length;i++)
    {
        icon[i].setAttribute=("color","blue");
    }
}

function loadItems(){
    fetch('/JSOM/items.json').then(res => res.json()).then(data => {
        var h="";
        
    })
    

}    //console.info("thành công")
