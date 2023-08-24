gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ease: Power0.easeNone});

tl.fromTo('#sec-1', {x: '-100%'}, {x: 0, y: '100%'});
tl.fromTo('#sec-2', {x: '100%'}, {x: 0, y: '100%'});
tl.fromTo('#sec-3', {x: '-100%'}, {x: 0, y: '100%'});
tl.fromTo('#sec-4', {x: '100%'}, {x: 0, y: '100%'});
tl.fromTo('#sec-5', {x: '-100%'}, {x: 0, y: '100%'});
tl.fromTo('#sec-6', {x: '100%'}, {x: 0, y: '100%'});
tl.fromTo('#sec-7', {x: '-100%'}, {x: 0, y: '100%'});
tl.fromTo('#sec-8', {x: '100%'}, {x: 0, y: '100%'});

const block = document.querySelector('.block');

ScrollTrigger.create({
    animation: tl,
    trigger: '.block',
    start: 'top top',
    end: 'bottom',
    scrub: true,
})