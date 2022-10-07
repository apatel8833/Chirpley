gsap.to(".video2",{
    delay:5,
    display:"block"
})
gsap.to(".ltxt",{
    delay:4,
    display:"flex"
})
gsap.from(".ltxt>h1:nth-child(1)",{
    y:"100%",
    delay:4.2
})
gsap.from(".ltxt>h1:nth-child(2)",{
    y:"100%",
    delay:4.4
})


gsap.to(".smtxt",{
    delay:5,
    display:"flex"
})
gsap.to("#sec>.img1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:true
    },
    transform:"rotate(0deg) translateY(-80px)"
})
gsap.to("#sec>.img2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:4
    },
    transform:"rotate(0deg) translateY(-120px) translateX(-100px)"
})
gsap.to("#sec>.img3",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:4
    }, 
    transform:"rotate(0deg) translateY(-180px)"
})
gsap.to(".video3",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#third",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:true
    },
    transform:"scale(2)"
})

gsap.from("#fourth>.text",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:4
    },
    y:"150px"
   
})
gsap.from("#fourth>.text2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:4
    },
    y:"150px"
   
})
gsap.to("#fifth>.buble",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:4
    },
    y:"-100px"
   
})
gsap.to("#fifth>.img",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:4
    },
    y:"-100px"
   
})