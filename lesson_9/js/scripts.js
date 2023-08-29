const tl = gsap.timeline();
tl.from('.container span', {
    duration: 1.5,
    delay: .5,
    skewX: -10,
    skewY: 10,
    stagger: .4,
    y: 50,
    x: -20,
    opacity: 0
})
tl.from('.img', {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: .2
})
gsap.timeline({
    scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        scrub: 1
    }
})
.to('.overlay', {
    height: '100%',
    ease: Expo.easeOut
}, 'start')
.to('.img', {
    boxShadow: "0 0 0 #000",
    ease: Expo.ease
}, 'start')

gsap.timeline({
    scrollTrigger: {
        trigger: '.wrap',
        //scrub: 8
    }
})
.to('.slider', {
    duration: 20,
    x: innerWidth * -1,
    repeat: -1,
    yoyo: true
})