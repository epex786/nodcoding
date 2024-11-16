function navanimation() {
    var body = document.querySelector("body")

body.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
        gsap.to("nav",{
            duration:0.2,
            transform:'translateX(-50%) translateY(-180%)'
        })
        console.log("seedha scroll");
    }else
    {
        gsap.to("nav",{
            duration:0.2,
            transform:'translateX(-50%) translateY(0%)'
        })
        console.log("ulta scroll");
    }
})
}

navanimation()