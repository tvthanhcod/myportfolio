$(function () {

    // const lengthNavItem = $('.header__content-nav li').length()

    // lắng nghe sự kiện scroll trên window
    $(window).scroll(function () {
        let location = $('html').scrollTop()
        if (location > 150) {
            $('.header').addClass('headerFixed')
        } else {
            $('.header').removeClass('headerFixed')
        }

        $('.header__content-nav li').each(function (index) {
            handleActiveNav(location, index, 5)
        })
        $('.personal-information__left-side-taglist li').each(function (index) {
            if (location >= $(`.page-${index + 1}`).offset().top - 100 && $(`.part-${index + 2}`) != undefined ? location < $(`.part-${index + 2}`).offset().top : true) {
                $('.personal-information__left-side-taglist li p').removeClass('active-tag')
                $(`.personal-information__left-side-taglist li p:nth-child(${index + 1})`).addClass('active-tag')
            }
        })
    }) // đóng của hàm sự kiện scroll window

    // sự kiện auto active nav khi scroll
    $('.header__content-nav li').each(function (index) {
        $(`.header__content-nav li:nth-child(${index + 1})`).on('click', function () {
            $('.header__content-nav li').removeClass('active')
            $(`.header__content-nav li:nth-child(${index + 1})`).addClass('active')
            let part = $(`.part-${index + 1}`)
            handleScroll(part)
        })
    })// kết thúc

    // hàm scroll
    function handleScroll(el) {
        $('html').animate({ scrollTop: el.offset().top }, 600)
    }

    // hàm tự động active nav theo nội dung scroll
    function handleActiveNav(windowScrollTop, index, length) {
        if (windowScrollTop >= $(`.part-${index + 1}`).offset().top - 150 && ((index + 2) < length && $(`.part-${index + 2}`) != undefined ? windowScrollTop < $(`.part-${index + 2}`).offset().top : true)) {
            $('.header__content-nav li').removeClass('active')
            $(`.header__content-nav li:nth-child(${index + 1})`).addClass('active')
        }
    }

    $('.tag__content').parent().click(function () {
        $('.personal-information__left-side-taglist li p').addClass('active-tag')
    })
})

