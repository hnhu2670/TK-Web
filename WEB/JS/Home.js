function changeLeft() {
    let a = document.getElementById("stories");
    let d = 50;
    let computedStyle = window.getComputedStyle(a);
    let leftValue = computedStyle.getPropertyValue("left");
    let rightValue = computedStyle.getPropertyValue("right");

    let left1 = parseInt(leftValue, 10);
    let right1 = parseInt(rightValue, 10);
    if (right1 >= 0) {

        let newleft = left1 + d;
        a.style.left = newleft + "px";
    } else {
        let a = document.getElementById("stories");
        a.setAttribute("justify-content", "flex-start");
    }

};


function changeRight() {
    let a = document.getElementById("stories");
    let d = 50;
    let computedStyle = window.getComputedStyle(a);
    let leftValue = computedStyle.getPropertyValue("left");
    let rightValue = computedStyle.getPropertyValue("right");

    let left1 = parseInt(leftValue, 10);
    let right1 = parseInt(rightValue, 10);
    if (right1 <= 30) {
        let newleft = left1 - d;
        a.style.left = newleft + "px";
    }
}


/*Hiếu thêm sau*/


function load_friends() {
    fetch(`/JSON/friends.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            for (let i of data) {
                let a = document.getElementById("frie");
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
        });

};


function find_friends(obj) {
    let b = document.getElementById("frie");
    b.innerHTML = "";

    fetch(`/JSON/friends.json`)
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
    let colora = getComputedStyle(a);
    let thiscolor = colora.color;

    if (thiscolor === "rgb(255, 0, 0)" || thiscolor === "red") {
        a.style.color = "navy";
    } else {
        a.style.color = "red";
    }
}

function load_news() {
    let c = document.getElementById("h-load-news");
    c.innerHTML = "";

    fetch(`/JSON/news.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            let d = document.getElementById("h-load-news");
            for (i of data) {
                
                d.innerHTML +=
`<div class="list-news" id="list-news1">
    <div class="n-name flex">
        <div class="myImg">
            <a href="/HTML/Profile.html">
                <img src="${i.image}" alt="">
            </a>
        </div>
        <div class="myName">
            <a href="/HTML/Profile.html">
                <h3>${i.name}</h3>
            </a>
        </div>
        <div class="close">
            <i class="fa-solid fa-xmark" onclick="hide_news(this)"></i>
        </div>
    </div>
    <div class="n-infor">
        <div>
            <p>${i.content} </p>
        </div>
        <div class="n-img">
            <img src="${i.content_img}" alt="">
        </div>
    </div>
    <div class="n-heart flex">
        <div class="heart">
            <i class="fa-regular fa-heart" onclick="heart(this)"></i>
        </div>
        <div class="comment">
            <i class="fa-regular fa-comment"></i>
        </div>
        <div class="share">
            <i class="fa-regular fa-paper-plane"></i>
        </div>
    </div>
</div>`
            }
        })
}


function hide_news(obj){
    let a = obj;
    let b = a.parentNode.parentNode.parentNode;
    b.style.opacity = 0;
    
    setTimeout(function(){
        b.style.display = "none";
    }, 2000);
};












