var allButtons = $('#buttons > span')
for(let i = 0; i < allButtons.length; i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var space = index * -300
        $('#imges').css({
            transform:  'translateX(' + space + 'px)'
        })
        n = index
        active(allButtons.eq(n))
    })
}

var n = 0
var size = allButtons.length
playSlide(n,size)

var timerId = setTimer()

$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
    timerId = setTimer()
})

function setTimer(){
    return setInterval(function(){
        n += 1
        playSlide(n,size)
    },1000)
}
function playSlide(n,size){
    allButtons.eq(n%size).trigger('click')
    active(allButtons.eq(n%size))
}
function active($index){
    $index.addClass('red').siblings('.red').removeClass('red')
}