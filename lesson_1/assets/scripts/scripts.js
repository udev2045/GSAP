gsap.to('#lesson1 .box-lesson-1', {
   x: 600,
   y: 100,
   background: '#ff4300',
   duration: 3,
   delay: 2,
   repeat: 5,
   repeatDelay: 0.5,
   stagger: 0.5,
   ease: 'power2,inOut',
   onComplete: function () {
      console.log('Done');
   }
});