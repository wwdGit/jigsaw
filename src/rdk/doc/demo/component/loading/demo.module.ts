import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {DefinedLoadingDemoComponent } from "./userDefined/userDefined";
import {LoadingService } from "../../../../service/loading.service"
import {RdkBallLoading, RdkLoading, RdkLoadingModule} from "../../../../component/loading/loading";
import {LoadingDemoComponent} from "./basic/loading";
import {PopupService} from "../../../../service/popup.service";
import {DefinedLoading} from "./userDefined/definedLoading/definedLoading";
import {BallLoadingDemoComponent} from "./ballLoading/loading";
import {DomInnerDemoComponent} from "./domInner/domInner";
import {RdkBlock, RdkBlockModule} from "../../../../component/block/block";
import {ColorfulLoadingDemoComponent} from "./color/color";
import {RdkButtonModule} from "../../../../component/button/button";
const loadingDemoRoutes = [
    {
        path: '', redirectTo: 'basic', pathMatch: 'full'
    },
    {
        path: 'basic', component: LoadingDemoComponent
    },
    {
        path: 'ballLoading', component: BallLoadingDemoComponent
    },
    {
        path: 'userDefined', component: DefinedLoadingDemoComponent
    },
    {
        path: 'domInner', component: DomInnerDemoComponent
    },
    {
        path: 'color', component: ColorfulLoadingDemoComponent
    },
    {
        path: '**', //fallback router must in the last
        component: LoadingDemoComponent
    }
];

@NgModule({
    declarations: [
        LoadingDemoComponent,
        BallLoadingDemoComponent,
        DefinedLoadingDemoComponent,
        DomInnerDemoComponent,
        DefinedLoading,
        ColorfulLoadingDemoComponent,
    ],
    imports: [
        CommonModule,
        RdkBlockModule,
        RdkLoadingModule,
        RdkButtonModule,
        RouterModule.forChild(loadingDemoRoutes)
    ],
    providers: [LoadingService, PopupService],
    entryComponents:[RdkBlock, RdkLoading, RdkBallLoading, DefinedLoading]
})
export class LoadingDemoModule {
}
