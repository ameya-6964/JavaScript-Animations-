const tl = gsap.timeline({defaults:{ duration: 0.75, ease: "Power3.easeOut"}});
// For Images And Span Elements
tl.fromTo('.hero-image', {scale:1.3,borderRadius:"0rem"},
{ scale:1,delay:0.35,borderRadius:"2rem",duration:2.5,ease:"elastic.out(1.5,1)", }
);

tl.fromTo('.cta1',{x:110,opacity:0},{x:0,opacity:1},"<20%");
tl.fromTo('.cta3',{x:-110,opacity:0},{x:0,opacity:1},"<20%");
tl.fromTo('.cta2',{y:110,opacity:0},{y:0,opacity:1},"<20%");
tl.fromTo('.cta4',{x:110,opacity:0},{x:0,opacity:1},"<20%");
tl.fromTo('.cta6',{x:-110,opacity:0},{x:0,opacity:1},"<20%");
tl.fromTo('.cta5',{y:110,opacity:0},{y:0,opacity:1},"<20%");
tl.fromTo('.cta-btn',{y:20,opacity:0},{y:0,opacity:1},"<");

const logo=document.querySelector(".logo");
const letters= logo.textContent.split("");
logo.textContent="";
letters.forEach((letter) =>{
    logo.innerHTML +='<span class="letter">' + letter + '</span>';
})

// For Text Animation
gsap.set(".letter",{display:"inline-block"});
 gsap.fromTo(".letter",{y:30}, {y:0,delay:2,stagger:0.05})
