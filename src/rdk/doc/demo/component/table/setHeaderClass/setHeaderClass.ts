import {Component, ViewEncapsulation} from "@angular/core";
import {TableData} from "../../../../../core/data/table-data";
import {ColumnDefine} from "../../../../../component/table/table-api";
import {Http} from "@angular/http";



@Component({
  templateUrl: 'setHeaderClass.html',
    styleUrls: ['style.scss'],
    //TO NOTE
    encapsulation: ViewEncapsulation.None
})
export class TableSetHeaderClassDemoComponent {
    tableData: TableData;

    constructor(http: Http) {
        this.tableData = new TableData();
        this.tableData.http = http;
        this.tableData.fromAjax('mock-data/table/data.json');
    }



    private _columns: ColumnDefine[] = [
        {
            target: 'name',
            header: {
                class:'red-text'
            }
        }];
}



