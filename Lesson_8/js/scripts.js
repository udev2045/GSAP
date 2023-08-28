$(document).ready(function () {
    let controller = new ScrollMagic.Controller();

    var scene =ScrollMagic.Scene({
        triggerElement: '#section-2'
    })
        .setTween('#bg img', {
            maxWidth: '1200px',
            top: '30%',
            left: '80%',
            opacity: .25
        })
        .addTo(controller)
})