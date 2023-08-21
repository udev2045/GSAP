const tween = gsap.timeline({
    repeat: 0,
    repeatDelay: 1
});
tween.from('h1', {
   x: -500,
    ease: 'bounce',
    duration: 3,
    opacity: 0
});
tween.from('.subtitle', {
    x: 500,
    ease: 'bounce',
    duration: 3,
    opacity: 0
}, '-=1');
tween.from('.box', {
    y: 300,
    ease: 'bounce',
    duration: 3,
    opacity: 0,
    stagger: .1,
    scale: .2
}, '-=2');