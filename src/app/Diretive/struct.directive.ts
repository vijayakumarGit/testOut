/**
 * Created by hmspl on 05/03/17.
 */
import {Directive,TemplateRef,ViewContainerRef,Input} from '@angular/core';

@Directive({
    selector:'[structdirective]'
})

export class StructDirective{
    @Input() set structdirective(condition:boolean)
    {
        if(!condition)
        {
            this.vcR.createEmbeddedView(this.temRef)
        }
        else{
            this.vcR.clear()
        }
    }

constructor(private temRef:TemplateRef<any>,private vcR:ViewContainerRef){}
}