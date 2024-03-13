var ty = gsap.timeline()

ty.from(".nav img, .nav-part2 h4, .nav .nav-part3, .nav button",{
    y:-100,
    duration:0.4,
    delay:0.2,
    opacity:0,
    stagger:0.5
})
ty.from(".main h1",{
    y:100,
    duration:2,
    opacity:0,
    stagger:0.3
})
ty.from(".main>img",{
    scale:0,
    opacity:0,
    stagger:0.3,
    duration:0.6
})
ty.from("h5",{
    scale:0,
    opacity:0,
})
ty.from("h5",{
    y:-30,
    repeat:-1,
    duration:2,
    yoyo:true
})