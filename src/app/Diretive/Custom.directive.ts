/**
 * Created by hmspl on 05/03/17.
 */
import {Directive,ElementRef,Renderer,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
    selector:'[customDirective]'
})
export class customdirective{
    divColor:string;
    @Input() highLight:string;
    @Input() defaultClr:string;
     @HostListener('mouseover') mouseover(){
        this.changeColor(this.highLight)
        //this.divColor='pink'
    }
    @HostListener('mouseleave') mouseleave(){
        this.changeColor(this.defaultClr)
        //this.divColor='yellow'
    }
    @HostBinding('style.backgroundColor') get setColor(){
        return this.divColor;
    }
    constructor(private elr:ElementRef,private rend:Renderer){
        //this.elr.nativeElement.style.backgroundColor='blue';
        this.rend.setElementStyle(this.elr.nativeElement,'background-color','red')
    }
    private changeColor(value:string)
    {
        this.rend.setElementStyle(this.elr.nativeElement,'background-color',value)
    }

}