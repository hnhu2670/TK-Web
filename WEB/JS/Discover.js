function like_img(obj) {
    let like_img = obj;
    let thiscolor = like_img.style.backgroundColor;
    if (thiscolor == "rgb(255, 0, 0)" || thiscolor == "red") {
        like_img.setAttribute('style', "background-color:navy");
    }
    else {
        like_img.setAttribute('style', "background-color:red");
    }

};

$(document).ready(function () {

    $(".wow").mouseenter(function () {
        // Xử lý khi di chuột vào phần tử
        // $(this).text("Đã di chuột vào");
        // $(this).removeClass("animate__pulse");
        // $(this).removeClass("wow");
        // $(this).removeClass("animate__animated");
        // $(this).addClass("wow");
        // $(this).addClass("animate__animated");
        $(this).find("img").addClass("animate__animated");
        $(this).find("img").addClass("animate__pulse");
        setTimeout(() => {
            $(this).find("img").removeClass("animate__animated");
            $(this).find("img").removeClass("animate__pulse");
        }, 1000)
    }).mouseleave(function () {
        // $(this).find("img").removeClass("animate__animated");
        // $(this).find("img").removeClass("animate__zoomIn");
        // Xử lý khi rời chuột khỏi phần tử
        // $(this).text("Hover vào đây");
    });

})

