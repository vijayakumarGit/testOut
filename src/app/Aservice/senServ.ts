/**
 * Created by hmspl on 06/03/17.
 */
import {Component} from '@angular/core'
import {firstServ} from '../service/TestServ1'

@Component({
    selector:"app-serv2",
    template:'<h1>Second Component</h1>' +
    '<input type="text" #inputBx>' +
    '<button (click)="onClick(inputBx.value)">click First Serve</button>{{value}}' +
    '<button (click)="onClick2(inputBx.value)">click me 2</button>',
    styles:[``],
    providers:[firstServ]
})

export class SenServComponent{
    value:string;
    constructor(private fstServ:firstServ){}
    onClick(val:string){
        this.value=this.fstServ.newServ(val)
    }
    onClick2(val:string)
    {
        this.fstServ.pushFun(val)
    }

}