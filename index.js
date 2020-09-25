


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
    console.log('increse time carosel in jquery')
    $('#myCarousel').carousel({interval:5000})
    $('#carousel-pause').on("click" ,function(){
       $('#myCarousel').carousel('pause')
    })
    $('#carousel-play').on("click" ,function(){
        $('#myCarousel').carousel('cycle')
     })
    $('#caroselToggle').on("click" , function(){
        if( $('#caroselToggle').children('span').hasClass('fa-pause')){
            $('#myCarousel').carousel('pause')
            $('#caroselToggle').children('span').removeClass('fa-pause')
            $('#caroselToggle').children('span').addClass('fa-play')
        }else{
            $('#myCarousel').carousel('cycle')
            $('#caroselToggle').children('span').removeClass('fa-play')
            $('#caroselToggle').children('span').addClass('fa-pause')
        }
           
    })
})


