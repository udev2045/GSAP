gsap.to('.box', {
   duration: 2,
    x: 200,
    scale: .2,
    stagger: {
        amount: 5,
        each: .5,
        from: 'random',
        repeat: -1,
        yoyo: true
    }
});