// click menu
$(document).ready(() => {
    $(".tab-menu a").click(function () {
        setTimeout(() => {
            $(".tab-menu>li").removeClass("active")

            $(this).parent().addClass("active")

        }, 300)

    })
})
// click menu
$(document).ready(() => {
    $(".tab-res a").click(function () {
        setTimeout(() => {
            $(".tab-res>li").removeClass("actived")

            $(this).parent().addClass("actived")

        }, 300)

    })
})
// thông báo
function load_note(obj) {

    let a = document.getElementById("thongBao")
    console.log(a)
    if (a.style.left === "18%") {
        setTimeout(() => {
            a.style.left = "-18%"
            a.style.right = "100%"

        }, 300)
    } else {
        setTimeout(() => {
            a.style.left = "18%"
            a.style.right = "60%"


        }, 300)
    }
}

function load_subnote(obj) {
    let a = document.getElementById("thongBao")
    let form = document.querySelector("#form-active")
    let note = document.getElementById("noti")
    //console.log(note)
    if (a.style.left === "-18%") {
        setTimeout(() => {
            a.style.left = "8.1%"
            a.style.right = "70%"

        }, 10)
    }
    else {
        a.style.left = "-18%"
        a.style.right = "100%"
    }
}

function load_resnote(obj) {
    let a = document.getElementById("res-note")
    if (a.style.top === "10%") {
        a.style.top = "-100%"
        a.style.bottom = "200%"

    }
    else {
        a.style.top = "10%"
        a.style.bottom = "35%"
        a.style.visibility = "inherit"
    }
}

// tạo tin - load hình ảnh từ file
function checkImg(obj) {
    let fileInput = document.getElementById("fileInput")
    let a = document.querySelector(".pic")
    let b = document.querySelector(".tao-tin")
    b.style.display = "none"

    setTimeout(() => {
        a.style.display = "block"
    }, 100)
    //thuộc tính file trả về một list => files[0] lấy đối tượng đầu tiên
    let file = fileInput.files[0]
    let img = document.querySelector(".load-img img")

    let reader = new FileReader()
    setTimeout(() => {
        reader.onload = function () {
            img.src = reader.result
        }
        // phương thức readAsDataURL() được sử dụng để bắt đầu đọc file
        reader.readAsDataURL(file)
    }, 400)

}



function tao_tin(obj) {

    let b = document.querySelector(".tao-tin")
    let news = document.getElementById("bangTin")
    setTimeout(() => {
        news.style.display = "block"
        b.style.display = "block"

    }, 200)
}
function share(obj) {
    let a = document.querySelector(".pic")
    let news = document.getElementById("bangTin")
    alert("Chia sẻ thành công")
    setTimeout(() => {
        a.style.display = "none"
        news.style.display = "none"

    }, 200)

}
function back(obj) {
    let a = document.querySelector(".pic")
    let b = document.querySelector(".tao-tin")
    a.style.display = "none"
    setTimeout(() => {
        b.style.display = "block"
    }, 200)
}

function hide(obj) {
    let news = document.getElementById("bangTin")
    setTimeout(() => {
        news.style.display = "none"
    }, 500)
}

// cố định menu
$(window).on("load", function () {
    $(document).ready(function () {

        $(window).scroll(() => {
            if ($(this).scrollTop() >= 50) {
                $("#res-header").css({
                    "position": "fixed",
                    "z-index": 9999,
                    "background-color": "gray",
                    "margin-right": "16px"
                })

            }
            else {
                $("#res-header").css({
                    "position": "unset",
                    "background": "none",
                    "margin-right": "0px"
                })
            }
        })
    })
});