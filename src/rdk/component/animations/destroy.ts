import {trigger, style, transition, animate} from '@angular/animations';

export const AnimationDestroy = trigger('AnimationDestroy', [
    transition('* => inactive', [
        animate('.3s cubic-bezier(.78,.14,.15,.86)', style({
            transform: 'scale(0, 0)',
            display: 'none',
            opacity: 0
        }))
    ])
]);
