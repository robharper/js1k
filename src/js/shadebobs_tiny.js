// Old skool shadebobs effect from Future Crew's Unreal
// ...in two tweets
c = Math.cos;
s = Math.sin;
l = a = 0;
z = 0.06;
with(document.body.children[0].getContext('2d')){
	globalCompositeOperation = 'lighter';
	fillStyle = '#05050A';
	scale(320, 240);
	setInterval( function(){	
		for(clearRect(0,0,2,2); l<a; l+=0.01) {
			fillRect(
				x = -c(l)/2 - c(l/4)/2 + 1,
				y = s(0.9*l) * (c(0.8*l + 1) + 2) / 4 + 1,
				z,
				z
			);
			fillRect(
				2 - x,
				2 - y,
				z,
				z
			);
		}
		a += 0.5;
		l -= 22;	
	}, 33);
}
	