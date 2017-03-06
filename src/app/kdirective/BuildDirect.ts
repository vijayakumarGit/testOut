import { Component } from '@angular/core';

@Component({
    selector:"app-direct",
    template:"<h1 *ngFor='let i of names'>{{i.name}}</h1>" +
    "<p *ngIf='status'>I am Show</p>" +
    "<button (click)='OnClick()'>Click Me:)</button>" +
    "<div [ngSwitch]='str'>" +
        "<p *ngSwitchCase='1'>I am One</p>"+
    "<p *ngSwitchDefault>I am Default</p>"+
    "</div>"
})

export class BuildDirect {
    str:number = 0;
    names:any[] = [{name:"sdf"},{name:"sfsdf"}]
    status:boolean = true;
    OnClick(){
        this.str = 1;
        this.status = this.status == true ? false : true;
    }
}
