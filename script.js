gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
height = window.innerHeight;
console.log(height)

tl.to(".text1", {
    scrollTrigger: {
        trigger: ".trigger1",
        start: "top bottom",
        end: "top center", 
        scrub: true, 
    },
    opacity: 1,
    visibility: 'visible'

});

tl.to(".text1", {
    scrollTrigger: {
        trigger: ".trigger1",
        start: "center top",
        end: "bottom top", 
        scrub: true, 
    },
    x: '40vw',

});
tl.to(".text1", {
    scrollTrigger: {
        trigger: ".trigger1",
        start: "bottom top",
        scrub: true, 
    },
    visibility: 'hidden',
});

tl.to(".text2", {
    scrollTrigger: {
        trigger: ".trigger2",
        start: "top bottom",
        end: "top center", 
        scrub: true, 
    },
    visibility: 'visible',
    x:'102vw',
});

tl.to(".text2", {
    scrollTrigger: {
        trigger: ".trigger2",
        start: "bottom center",
        end: "bottom top", 
        scrub: true, 
    },
    scale:0
});
tl.to(".text2", {
    scrollTrigger: {
        trigger: ".trigger2",
        start: "bottom top",
        scrub: true, 
    },
    visibility: 'hidden'
});

tl.to(".text3", {
    scrollTrigger: {
        trigger: ".trigger3",
        start: "top bottom",
        end: "top center", 
        scrub: true, 
    },
    y: '15vh',
    visibility: 'visible'
});

tl.to(".recordsleeve", {
    scrollTrigger: {
        trigger: ".trigger3",
        start: "top center",
        end: "top top", 
        scrub: true, 
    },
    x: '-15vw',
});

tl.to(".text3", {
    scrollTrigger: {
        trigger: ".trigger3",
        start: "bottom center",
        end: "bottom top", 
        scrub: true, 
    },
    x: '40vw',
    ease: 'bounce'
});

tl.to(".text3", {
    scrollTrigger: {
        trigger: ".trigger3",
        start: "bottom top",
        scrub: true, 
    },
    visibility: 'hidden'

});


tl.to(".text4", {
    scrollTrigger: {
        trigger: ".trigger4",
        start: "center bottom",
        end: "center top", 
        scrub: true, 
    },
    x: '-35vw',
    visibility: 'visible'
});

tl.to(".text4", {
    scrollTrigger: {
        trigger: ".trigger4",
        start: "bottom center",
        end: "bottom top", 
        scrub: true, 
    },
    opacity: 0
});
tl.to(".text4", {
    scrollTrigger: {
        trigger: ".trigger4",
        start: "bottom top",
        scrub: true, 
    },
    visibility: 'hidden'
});

tl.to(".text5", {
    scrollTrigger: {
        trigger: ".trigger5",
        start: "top center",
        end: "top top",
        scrub: "true",
    },
    visibility: 'visible',
    x: '-35vw'
});

tl.to(".text5", {
    scrollTrigger: {
        trigger: ".trigger5",
        start: "bottom center",
        end: "bottom top",
        scrub: "true",
    },
    y: '35vh'
});
tl.to(".text5", {
    scrollTrigger: {
        trigger: ".trigger5",
        start: "bottom top",
        scrub: "true",
    },
    visibility: 'hidden'
});

tl.to(".text6", {
    scrollTrigger: {
        trigger: '.trigger6',
        start: 'top center',
        end: 'top top',
        scrub: 'true',
    },
    visibility: 'visible',
    opacity: 1
})

tl.to(".text6", {
    scrollTrigger: {
        trigger: '.trigger6',
        start: 'bottom center',
        end: 'bottom top',
        scrub: 'true',
    },
    scale: 0
})

tl.to(".text6", {
    scrollTrigger: {
        trigger: '.trigger6',
        start: 'bottom top',
        scrub: 'true',
    },
    visibility: 'hidden'
})

tl.to(".recordsleeve", {
    scrollTrigger: {
        trigger: '.trigger7',
        start: 'top center',
        end: 'center top',
        scrub: 'true',
    },
    y: '-100vh'
})

tl.to(".recordsleeve", {
    scrollTrigger: {
        trigger: '.trigger7',
        start: 'center top',
        scrub: 'true',
    },
    visibility: 'hidden'
})

tl.to("#vinyl", {
    scrollTrigger: {
        trigger: ".trigger7",
        start: "center bottom",
        end: "bottom top", 
        scrub: true, 
    },
    rotation: 720
})

tl.to(".text7", {
    scrollTrigger: {
        trigger: ".trigger7",
        start: "center top",
        end: "bottom bottom", 
        scrub: true, 
    },
    opacity: 1,
    visibility: 'visible'

})

tl.to(".sticker", {
    scrollTrigger: {
        trigger: ".trigger7",
        start: "bottom center",
        end: "bottom top", 
        scrub: true, 
    },
    opacity: 1,
    visibility: 'visible'

})

tl.to(".poster", {
    scrollTrigger: {
        trigger: ".trigger7",
        start: "bottom center",
        end: "bottom top", 
        scrub: true, 
    },
    opacity: 1,
    visibility: 'visible'
})