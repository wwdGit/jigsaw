import {Component} from "@angular/core";
import {TableData} from "../../../../../core/data/table-data";
import {Http} from "@angular/http";

@Component({
    templateUrl: 'fixedHead.html',
    styleUrls: ['fixedHead.scss']
})
export class TableFixedHeadDemoComponent {
    tableData: TableData;


   constructor(http: Http) {
            this.tableData = new TableData();
            this.tableData.http = http;
            this.tableData.fromAjax('mock-data/table/data.json');
   }

}
