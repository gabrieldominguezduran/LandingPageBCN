TweenMax.from('.logo', 1.6, {
	delay: 6.5,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});

TweenMax.from('.title', 1.6, {
	delay: 6.5,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});

TweenMax.from('.heading', 1.6, {
	delay: 6.6,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});

TweenMax.from('.container', 1.6, {
	delay: 2,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});
TweenMax.from('.footer', 1.6, {
	delay: 2,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});

TweenMax.from('.desc', 1.6, {
	delay: 6.7,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});

TweenMax.from('.watch', 1.6, {
	delay: 6.9,
	opacity: 0,
	y: 30,
	rotation: 90,
	ease: Expo.easeInOut
});

TweenMax.staggerFrom(
	'.media ul li',
	2,
	{
		delay: 7,
		opacity: 0,
		y: 40,
		ease: Expo.easeInOut
	},
	0.2
);
