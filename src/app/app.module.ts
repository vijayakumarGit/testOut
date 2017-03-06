import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'
import { HclComponent } from './hcl/hcl.component'
import { customdirective } from './Diretive/Custom.directive'
import { StructDirective } from './Diretive/struct.directive'
import { BuildDirect } from './kdirective/BuildDirect'
import { CustDirect } from './kdirective/CustDirect'
import { StructDirect } from './kdirective/StructDirect'
import {ServComponent} from './Aservice/ServComponent'
import {SenServComponent} from './Aservice/senServ'
import {defulatServ1} from './service/TestServ2'

@NgModule({
    declarations: [
        AppComponent,
        HclComponent,
        customdirective,
        StructDirective,
        CustDirect,
        BuildDirect,
        StructDirect,
        ServComponent,
        SenServComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [defulatServ1],
    bootstrap: [AppComponent]
})
export class AppModule {
}
