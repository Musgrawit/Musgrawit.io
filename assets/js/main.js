function sendInfo(e){if(""==$("#name").val())return alert("Please enter your Name."),$("#name").focus(),!1;if(""==$("#email").val())return alert("Please enter a valid email."),$("#email").focus(),!1;if(""==$("#Phone").val())return alert("Please enter 10 digit Phone/Mobile Number. "),$("#Phone").focus(),!1;$(e).attr("disabled",!0),$(e).attr("value","Please wait ...");var o={};return o.name=$("#name").val(),o.emailid=$("#email").val(),o.phoneNo=$("#Phone").val(),o.message=$("#message").val(),$.ajax({type:"POST",data:JSON.stringify(o),url:"https://a8ok76592i.execute-api.ap-south-1.amazonaws.com/dev/MU/sendEmail",success:function(e){alert("Thanks you, for Contact us, Your response is important to us, We will get back you soon."),location.reload()},error:function(e){alert("Error while submitting response, Please contact admin"),location.reload()}}),!1}!function(e){"use strict";if(e(window).on("load",function(){e("#preloader").length&&e("#preloader").delay(100).fadeOut("slow",function(){e(this).remove()})}),e(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",function(o){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if(a.length){o.preventDefault();var t=a.offset().top;return e("#header").length&&(t-=e("#header").outerHeight(),e("#header").hasClass("header-scrolled")||(t+=20)),"#header"==e(this).attr("href")&&(t=0),e("html, body").animate({scrollTop:t},1500,"easeInOutExpo"),e(this).parents(".nav-menu, .mobile-nav").length&&(e(".nav-menu .active, .mobile-nav .active").removeClass("active"),e(this).closest("li").addClass("active")),e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").fadeOut()),!1}}}),e(".nav-menu").length){var o=e(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"});e("body").append(o),e("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),e("body").append('<div class="mobile-nav-overly"></div>'),e(document).on("click",".mobile-nav-toggle",function(o){e("body").toggleClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").toggle()}),e(document).on("click",".mobile-nav .drop-down > a",function(o){o.preventDefault(),e(this).next().slideToggle(300),e(this).parent().toggleClass("active")}),e(document).click(function(o){var a=e(".mobile-nav, .mobile-nav-toggle");a.is(o.target)||0!==a.has(o.target).length||e("body").hasClass("mobile-nav-active")&&(e("body").removeClass("mobile-nav-active"),e(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),e(".mobile-nav-overly").fadeOut())})}else e(".mobile-nav, .mobile-nav-toggle").length&&e(".mobile-nav, .mobile-nav-toggle").hide();var a=e("section"),t=e(".nav-menu, #mobile-nav");function n(){AOS.init({duration:1e3,once:!0})}e(window).on("scroll",function(){var o=e(this).scrollTop()+90;a.each(function(){var a=e(this).offset().top,n=a+e(this).outerHeight();o>=a&&o<=n&&(o<=n&&t.find("li").removeClass("active"),t.find('a[href="#'+e(this).attr("id")+'"]').parent("li").addClass("active")),o<300&&e(".nav-menu ul:first li:first").addClass("active")})}),e(window).scroll(function(){e(this).scrollTop()>100?e("#header").addClass("header-scrolled"):e("#header").removeClass("header-scrolled")}),e(window).scrollTop()>100&&e("#header").addClass("header-scrolled"),e(window).scroll(function(){e(this).scrollTop()>100?e(".back-to-top").fadeIn("slow"):e(".back-to-top").fadeOut("slow")}),e(".back-to-top").click(function(){return e("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1}),e(".skills-content").waypoint(function(){e(".progress .progress-bar").each(function(){e(this).css("width",e(this).attr("aria-valuenow")+"%")})},{offset:"80%"}),e(window).on("load",function(){var o=e(".portfolio-container").isotope({itemSelector:".portfolio-item"});e("#portfolio-flters li").on("click",function(){e("#portfolio-flters li").removeClass("filter-active"),e(this).addClass("filter-active"),o.isotope({filter:e(this).data("filter")}),n()}),e(document).ready(function(){e(".venobox").venobox({share:!1})})}),e(".portfolio-details-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),e(window).on("load",function(){n()})}(jQuery);