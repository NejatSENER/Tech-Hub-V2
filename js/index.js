


// E-MAİL BOT FOR ABOUT PAGE



function SendMail(){

  event.preventDefault();

  var params = {
    from_name : document.getElementById("name").value,
    number : document.getElementById("number").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  
  emailjs.send("service_9xy06on", "template_owk7yft", params).then(function(response){
    alert("Gönderim başarılı.\nBizimle iletişime geçtiğiniz için teşekkür ederiz :)");
  })
}

function ClearAreas() {
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("message").value = "";
}



// CARD SLIDER FOR PROJECTS SECTION 


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  }
});



// BACK TO TOP BUTTON



let calcScrollValue = () => {

  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#550d16 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



// photo animations



var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function OpenFullImg(pic){
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function CloseFullImg(){
  fullImgBox.style.display = "none";
}