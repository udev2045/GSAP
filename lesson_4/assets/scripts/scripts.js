gsap.registerPlugin(TextPlugin);
const tween = gsap.timeline({
   duration: 1,
   delay: 2,
});
tween.to('h1 span', {
   text: 'HTML'
}, '+=2');
tween.to('h1 span', {
   text: 'CSS'
}, '+=2');
tween.to('h1 span', {
   text: 'JS'
}, '+=2');