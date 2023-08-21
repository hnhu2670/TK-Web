function click_story() {
    const carousel = document.querySelector(".carousel")
    firstImg = carousel.querySelectorAll("li")[0]
    arrowIcons = document.querySelectorAll(".wrapper i")
    let firstImgWidth = 300
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            // console.log(firstImgWidth)
            if (icon.id === "left") {
                carousel.scrollLeft -= firstImgWidth
            }
            if (icon.id === "right") { carousel.scrollLeft += firstImgWidth }
        })

    });
}

/*Hiếu thêm sau*/


function load_friends() {
    fetch(`JSON/friends.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            for (let i of data) {
                let a = document.getElementById("frie");
                a.innerHTML +=
                    `<div class="friend">
                        <a href="#" class="list" onclick="mini_chat(this)">
                            <div class="friend-img">
                                <img src="${i.img}" class="img-fr" alt="ảnh"> 
                                <div class="ative">
                                    <i class="fa-solid fa-circle" style="color: #1ac417;"></i>            
                                </div>
                            </div>
                        
                            <div class="friend-name">
                                <span class="name-fr">${i.name}</span>
                            </div>
                        </a>
                    </div>`
            }
        });



};


function load_story(){

        fetch(`JSON/stories.json`)
            .then((res) => {
                return res.json();
            }).then((data) => {
                for (let i of data) {
                    let a = document.getElementById("stories_main");
                    a.innerHTML +=
                        `<li>
                        <div><img src="${i.image}" alt=""></div>
                        <div>
                            <h2>${i.name}</h2>
                        </div>
                    </li>`
                }
            });
    
    
    
    };

function mini_chat(obj) {
    let a = obj
    let pic = a
    let form = document.getElementById("form");
    let img = pic.querySelector(".friend-img img")
    let name = pic.querySelector(".friend-name span")
    console.info(name.innerText)

    form.innerHTML = `
    <div class="mini-chat flex" id="mini-chat">
                <div class="flex">
                    <div class="flex">
                        <div class="friend-img">
                            <img src="${img.src}" id="mini-img" alt="ảnh">
                        </div>
                        <div class="friend-name">
                            <span id="mini-name">${name.innerText}</span>
                        </div>
                    </div>
                    <div class="icon">
                        <i onclick="minuschat()" class="fa-solid fa-minus" id="minus"></i>
                        <i onclick="removechat()" class="fa-solid fa-xmark" id="xmark"></i>
                    </div>
                </div>
                <div>

                </div>
                <div class="chat">
                    <i class="fa-regular fa-message"></i>
                    <input type="text" placeholder="Tin nhắn......">
                </div>
            </div>
    `

}


function removechat() {
    let form = document.getElementById("form");
    let chat = form.querySelector("#mini-chat");
    chat.remove();
}

function minuschat() {
    let form = document.getElementById("form");
    let chat = form.querySelector("#mini-chat");
    if (chat.style.height === "8%") {
        chat.style.height = "50%";
    }
    else {
        chat.style.height = "8%";
    }


}
// tìm kiếm trang chủ
function search(obj) {
    // let s = document.getElementById("ip-search").value
    let s = obj.value
    console.log(s)
    let n = document.querySelectorAll(".myName > a >h3")
    for (let i = 0; i < n.length; i++) {
        if (n[i].textContent.indexOf(s) >= 0) {
            n[i].style.color = "gold"
        }

    }
}

// tìm kiếm bạn
function find_friends(obj) {
    let b = document.getElementById("frie");
    b.innerHTML = "";

    fetch(`JSON/friends.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            for (let i of data) {
                let namef = obj.value;
                let namet = i.name;
                let a = document.getElementById("frie");
                if (namet.search(namef) > -1) {
                    a.innerHTML +=
                        `<div class="friend">
                            <a href="#">
                                <div class="friend-img">
                                    <img src="${i.img}" id="img-fr" alt="ảnh"> 
                                </div>
                            
                                <div class="friend-name">
                                    <span id="name-fr">${i.name}</span>
                                </div>
                            </a>
                            
                        </div>`
                }
            }
        });

};
function heart(obj) {

    let a = obj;
    let b = a.parentNode.parentNode
    // let img = document.querySelector(".heart img")
    // console.log(img.src)
    let c = b.querySelector(".sub-heart")

    let colora = getComputedStyle(a);
    let thiscolor = colora.color;
    if (thiscolor === "rgb(255, 0, 0)" || thiscolor === "red") {
        c.style.display = "none"


    } else {
        c.style.display = "block"
    }
    let icon = b.querySelectorAll(".sub-heart ul li img")
    //console.log(icon.length)
    for (let i = 0; i < icon.length; i++) {
        icon[i].onclick = function () {

            if (icon[i] !== icon[3]) {
                a.src = icon[i].src
                setTimeout(() => {
                    a.classList.add("animate__animated")
                    a.classList.add("animate__tada")
                }, 100)
                setTimeout(() => {
                    a.classList.remove("animate__animated")
                    a.classList.remove("animate__tada")
                }, 1000)


            }
            else {
                a.src = "IMG/home/black-heart.png"
                //console.log(a.src)
            }
            setTimeout(() => {
                c.style.display = "none"
            }, 200)

        }
    }


}


function load_news() {
    let c = document.getElementById("h-load-news");
    c.innerHTML = "";

    fetch(`JSON/news.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            let count = 1
            let d = document.getElementById("h-load-news");
            for (i of data) {

                d.innerHTML +=
                    `
            <div class="restore" id="restore${count}">
                            <h1>Bài viết đã được ẩn</h1>
                            <button class="btn-restore" onclick="restore_news(this)">Hoàn Tác</button>
                        </div>
            <div class="list-news wow animate__animated animate__zoomIn" id="list-news${count}">
                    <div class="n-name flex">
                        <div class="myImg">
                            <a href="index3.html">
                                <img src="${i.image}" alt="">
                            </a>
                        </div>
                        <div class="myName">
                            <a href="index3.html">
                                <h3>${i.name}</h3>
                            </a>
                        </div>
                        <div class="close">
                            <i class="fa-solid fa-xmark" onclick="hide_news(this)"></i>
                        </div>
                    </div>
                    <div class="n-infor">
                        <div class="box">
                            <p>${i.content}</p>
                        </div>
                        <button class="btn-more" onclick=click_more(this)>Xem thêm</button>
                        <button class="btn-less" onclick=click_less(this)>Rút gọn</button>
                        <div class="n-img">
                            <img src="${i.content_img}" alt="">
                        </div>
                    </div>
                    <div class="n-heart flex">
                        <div class="heart wow">
                            <img src="IMG/home/black-heart.png" alt="" onclick="heart(this)">
                        </div>
                        <div class="comment">
                            <i class="fa-regular fa-comment" style="color:black"></i>
                        </div>
                        <div class="share">
                            <i class="fa-regular fa-paper-plane" style="color:black"></i>
                        </div>
                        <div class="sub-heart">
                            <ul class="flex">
                                <li class="love-heart"><img src="IMG/home/heart.png" alt=""></li>
                                <li class="smile"><img src="IMG/home/smile.png" alt=""></li>
                                <li class="cry"><img src="IMG/home/cry.png" alt=""></li>
                                <li class="delete"><img src="IMG/home/delete.png" alt=""></li>
                            </ul>
                        </div>
                    </div>
            </div>`;
                count += 1;
            }
        })
}



//ẩn bài viết

function hide_news(obj) {
    let news = obj;
    let baiviet = news.parentNode.parentNode.parentNode;
    baiviet.style.opacity = 0;
    let idbaiviet = baiviet.id;
    let idrestoretemp = idbaiviet.slice(-1, idbaiviet.length); // số cuối của id bài viết
    let idrestore = "restore" + idrestoretemp
    let restore = document.getElementById(idrestore);
    setTimeout(() => {
        restore.style.opacity = 1;
    }, 50)

    setTimeout(function () {
        baiviet.style.display = "none";
        restore.style.display = "flex";
        news_up_add_class();
        setTimeout(() => {
            news_up_remove_class();
        }, 1000)
    }, 2000);

};

// thêm class vào những bài viết để dồn lên
function news_up_add_class() {
    let news = document.getElementsByClassName("list-news");
    for (i of news) {
        if (i.style.display != "none") {
            i.classList.add("wow");
            i.classList.add("animate__animated");
            i.classList.add("animate__backInUp");
        }
    }
}

// xóa những class đã thêm ở hàm news_up_add_class
function news_up_remove_class() {
    let news = document.getElementsByClassName("list-news");
    for (i of news) {
        if (i.style.display != "none") {
            i.classList.remove("wow");
            i.classList.remove("animate__animated");
            i.classList.remove("animate__backInUp");
        }
    }
}

//Hoàn tác bài viết vừa ẩn
function restore_news(obj) {
    let btnrestore = obj;
    let restore = btnrestore.parentNode;
    let idrestore = restore.id
    let idbaiviettemp = idrestore.slice(-1, idrestore.length); // số cuối của id nút restore
    let idbaiviet = "list-news" + idbaiviettemp;
    let baiviet = document.getElementById(idbaiviet);

    restore.style.display = "none";
    baiviet.style.display = "block";

    setTimeout(function () {
        baiviet.style.opacity = 1;
        baiviet.classList.add("wow");
        baiviet.classList.add("animate__animated");
        baiviet.classList.add("animate__backInDown");
    }, 50);

    setTimeout(() => {
        baiviet.classList.remove("wow");
        baiviet.classList.remove("animate__animated");
        baiviet.classList.remove("animate__backInDown");
    }, 1000)


}

// gototop

$(window).on("load", () => {
    $(document).ready(function () {
        $("#go").hide()
        $(window).scroll(() => {
            if ($(this).scrollTop() >= 500) {
                $("#go").show()
            }
            else {
                $("#go").hide()
            }
        })

        $("#go").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000)
        })
    })
});

// như thêm
//nút xem thêm
function load_btn() {
    setTimeout(() => {
        let box = document.getElementsByClassName("box");
        for (i of box) {
            let height = parseFloat(i.offsetHeight);
            if (height <= 100) {
                let m = i.parentNode;
                let more = m.getElementsByTagName("button");
                for (j of more) {
                    j.style.display = "none";
                }

            }
        }
    }, 1000)

}

//nút xem thêm 
function click_more(obj) {
    let btn = obj
    let par = btn.parentNode
    let child = par.querySelector(".box")
    let btn_less = par.querySelector(".btn-less")
    child.style.maxHeight = "none"
    btn.style.display = "none"
    btn_less.style.display = "block"
}

//nút rút gọn
function click_less(obj) {
    let btn = obj
    let par = btn.parentNode
    //console.log(par)
    let child = par.querySelector(".box")
    let btn_more = par.querySelector(".btn-more")
    child.style.maxHeight = "100px"
    btn.style.display = "none"
    btn_more.style.display = "block"
}
















