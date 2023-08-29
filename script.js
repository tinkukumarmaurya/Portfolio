var searchBtn  = document.querySelector('#search-btn');
var searchBar  = document.querySelector('.search-bar-container');
var formBtn  = document.querySelector('#login-btn');
var loginForm  = document.querySelector('.login-form-container');
var formClose  = document.querySelector('#form-close');
var menu = document.querySelector('#menu-bar')
var navbar = document.querySelector('.navbar');
var videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');

})

 
searchBtn.addEventListener('click', () =>{
	searchBtn.classList.toggle('fa-times');
	searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () =>{
	loginForm.classList.add('active');
	
})

formClose.addEventListener('click', () =>{
	loginForm.classList.remove('active');
})

videoBtn.forEach(btn => {
	btn.addEventListener('click', ()=>{
		document.querySelector('.controls .active').classList.remove('active');
		btn.classList.add('active');
		var src = btn.getAttribute('data-src');
		document.querySelector('#video-slider').src = src;
	});
	
});  

 var swiper = new Swiper(".review-slider", {
 	spaceBetween: 20,
 	loop: true,
 	autoplay: {
 		delay: 2000,
 		disableOnInteraction:false,
 	},
 	breakpoints: {
 		450: {
 			slidePerView:1,
 		},

 		768: {
 			slidePerView:2,
 		},

 		991: {
 			slidePerView:2,
 		},


 		1200: {
 			slidePerView:3,
 		},
 	}
 });


 var swiper = new Swiper(".brand-slider", {
 	spaceBetween: 20,
 	loop: true,
 	autoplay: {
 		delay: 2000,
 		disableOnInteraction:false,
 	},
 		breakpoints: {
 		450: {
 			slidePerView:1,
 		},

 		768: {
 			slidePerView:2,
 		},

 		991: {
 			slidePerView:2,
 		},


 		1200: {
 			slidePerView:3,
 		},
 	}
 });
