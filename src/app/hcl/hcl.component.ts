import {Component} from '@angular/core';

@Component({
    selector:"app-hcl",
    template:"<p>Kirit</p><ul>" +
    "<li *ngFor='let a of localArray'>{{a.name}}</li></ul>" +
    "<div *ngIf='stuct'>ngIf</div> " +
    "<button (click)='stuct = false'>Click me</button>" +
    "<div [ngSwitch]='value'>" +
    "<p *ngSwitchCase='100'>kirithi100</p>" +
    "<p *ngSwitchCase='10'>VIjay10</p>" +
    "<p *ngSwitchDefault>Defult</p>" +
    "</div>"
})

export class HclComponent{
    stuct:boolean=true;
    value:number=20;
    localArray=[{name:'vijay'},{name:'Kirithi'}]
}