window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav'); // or use your navbar selector
  
  if (window.scrollY > 60) {
    navbar.style.backgroundColor = 'white';
  } else {
    navbar.style.backgroundColor = ''; // reset to original
  }
});

// Initialize AOS
 AOS.init({
    duration: 900,
    once: true,
    easing: "ease-in-out"
  });

  // Feature Tabs
  const tabs = document.querySelectorAll(".features-tabs button");
const items = document.querySelectorAll(".feature-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;

    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Pricing Toggle
const pricingBtns = document.querySelectorAll('.pricing-toggle button');
const amounts = document.querySelectorAll('.amount');
const period = document.querySelectorAll('.period');

pricingBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    pricingBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const plan = btn.dataset.plan;

    amounts.forEach(amount => {
      amount.textContent = amount.dataset[plan];
    });

    period.forEach(p => {
      p.textContent = plan === 'monthly' ? '/mo' : '/yr';
    });

  });
});

// Testimonial Swiper
 new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });



  let loginPage = document.getElementById("login");
  if(loginPage){
    const toggle = document.getElementById("togglePassword");
    const password = document.getElementById("password");

    toggle.addEventListener("click", () => {
      const type =
        password.getAttribute("type") === "password"
          ? "text"
          : "password";
      password.setAttribute("type", type);

      toggle.classList.toggle("fa-eye");
      toggle.classList.toggle("fa-eye-slash");
    });
    }


  let forgetPasswordPage = document.getElementById("forgetpassword");
if(forgetPasswordPage){
 function fpShowSuccess() {

  showStep('fp-success');

  setTimeout(() => {
    showStep('fp-otp');
    startFpTimer();
  }, 2000);
}

function showStep(id) {
  document.querySelectorAll('.fp-step').forEach(step => {
    step.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}

/* OTP auto move */
document.querySelectorAll('.fp-otp input').forEach((input, i, arr) => {
  input.addEventListener('input', () => {
    if (input.value && arr[i + 1]) arr[i + 1].focus();
  });
});

/* Countdown */
let time = 30;
function startFpTimer() {
  const el = document.getElementById('fp-timer');
  time = 30;

  const timer = setInterval(() => {
    time--;
    el.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      el.parentElement.innerHTML =
        '<a onclick="location.reload()">Resend Code</a>';
    }
  }, 1000);
}
}