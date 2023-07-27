function active() {
    let c = document.getElementById("list-friend");
    c.innerHTML = "";

    fetch(`/JSON/message.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            let d = document.getElementById("list-friend");
            for (i of data) {

                d.innerHTML +=
                    `<li class="item wow">
                        <a href="#" class="flex" onclick="click_Name(this)">
                            <div class="f-img"><img src="${i.img}" alt=""></div>
                            <div class="f-name">
                                <h3>${i.name}</h3>
                                <span>${i.time}</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <hr>
                    </li>`
            }
        })
}

function click_Name(obj) {
    let a = obj
    let par = obj.parentNode
    par.classList.add("animate__animated")
    par.classList.add("animate__pulse")
    setTimeout(() => {
        par.classList.remove("animate__animated")
        par.classList.remove("animate__pulse")
    }, 1000)
    // par.style.backgroundColor = "lightblue"
    let img = par.querySelector(".f-img img")
    let n = par.querySelector(".f-name h3")
    let t = par.querySelector(".f-name span")
    // đổi đường dẫn ảnh
    let c = document.querySelector("#pic img")
    setTimeout(() => {
        c.src = img.src
    }, 100)

    //đổi nội dung
    let text = document.querySelector("#text h3")
    let time = document.querySelector("#text span")
    setTimeout(() => {
        text.innerText = n.innerText
        time.innerText = t.innerText
    }, 100)




}

