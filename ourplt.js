gsap.from(".ltxt>h1:nth-child(1)",{
    y:"90%",
    delay:0.5

})
gsap.from(".ltxt>h1:nth-child(2)",{
    y:"90%",
    delay:0.8


})
gsap.from("#first>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#first",
        // markers:true,
        start:"top 70%",
        end:"bottom 50%",
        scrub:4
    },
    y:"100",
})