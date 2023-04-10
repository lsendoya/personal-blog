import { animate } from 'motion';

export const emotion = (element, p1, p2, p3, p4, p5, p6, p7, p8) => {
    animate(
        element, {
            transform: [
                `translateX(${p1}px)`,
                `translateY(${p2}px)`,
                `translateX(${p3}px)`,
                `translateY(${p4}px)`,
                `translateX(${p5}px)`,
                `translateY(${p6}px)`,
                `translateX(${p7}px)`,
                `translateY(${p8}px)`,
                'none',
                'translateY(0px)',
            ],
        }, { easing: ['ease-out'], duration: 10 }
    );
};