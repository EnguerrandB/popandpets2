/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Fonts - Google Fonts
*/

window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
var particles = Particles.init({
  selector: ".background",
  color: ["#c0ffbf", "#ecd2d9", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#c0ffbf", "#ecd2d9", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

class NavigationPage {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
    $(".nav-tab").click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop =
      $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = $(window).scrollTop();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition() {
    const headerHeight = 75;
    if ($(window).scrollTop() > headerHeight) {
      $(".header").addClass("header--scrolled");
    } else {
      $(".header").removeClass("header--scrolled");
    }
    let offset =
      $(".nav").offset().top +
      $(".nav").height() -
      this.tabContainerHeight -
      headerHeight;
    if (
      $(window).scrollTop() > this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".header").addClass("et-header--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      $(".nav-container").addClass("nav-container--top-second");
    } else if (
      $(window).scrollTop() < this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".header").removeClass("et-header--move-up");
      // $(".nav-container").removeClass("nav-container--top-second");
      $(".et-hero-tabs-container").addClass(
        "et-hero-tabs-container--top-first"
      );
    } else {
      $(".header").removeClass("header--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      // $(".nav-container").removeClass("nav-container--top-second");
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".nav-tab").each(function () {
      let id = $(this).attr("href");
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom =
        $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if (
        $(window).scrollTop() > offsetTop &&
        $(window).scrollTop() < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    $(".nav-tab-slider").css("width", width);
    $(".nav-tab-slider").css("left", left);
  }
}

new NavigationPage();

/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Fonts - Google Fonts
*/

//test
const header = document.querySelector('header')
const sidebar = document.querySelector('.sidebar')
const sidebarOpen = document.querySelector('.header__toggle')
const sidebarClose = document.querySelector('.sidebar__close')
const bodyOverlay = document.querySelector('#body-overlay')
const btnToTop = document.querySelector('.btn-to-top')

btnToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
        btnToTop.classList.add('active')
    } else {
        header.classList.remove('shrink')
        btnToTop.classList.remove('active')
    }
})

sidebarOpen.addEventListener('click', () => {
    sidebar.classList.add('active')
    bodyOverlay.classList.add('active')
})

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active')
    bodyOverlay.classList.remove('active')
})

const categorySwiper = new Swiper('.category-slider-wrapper', {
    slidesPerView: 1,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: true
    // },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
})

const productSwiper = new Swiper('.product-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
})

const brandsSwiper = new Swiper('.brand-slider', {
    slidesPerView: 5,
    spaceBetween: 60,
    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false
    // },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 5
        },
        768: {
            slidesPerView: 5
        },
        1024: {
            slidesPerView: 6
        }
    }
})