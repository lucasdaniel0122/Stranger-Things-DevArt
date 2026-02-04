// GSAP - CDN
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

// SCROLL SUAVE

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",

    smooth: 1.5,
    normalizeScroll: true,
    effects: true
});

function animacaoPagina(){
 // ANIMAÇÕES HERO

 gsap.from(".hero", {
    opacity: 0,
    duration: 1
 });

 gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1
 });

 gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
 });

 // ANIMAÇÕES CARDS

 gsap.from(".card", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: .3,
    scrollTrigger: {
        trigger: ".cards",
        start: "0% 80%",
        end: "100% 70%",
        scrub: true
    }
 });

 gsap.from(".secaoAgradecimentos ul li", {
    opacity: 0,
    x: 60,
    filter: "blur(10px)",
    stagger: 0.25,
    scrollTrigger: {
        trigger: ".secaoAgradecimentos",
        start: "top 85%",
        end: "bottom 40%",
        scrub: 1.5
    }
 });

 // ANIMAÇÕES FOOTER

 gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end:"100% 100%"
    }
 });

 // SELECIONANDO TODOS OS ELEMENTOS .textoAnimado

 const textosAnimados = document.querySelectorAll(".textoAnimado");

 // ANIMANDO CADA ELEMENTO .textoAnimado
 textosAnimados.forEach(animacaoUnica => {
    const split = SplitText.create(textosAnimados, {
      type: "lines, words, chars",
      mask: "lines"
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textosAnimados
      }
    });
 });
}

// PRELOADER ANIMAÇÃO
const tl = gsap.timeline({
    onComplete(){
        animacaoPagina()
        gsap.to("#preloader", {
            opacity: 0,
            display: "none"
        })
    }
});

tl.to("#preloader path", {
    duration: 2,
    strokeDashoffset: 0
});

tl.to("#preloader path", {
    fill: "rgba(168, 19, 19)",
    duration: 1,
    strokeDashoffset: 0
});