import {Directive, Renderer2, ElementRef, NgModule} from "@angular/core";


@Directive({
    selector: '[rdk-draggable]',
    host:{
        '[attr.draggable]': 'true',
        '(dragstart)': '_onDragstart($event)',
        //'(draggable)': '_onDrag($event)',
        '(dragend)': '_onDragend($event)'
    }
})
export class RdkDraggable{
    private _ox: number;
    private _oy: number;
    private _cx: number;
    private _cy: number;

    constructor(private _renderer: Renderer2, private _elementRef: ElementRef){
    }

    _onDragstart(event){
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text', 'rdk draggable');
        this._cx = event.clientX;
        this._cy = event.clientY;

    }

    // _onDrag(event){
    //     event.dataTransfer.effectAllowed = "move";
    // }

    _onDragend(event){

        this._ox = event.clientX - this._cx + this._elementRef.nativeElement.offsetLeft;
        this._oy = event.clientY - this._cy + this._elementRef.nativeElement.offsetTop;
        this._renderer.setStyle(this._elementRef.nativeElement, 'left', this._ox + 'px');
        this._renderer.setStyle(this._elementRef.nativeElement, 'top', this._oy + 'px');
    }
}


@NgModule({
    imports: [],
    declarations: [RdkDraggable],
    exports: [RdkDraggable]
})
export class RdkDraggableModule {
}

