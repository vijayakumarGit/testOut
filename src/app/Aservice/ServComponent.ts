/**
 * Created by hmspl on 06/03/17.
 */
import {Component,OnInit} from '@angular/core'
import {firstServ} from '../service/TestServ1'
@Component({
    selector:"app-serv",
    template:'<h1>ServCOmp</h1>' +
    '<input type="text" #seconServ>' +
    '<button (click)="onclick(seconServ.value)">Second Serv</button>' +
    '{{value1}}',
    styles:[``],
    providers:[firstServ]
})

export class ServComponent implements OnInit{
    value1:string;
    constructor(private frstSrv:firstServ){}
    onclick(val:string)
    {
       this.value1=this.frstSrv.newServ(val)
    }
    ngOnInit(){
        this.frstSrv.pushed.subscribe(
            data => this.value1=data
        );
    }

}