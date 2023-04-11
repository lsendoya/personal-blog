import confetti from 'canvas-confetti';
const duration = 5 * 1000,
	animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

export function frame() {
	const timeLeft = animationEnd - Date.now(),
		ticks = Math.max(200, 500 * (timeLeft / duration));

	skew = Math.max(0.8, skew - 0.001);

	confetti({
		particleCount: 1,
		startVelocity: 0,
		ticks: ticks,
		origin: {
			x: Math.random(),
			y: Math.random() * skew - 0.2,
		},
		colors: ['#144272'],
		shapes: ['starts'],
		gravity: randomInRange(0.4, 0.6),
		scalar: randomInRange(0.4, 1),
		drift: randomInRange(-0.4, 0.4),
	});

	if (timeLeft > 0) {
		requestAnimationFrame(frame);
	}
}
