gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
})

gsap.fromTo('.hero-section', {
    opacity: 1,
    scale: 1,
}, {
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: 'bottom',
        scrub: true
    }
});

let itemsL = gsap.utils.toArray('.gallery-left .gallery__item')
itemsL.forEach(item => {
    gsap.fromTo(item, {
        opacity: 0,
        x: -100,
        scale: .6
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
            trigger: item,
            scrub: true
        }
    })
})

let itemsR = gsap.utils.toArray('.gallery-right .gallery__item')
itemsR.forEach(item => {
    gsap.fromTo(item, {
        opacity: 0,
        scale: .6,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
            trigger: item,
            scrub: true
        }
    })
})
