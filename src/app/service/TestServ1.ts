/**
 * Created by hmspl on 06/03/17.
 */
    import {Injectable,EventEmitter} from '@angular/core'
    import {defulatServ1} from './TestServ2'
@Injectable()

export class firstServ{
    constructor(private dftSer:defulatServ1)
    { }
    newServ(val:string){
        console.log(val)
         return "welcome"+this.dftSer.timeFun(val)
    }
    private localArray:string[]=[];
    pushed=new EventEmitter<string>();

    pushFun(val:string){
        this.pushed.emit(val)
    }
}