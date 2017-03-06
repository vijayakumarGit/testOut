import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector:'[custdirect]'
})

export class CustDirect{
    divColor:string;
    @Input() color:string;
    @HostListener('mouseover') mouseover(){
        this.divColor = this.color
    }
    @HostListener('mouseleave') mouseleave(){
        this.divColor = this.color
    }
    @HostBinding('style.backgroundColor') get setColor(){
        return this.divColor
    }
    constructor(private ele:ElementRef, private rend:Renderer){
        //this.ele.nativeElement.style.backgroundColor = "red";
        //this.rend.setElementStyle(this.ele.nativeElement, "backgroundColor", "blue")
    }
    /*private changeColor(color:string){
        this.ele.nativeElement.style.backgroundColor = color;
    }*/
}
