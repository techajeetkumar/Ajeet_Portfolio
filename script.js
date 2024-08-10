function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function (elem) {
        //create two spans
       
       let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
       // parent and chils both set their respective classes 
       
       spanParent.classList.add("parent");
       spanChild.classList.add("child");
       
        //span parent gets child and child gets elem details
        spanChild.innerHTML = elem.innerHTML;
       
        spanParent.appendChild(spanChild);
       
        //elem replaces its value with parent span
        elem.innerHTML= "";
        elem.appendChild(spanParent); 
       });

}
function valueSetters(){
    gsap.set("#nav a" , { y:"-100%" , opacity: 0});
    gsap.set("#home .parent .child", {y:"100%"});
    document.querySelectorAll("#Visual>g").forEach(function(e){
        var char = e.childNodes[1].childNodes[1];
        char.style.strokeDasharray = char.getTotalLength() + 'px';
        char.style.strokeDashoffset = char.getTotalLength() + 'px';
    })
    
}
function loaderAnimation(){
    var tl = gsap.timeline();

tl
.from("#loader .child span" , {
    x: 100,
    
    stagger: .2,
    duration: 1.4,
    ease:Power3.easeInOut
})
.to("#loader .parent .child" , {
    y: "-100%",
    duration: 1,
    ease:Circ.easeInOut
})
.to("#loader" , {
   height: 0,
    duration: 1,
    ease:Circ.easeInOut
})
.to("#green" , {
    height: "100%",
    top:0,
     duration: 1,
     delay:-.8,
     ease:Circ.easeInOut
 })
 .to("#green" , {
    height:"0%",
     duration: 1,
     delay:-.5,
     ease:Circ.easeInOut,
     onComplete: function(){
        animationHomePage();
     }
 })

}
function animationHomePage(){

    var tl = gsap.timeline();
    
    tl
    .to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: "Expo.easeInOut"
    })
    
    .to("#home .parent .child", {
        y: 0,
        // opacity: 1,
        duration: 1.5,
        stagger: .1,
        ease: "Expo.easeInOut",
        onComplete: function(){
            animateSvg();
        }
    })
    
    }
function animateSvg(){
   
    gsap.to("#Visual>g>g>path , #Visual>g>g>polyline", {
        strokeDasharray: 0,
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut
       
    })
    }
function changeBgColor(){
    const img = document.querySelector('.con img');
    const workDiv = document.getElementById('work');
 

    let timer;

    img.addEventListener('mouseenter', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          
            workDiv.style.backgroundColor = '#7fe5c4'; // Change to your desired background color
        }, 200); // 0.2 second delay
    });

    img.addEventListener('mouseleave', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            workDiv.style.backgroundColor = ''; // Reset the background color
        }, 100); // 0.2 second delay
    });
}

function NetflixPic(){
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.carousel');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const totalItems = document.querySelectorAll('.carousel-item').length;
        let currentIndex = 0;
        let intervalId = null;
        const intervalTime = 5000; // Change this value to adjust auto slide interval time (in milliseconds)
    
        function showSlide(index) {
            if (index < 0) {
                index = totalItems - 1;
            } else if (index >= totalItems) {
                index = 0;
            }
            carousel.style.transform = `translateX(${-index * 100}%)`;
            currentIndex = index;
        }
    
        function startAutoSlide() {
            intervalId = setInterval(function() {
                showSlide(currentIndex + 1);
            }, intervalTime);
        }
    
        function stopAutoSlide() {
            clearInterval(intervalId);
        }
    
        prevBtn.addEventListener('click', function() {
            stopAutoSlide();
            showSlide(currentIndex - 1);
        });
    
        nextBtn.addEventListener('click', function() {
            stopAutoSlide();
            showSlide(currentIndex + 1);
        });
    
        startAutoSlide(); // Start auto slide initially
    
        // Pause auto slide on mouseenter, resume on mouseleave
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    });
    
}


revealToSpan();
valueSetters();
loaderAnimation();
changeBgColor();
NetflixPic();
