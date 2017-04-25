/*
 * Custom scripts
 */
(function ($) {




    $('.header-slider').slick({
        infinite: true,
        dots: false,
    });
    $('.story__slider').slick({
        infinite: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false
    });
    $('.feedback__slider').slick({
        infinite: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false
    });

})(jQuery);


window.addEventListener( "DOMContentLoaded", function() {
    new Script();

});


function Script() {
    new Form();
    new Page();
    new InitMap();
};

function Page() {
    var boby = document.body;
        bobyHome = boby.classList.contains("home-blog");
        bobyPage = boby.classList.contains("page-blog");
        if(bobyHome) {
            new HomeBlog();
        } else if(bobyPage) {
           new PageBlog();
            window.addEventListener("resize", function() {
                new ResizeWindiw();
            });
        } else{
            return
        }
};

function HomeBlog() {
    new MobiMenu();
    new HeaderSearch();
    //new Skills();
    new TabsHome();
    new Social();
}

function PageBlog() {
    new Burger();
    new Numbers();
    new Slider();
    new TabsPage();

}

function ResizeWindiw() {
    new SliderResize();
}

function MobiMenu() {
    this.nav = document.querySelector('.nav-home');
    this.mobiBox =  document.querySelector('.mobi__list');
    this.mobiBox.addEventListener("click", this.mobiHome.bind(this));
}

MobiMenu.prototype.mobiHome = function (e) {
  this.targetClick = e && e.target || e.srcElement;

  if(this.targetClick.tagName!= 'SPAN') return;

  this.atter = this.targetClick.getAttribute('data-mobi');

  this.mobiMenu = document.querySelector('.mobi-menu');
  this.headerNav = document.querySelector('.header-nav');
  this.menuBlockHome();

  if(this.atter =='1') {
    this.menuOpen();
  } else {
    this.menuClose();
  }
};



MobiMenu.prototype.menuBlockHome = function () {
    var position = 32,
        pos = position * this.atter;
    this.mobiBox.style.cssText += "transform: translateX(-"+pos+"px);";

};

MobiMenu.prototype.menuOpen = function () {
  var clone = this.headerNav.cloneNode(true);
  this.mobiMenu.insertAdjacentElement('afterBegin', clone);
  this.navHome = this.mobiMenu.querySelector('.header-nav');
  this.navHome.classList.remove('header-nav_mod-visibility-none');
  this.mobiMenu.classList.add('mobi-menu-open');
  this.mobiNavHome = this.mobiMenu.querySelector('.mobi__nav-home');
  this.mobiNavHome.classList.add('mobi__nav-home_open');
};


MobiMenu.prototype.menuClose = function () {
  this.mobiMenu.classList.remove('mobi-menu-open');
  this.mobiNavHome.classList.remove('mobi__nav-home_open');
  this.mobiMenu.addEventListener("transitionend", this.remChild.bind(this));
};

MobiMenu.prototype.remChild = function () {
  if(this.mobiMenu.classList.contains("mobi-menu-open")) {
    return
  }
    this.mobiMenu.removeChild(this.navHome);

this.mobiMenu.removeEventListener("transitionend", this.remChild.bind(this));
};


function HeaderSearch() {
    this.clickElemSearch = document.querySelector('.header-nav__elem_search-mod');
    this.clickElemSearch.addEventListener("click", this.visable.bind(this));
    this.searchBlockInput = document.querySelector('.search-block__input');
    this.searchBlockInput.addEventListener("blur", this.imputSubmit.bind(this));
}

HeaderSearch.prototype.visable = function () {
    this.HeaderSearchBlock = document.querySelector('.header-search');
    this.HeaderSearchBlock.classList.remove("header-search_display-none");
    this.HeaderSearchBlock.classList.add("header-search_true");
    this.headerSearchTrue = document.querySelector('.header-search_true');
    this.headerSearchTrue.addEventListener("animationend", this.animationTrue.bind(this));
};

HeaderSearch.prototype.animationTrue = function () {
    this.HeaderSearchBlock.classList.remove("header-search_display-none");
    this.HeaderSearchBlock.classList.remove("header-search_true");
    this.HeaderSearchBlock.classList.add("header-search_display-block");
};

HeaderSearch.prototype.imputSubmit = function () {
    this.HeaderSearchBlock.classList.remove("header-search_display-block");
    this.HeaderSearchBlock.classList.add("header-search_false");
    this.headerSearchFalse = document.querySelector('.header-search_false');
    this.headerSearchFalse.addEventListener("animationend", this.animationFalse.bind(this));
};

HeaderSearch.prototype.animationFalse = function () {
    this.HeaderSearchBlock.classList.remove("header-search_display-block");
    this.HeaderSearchBlock.classList.remove("header-search_false");
    this.HeaderSearchBlock.classList.add("header-search_display-none");
};

/*
function Skills() {
    this.skillsBlock = document.querySelector('.skills');
    this.skillsElem = this.skillsBlock.querySelectorAll('.skills-list');
    this.skillsElem12 = this.skillsBlock.querySelector('.elem-progress_photoshop').attributes;
    console.log(this.skillsElem12);
   // this.lineProgress();
}

Skills.prototype.lineProgress = function () {

    for(var i = 0; i <  this.skillsElem.length; i++) {
        this.skillsName = this.skillsElem[i].querySelector('.elem-name').innerHTML;
        this.interest = this.skillsElem[i].querySelector('[data-name="'+this.skillsName+'"]').innerHTML;
        this.number  = parseInt(this.interest);
        this.progressLine = this.skillsElem[i].querySelector('.progress-line');
        if(this.number > '100') {
            this.progressLine.style.cssText += "width: 100%;";
        } else {
            this.progressLine.style.cssText += "width: "+this.number+"%;";
        }
    }
};
*/

/*---------- Tabs ------------*/


function TabsHome() {
    this.link =  document.querySelectorAll('.tabs-elem__link');
    this.tabsNav =  document.querySelector('.work__tabs-nav');
    this.tabsNav.addEventListener("click", this.addEventClick.bind(this));
    this.getLinkHref();
}

TabsHome.prototype.getLinkHref= function () {
    for(var q=0;q<this.link.length;q++) {
        this.link[q].addEventListener("click", function (e) {
            event.preventDefault();
        });
        this.attr = this.link[q].getAttribute("href");
        this.tabs =  document.querySelector('.tabs-home');
        this.elemTabs =  this.tabs.querySelector(this.attr);
        this.elemTabs.style.cssText += "display: none;";
    }
    this.tabsLinkActive =  document.querySelector('.tabs-link_active');
    this.linkActiveAttr =  this.tabsLinkActive.getAttribute("href");
    this.elemTabsActive =  document.querySelector(this.linkActiveAttr);
    this.elemTabsActive.style.cssText += "display: block;";

};


TabsHome.prototype.addEventClick = function (e) {
    this.targetLInk = e && e.target || e.srcElement;

    if(this.targetLInk.tagName != 'A') return;

    for(var r=0;r<this.link.length;r++) {
        this.link[r].classList.remove("tabs-link_active");
    }
    this.targetLInk.classList.add("tabs-link_active");
    this.getLinkHref();
};

function Social() {
    this.linkFooter =  document.querySelector('.footer__social');

    this.linkFooter.addEventListener("click", this.addActive.bind(this));
}



Social.prototype.addActive = function (e) {
    this.linkItem = this.linkFooter.querySelectorAll('.footer-elem__link');
    this.targetLinkFooter = e && e.target || e.srcElement;

    if(this.targetLinkFooter.tagName != 'A') return;

    for(var z=0;z<this.linkItem.length;z++) {
        this.linkItem[z].classList.remove("footer__link_active");
    }

    this.targetLinkFooter.classList.add("footer__link_active");
};



function Burger() {
    this.burger = document.querySelector('.burger-page');
    this.burgerStyle();
    this.burger.addEventListener('click', this.addEvent.bind(this));
}

Burger.prototype.burgerStyle = function () {
    this.burgerWidth = parseInt(getComputedStyle(this.burger).width);
    this.childBurger = this.burger.children.length;
    this.burger.style.cssText += "width:"+(this.burgerWidth * this.childBurger + 5)+"px;"

};


Burger.prototype.addEvent = function (e) {
    this.targetIcon = e && e.target;

    if(this.targetIcon.tagName != 'SPAN') return;
    this.dataAttr = this.targetIcon.getAttribute('data-num');
    this.burger.style.cssText +="transform: translateX("+this.dataAttr+"px);"
    this.burgerItem = this.burger.querySelector('.burger__item');
    this.menuBlog = this.burgerItem.classList.contains("icon-menu");
    this.cancelBlog = this.burgerItem.classList.contains("icon-cancel");

    if(this.dataAttr == '0') {
      this.menuHide();
    }else {
      this.menuShow();
    }
};



Burger.prototype.menuShow = function () {
  this.mobiNavBlog = document.querySelector('.mobi-nav-blog');
  this.mobiNavBlog.classList.add('mobi-nav-blog_open');
};

Burger.prototype.menuHide = function () {
    this.mobiNavBlog.classList.remove('mobi-nav-blog_open');
};



window.addEventListener("scroll", function() {
    this.header = document.querySelector('.header');
    this.section = document.querySelector('.section');
    this.headerData = this.header.getAttribute('data-speed');
    this.sectionData = this.section.getAttribute('data-speed');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    position = scrollTop / this.headerData;
    this.header.style.cssText += "background-position: center "+position+"px;";
    this.section.style.cssText += "background-position: center "+position+"px;";
});



function SliderResize() {
    this.sliderResize = document.querySelector('.slider');
    this.sliderElemResize =  this.sliderResize.querySelector('.slider__elem');
    this.traks =  this.sliderResize.querySelector('.track-slider');
    this.getStyle();
    this.updateTransform();
}

SliderResize.prototype.getStyle = function () {
    this.heightResize = this.sliderElemResize.clientHeight;
    this.sliderResize.style.cssText += "height:"+this.heightResize+"px;";
};

SliderResize.prototype.updateTransform = function () {
    var sliderDotsResize = this.sliderResize.querySelector('.slider__dots');
        dotsItemResize = sliderDotsResize.querySelector('.js-active');
       dataAttr = dotsItemResize.getAttribute('data-slider');

        numberUpdate = -this.heightResize * dataAttr;

    this.traks.style.cssText += "transform: translateY("+numberUpdate+"px);transition: transform ease 0ms;";
};
function Slider() {
    this.slider = document.querySelector('.slider');
    this.addNewsElemet();
    this.cloneSliderElem();
}

Slider.prototype.addNewsElemet = function () {
    var newsElem = document.createElement('div');
    newsElem.setAttribute("class", "track-slider");
    this.slider.appendChild(newsElem);
    this.trackSlider = this.slider.querySelector('.track-slider');

};

Slider.prototype.cloneSliderElem = function () {
    this.sliderElem = this.slider.querySelectorAll('.slider__elem');
    this.addStyle();
    this.addPattern();
    for(var q=0;q<this.sliderElem.length;q++) {
        this.clone = this.sliderElem[q].cloneNode(true);
        this.trackSlider.appendChild(this.clone);
        this.slider.removeChild(this.sliderElem[q]);
    }
};

Slider.prototype.addStyle = function () {
    this.height = parseInt(getComputedStyle(this.sliderElem[0]).height);
    h = getComputedStyle(this.sliderElem[0]).height;
    w = getComputedStyle(this.sliderElem[0]).width;
    nw =this.sliderElem[0].clientHeight;
    this.slider.style.cssText += "height:"+this.height+"px;";
};

Slider.prototype.addPattern = function () {
    var str = "";
    for(var d=0;d<this.sliderElem.length;d++){
        str += this.childPattern(d);
    }
    var dots 		= this.parentPattern(str);
    this.slider.insertAdjacentHTML("beforeEnd", dots);
    this.addEventDots = this.slider.querySelector('.slider__dots');
    this.addEventDots.addEventListener("click", this.eventDots.bind(this));
    this.addClassActive();
};

Slider.prototype.parentPattern = function (str) {
        return  '<ul class="slider__dots">'+str+'</ul>'
};

Slider.prototype.childPattern = function (d) {
        return      '<li class="dots__item" data-slider='+d+'>'+
                        '<div class="hexagon">'+
                            '<div class="hexagon__elem hexagon__elem_mod-1"></div>'+
                            '<div class="hexagon__elem hexagon__elem_mod-2"></div>'+
                        '</div>'+
                    '</li>'
};

Slider.prototype.eventDots = function (e) {
    var targetDots      = e && e.target || e.srcElement;
        parentTArgetOne = targetDots.parentElement;
        parentTArgetTwo = parentTArgetOne.parentElement;
    this.parent          = (targetDots.tagName == 'LI') ?
                           targetDots:
                          (parentTArgetOne.tagName == 'LI') ?
                           parentTArgetOne:
                          (parentTArgetTwo.tagName == 'LI') ? parentTArgetTwo:"";

    if(this.parent == "") return;



    this.dataAttr = this.parent.getAttribute('data-slider');
    this.offset();
    this.changeClass();
};

Slider.prototype.offset = function () {
    this.slideres = this.slider.clientHeight;
    var   numbers = -this.slideres * this.dataAttr;
    this.trackSlider.style.cssText += "transform: translateY("+numbers+"px);transition: transform ease 700ms;";
};

Slider.prototype.addClassActive = function () {
    var sliderDots = this.slider.querySelector('.slider__dots');
        dotsItem = sliderDots.firstChild;
        hexagon = dotsItem.querySelector('.hexagon');
        dotsItem.classList.add("js-active");
        hexagon.classList.add('hexagon_mod-bg-active');
};

Slider.prototype.changeClass = function () {
    var dotsItem = this.slider.querySelectorAll('.dots__item');
    for(var s=0;s<dotsItem.length;s++){
        var chd = dotsItem[s].querySelector('.hexagon');
            chh =dotsItem[s].classList.remove('js-active');
        chd.classList.remove('hexagon_mod-bg-active');
    }
    var addClassClick = this.parent.querySelector('.hexagon');
    addClassClick.classList.add('hexagon_mod-bg-active');
    this.parent.classList.add("js-active");
};



function TabsPage() {
    this.categories = document.querySelector('.sidebar-tabs');
    this.list = this.categories.querySelector('.tabs-list');
    this.listElem = this.categories.querySelectorAll('.tabs-list-item > a');
    this.listElem[0].classList.add('btn-tabs-active');
    this.addStyle();
}


TabsPage.prototype.addStyle = function (e) {
    for(var i=0;i<this.listElem.length;i++) {
        this.clickEvent = this.listElem[i].addEventListener("click", this.addEvent.bind(this));
        this.href = this.listElem[i].getAttribute('href');
        this.id =  this.categories.querySelector(this.href);
        this.id.style.cssText += "display:none;"
    }
    this.tabsActive = this.categories.querySelector('.btn-tabs-active');
    this.idActive =  this.tabsActive.getAttribute('href');
    this.visibility =  this.categories.querySelector(this.idActive);
    this.visibility.style.cssText += "display:block;"
};

TabsPage.prototype.addEvent= function (e) {
    this.targetLInk = e && e.target;
    event.preventDefault();
    if(this.targetLInk.tagName != 'A') return;
    for(var w=0;w<this.listElem.length;w++) {
        this.listElem[w].classList.remove('btn-tabs-active');
        this.click =  this.listElem[w].getAttribute('href');
        this.vis =  this.categories.querySelector(this.click);
        this.vis.style.cssText += "display:none;"
    }

    this.linkClick =  this.targetLInk.getAttribute('href');
    this.visibilityClick =  this.categories.querySelector(this.linkClick);
    this.visibilityClick.style.cssText += "display:block;";
    this.targetLInk.classList.add('btn-tabs-active');
};

function InitMap() {
    var centerLatLng = new google.maps.LatLng(37.782105, -122.400752);

    var mapOptions = {
        center: centerLatLng,
        zoom: 18,
        scrollwheel: false,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":60}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var marker = new google.maps.Marker({
        position: centerLatLng,
        map: map

    });

    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
}


function Numbers() {
    this.numberBox = document.querySelector('.content__numbers');
    this.numbersElem = this.numberBox.querySelectorAll('.js-number-btn');
    this.addEvent();
    this.jsBtnPrev = this.numberBox.querySelector('.js-btn-prev');
    this.jsBtnPrev.addEventListener("click", this.activePrev.bind(this));
    this.jsBtnNext = this.numberBox.querySelector('.js-btn-next');
    this.jsBtnNext.addEventListener("click", this.activeNext.bind(this));
}

Numbers.prototype.addEvent = function () {
    for(var c=0;c<this.numbersElem.length;c++) {
        this.numbersElem[c].addEventListener("click", this.activeElem.bind(this));
    }
};

Numbers.prototype.removeActive = function () {
    for(var e=0;e<this.numbersElem.length;e++) {
        this.numbersElem[e].classList.remove('number-active');
    }
};

Numbers.prototype.activeElem = function (e) {
    var targetElem = e && e.target;
    if(targetElem.tagName!= 'LI') return;
    this.removeActive();
    targetElem.classList.add('number-active');
};

Numbers.prototype.activePrev = function () {
  var  activePrevElem = this.numberBox.querySelector('.number-active');
       prev = activePrevElem.previousElementSibling.classList.contains("js-number-btn");
        if(prev) {
            activePrevElem.previousElementSibling.classList.add('number-active');
            activePrevElem.classList.remove('number-active');
        }
            return
};

Numbers.prototype.activeNext = function () {
    var  activeNextElem = this.numberBox.querySelector('.number-active');
         next = activeNextElem.nextElementSibling.classList.contains("js-number-btn");
    if(next) {
        activeNextElem.nextElementSibling.classList.add('number-active');
        activeNextElem.classList.remove('number-active');
    }
    return
};


function Form() {
    this.formBlock = document.querySelector('.box-form__form');
    this.fieldInput = this.formBlock.elements;
    this.requestSubmit = document.querySelector('.request-submit');
    this.requestSubmit.addEventListener("click", this.sendForm.bind(this));
    this.AddInput();
}

Form.prototype.AddInput = function () {
    for(var p=0;p<this.fieldInput.length;p++){
        this.fieldInput[p].addEventListener("input", this.activForm.bind(this));
    }

};

Form.prototype.validation = function (elem) {
    var str = elem.value;
        this.result = testing.test(str);
};
Form.prototype.patern = function (ret) {
    var regularExpressions = {
        'name':'([a-zA-Z]+)$',
        'email': '[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})',
        'subject':'([a-zA-Z]+)$',
        'time':'([a-zA-Z]+)$',
        'message':'([a-zA-Z]+)$'
    };

    patt =   regularExpressions[ret.name];
    testing = new RegExp(patt);

    return testing;
};

Form.prototype.activForm = function (e) {
    var targetElem = e && e.target;
    targetElem.classList.add('input__invalid');
        this.patern(targetElem);
        this.validation(targetElem, patt);

        if(this.result){
            targetElem.classList.add('input__validity');
            targetElem.classList.remove('input__invalid');
        } else {
            targetElem.classList.remove('input__validity');
            targetElem.classList.add('input__invalid');
        }
};

Form.prototype.sendForm = function (event) {

    this.elemForm = this.formBlock.elements;
    this.elemLength = this.elemForm.length-1;
    this.containsClass();
    invalidArray = this.invalidContent.split(' ');
    invalidNumber = invalidArray.length -1;
    if(invalidNumber != this.elemLength) {
        alert('not all fields are filled in correctly');
        event.preventDefault();
        return false;
        }
};

Form.prototype.containsClass = function () {
    this.invalidContent = '';
    for(var t=0;t<this.elemLength;t++) {
        this.invalid = this.elemForm[t].classList.contains("input__validity");
        if(this.invalid) {
            this.invalidContent += this.elemForm[t].getAttribute('id') + ' ';
        }
    }
};
