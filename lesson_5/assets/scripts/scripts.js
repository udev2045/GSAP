gsap.registerPlugin(MotionPathPlugin);

const path = document.getElementById('path');

gsap.to('.box', {
    duration: 20,
    repeat: 12,
    repeatDelay: 3,
    yoyo: true,
    ease: "power1.inOut",
    motionPath:{
        path: "m22.59999,280.4c42,-48 58,-204 149,-174c91,30 186,-6 154,90c-32,96 -131,-105 -170,-28c-39,77 -175,190 -110,267c65,77 151,116 179,-11c28,-127 -120,67 -107,-16c13,-83 13,-142 85,-141c72,1 129,83 249,45c120,-38 -29,-165 73,-216c102,-51 148,-68 158,92c10,160 215,319 -1,315c-216,-4 -219,-51 -216,-2c3,49 -225,88 -194,27c31,-61 283,-176 298,-184c15,-8 27,-151 26.40002,-151.4",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});