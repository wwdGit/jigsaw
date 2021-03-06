import {Component, OnInit} from "@angular/core";
import {ZTreeSettingSetting} from "../../../../../component/tree/ztree-types"
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {TreeData} from "../../../../../core/data/tree-data";

@Component({
    templateUrl: 'dataFromAjax.html'
})
export class ZtreeDemoDataFromAjaxComponent {
    private data : TreeData;
    public setting: ZTreeSettingSetting = {
        data: {
            key: {
                children: 'nodes',
                name: 'label'
            }
        }
    };

    constructor(public http: Http) {
        this.data = new TreeData();
        this.data.http = http;
        this.data.fromAjax("mock-data/tree/data.json");
        this.data.refresh();
    }
}
