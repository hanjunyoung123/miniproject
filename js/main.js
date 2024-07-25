    //스와이퍼===============
    window.onload = function(){
        const swBanner = new Swiper(".sw-banner" , {
            slidesPerView: 1,
            spaceBetween: 24,
            breakpoints: {
                // 480 : {
                //     slidesPerView: 2
                // },
                // 760 : {
                //     slidesPerView: 3.5
                // },
            },
            // navigation:{
            //     nextEl: ".banner .sw-next",
            //     prevEl: ".banner .sw-prev",
            // },
            pagination:{
                el:".sw-promotion-pg",
                clickable: true,
            },
    
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
    
        })
    };