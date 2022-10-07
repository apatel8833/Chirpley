gsap.from("#first>.ltxt>h1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#first",
        // markers:true,
        start:"top 0%",
        end:"bottom 50%",
        scrub:true
    },
    y:"100"


})
gsap.to("#first>#eye",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#first",
        // markers:true,
        start:"top 0%",
        end:"bottom 50%",
        scrub:true
    },
    y:"100"


})

gsap.from("#sec>.txt2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 40%",
        end:"bottom 50%",
        scrub:3
    },
    y:"60"


})
gsap.from("#third>.text",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#third",
        // markers:true,
        start:"top 40%",
        end:"bottom 50%",
        scrub:true
    },
    y:"130"


})

gsap.from("#fifth",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        // markers:true,
        start:"top 40%",
        end:"bottom 50%",
        scrub:4
    },
    y:"200"


})