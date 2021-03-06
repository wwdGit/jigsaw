/**
 * Created by 10177553 on 2017/4/13.
 */

import {Component, TemplateRef} from "@angular/core";
import {PopupDisposer, PopupInfo, PopupService} from "../../../../../service/popup.service";

@Component({
    templateUrl: 'top.html',
    styleUrls: ['top.scss']
})
export class DialogTopDemo  {

    private _dialogInfo: PopupInfo;

    private top = "20%";

    constructor(private popupService : PopupService){
    }

    close() {
        this._dialogInfo.dispose();
    }

    popupDialog1(ele:TemplateRef<any>){
        this._dialogInfo = this.popupService.popup(ele);
    }
}
