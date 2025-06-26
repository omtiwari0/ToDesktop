const toggleBtn = document.getElementById("toggleBtn");
const mobileMenu = document.getElementById("mobile-menu")
const hamclose = document.getElementById("ham");

toggleBtn.addEventListener('click', () => {
    const menuopen = mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle("overflow-hidden", !menuopen);
    hamclose.classList.replace(
        menuopen ? "fa-xmark" : "fa-bars",
        menuopen ? "fa-bars" : "fa-xmark"
    )
})

// Scroll 

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.35);


// plans change \
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const essential = document.getElementById("essential")
const proffesional = document.getElementById("proffesional");
const slider = document.getElementById("slider");

monthly.addEventListener("click", () => {
    essential.innerText = "$125";
    proffesional.innerText = "$300"
    slider.style.transform = "translateX(0%)";

})
yearly.addEventListener("click", () => {
    slider.style.transform = "translateX(97%)";
    essential.innerText = "$100";
    proffesional.innerText = "$240"
})


const blocks = document.querySelectorAll(".faq");
const data = document.querySelectorAll("#data");

blocks.forEach((block) => {
    block.addEventListener("click", () => {
        const icon = block.querySelector("i");
        const content = block.querySelector(".faq-content");
        content.classList.toggle("hidden");
        icon.classList.toggle("rotate-0");
    })
}); 