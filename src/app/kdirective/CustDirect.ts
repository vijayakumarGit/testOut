import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[custdirect]'
})

export class CustDirect{

    @HostListener('moveover') mouseover(){
        this.changeColor("red")
    }
    @HostListener('moveleave') mouseleave(){
        this.changeColor("blue")
    }

    constructor(private ele:ElementRef, private rend:Renderer){
        //this.ele.nativeElement.style.backgroundColor = "red";
        //this.rend.setElementStyle(this.ele.nativeElement, "backgroundColor", "blue")
    }
    private changeColor(color:string){
        console.log("SDFHG")
        this.ele.nativeElement.style.backgroundColor = color;
    }
}
