function init() {
    var a = document.querySelectorAll("div.icon div.icon-heart")
    for (var i = 0; i < a.length; i++)

        icon[i].onclick = function () {
            alert('hello')
        }

}

$(window).on("load", function () {
    $(document).ready(function () {

        $(".sub").hide()

        $(window).scroll(() => {
            if ($(this).scrollTop() >= 600) {
                $(".sub").show()

                // $(".sub").slideDown(500)
                $(".sub").css({
                    "position": "fixed",
                    "z-index": 99
                })
                $(".sub-Profile").css({
                    "background-color": "blue",

                })
            }
            else {
                $(".sub").hide()
            }
        })
    })
});

function load_item() {
    let c = document.getElementById("items");
    c.innerHTML = "";

    fetch(`/JSON/items.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            let d = document.getElementById("items");
            for (i of data) {

                d.innerHTML +=
                    `<div class="item">
                        <img src="${i.img}" alt="">
                        <div class="bg-top ">
                            <div class="flex icon">
                                <div class="icon-heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                <div class="icon-share">
                                    <i class="fa-regular fa-paper-plane "></i>
                                </div>
                            </div>
                        </div>
                    </div>`
            }
        })
}

function load_anh() {
    // alert("hello")
    let item = document.getElementById("item")
    let like = document.getElementById("like")
    let tag = document.getElementById("tag")
    let ds = document.querySelectorAll(".list>li")
    // console.log(ds)
    for (let i = 0; i < ds.length; i++)
        ds[i].onclick = function () {
            if (ds[i] == ds[0]) {
                ds[0].style.borderTop = "5px solid gray";
                ds[1].style.borderTop = "none";
                ds[2].style.borderTop = "none";
                tag.style.display = "none"
                like.style.display = "none"
            }
            if (ds[i] == ds[1]) {
                ds[0].style.borderTop = "none";
                ds[1].style.borderTop = "5px solid gray";
                ds[2].style.borderTop = "none";
                tag.style.display = "none"
                like.style.display = "block"
            }
            if (ds[i] == ds[2]) {
                ds[0].style.borderTop = "none";
                ds[1].style.borderTop = "none";
                ds[2].style.borderTop = "5px solid gray";
                like.style.display = "none"
                tag.style.display = "block"

            }
        }
}

function follow(obj) {
    //alert("click")
    let f = obj
    let d = document.getElementById("fixed")
    setTimeout(() => {
        d.style.display = "block"
    }, 200)
}
function remove(obj) {
    let r = obj
    let d = document.getElementById("fixed")
    setTimeout(() => {
        d.style.display = "none"
    }, 100)

}
function load_follow() {
    let c = document.getElementById("items");
    c.innerHTML = "";

    fetch(`/JSON/friends.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            let d = document.getElementById("fl_list");
            for (i of data) {

                d.innerHTML +=
                    `<ul>
                        <li>
                            <hr>
                        </li>
                        <li class="flex">
                            <div class="flex picture">
                                <div class="pic">
                                    <img src="${i.img}" alt="">
                                </div>
                                <div class="user">
                                    <h3>${i.name}</h3>
                                </div>
                            </div>
                            <div class="btn" onclick="check(this)">
                                <button class="del">Xóa</button>
                            </div>
                        </li>
                    </ul>`
            }
        })
}

function check(obj) {
    let btn = obj
    let b = document.getElementById("unfollow")
    setTimeout(() => {
        b.style.display = "block"

    }, 200)
    let par = btn.parentNode
    let child = par.querySelector(".del")

    let un = document.querySelectorAll("#button li")
    for (let i of un) {
        i.onclick = function () {
            let text = this.innerText
            if (text.indexOf("Có") >= 0) {
                setTimeout(() => {
                    b.style.display = "none"
                    child.innerText = "Đã xóa"
                    child.disabled = true
                    child.style.backgroundColor = "lightgray"
                }, 100)

            }
            else {
                setTimeout(() => {
                    b.style.display = "none"
                    child.innerText = "Xóa"
                }, 100)

            }
        }
    }

}

