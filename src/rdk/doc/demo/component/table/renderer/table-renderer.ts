import {Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit} from "@angular/core";
import {TableCellRenderer} from "../../../../../component/table/table-api";
import {RdkInput} from "../../../../../component/input/input";

/*
 * 自定义表头渲染组件
 * */
@Component({
    template: '<span class="fa fa-bus"></span>{{cellData}}'
})
export class TableHeadIcon extends TableCellRenderer {
}

/*
 * 自定义表头渲染组件
 * */
@Component({
    template: `{{cellData}} <rdk-select [(value)]="selectedCityForSelect"
                   placeholder="请选择"
                   [data]="cityListForSelect" width="70" height="20">
               </rdk-select>`
})
export class TableHeadSelect extends TableCellRenderer {
    cityListForSelect = [
        {label: "北京"},
        {label: "上海"},
        {label: "南京"},
        {label: "深圳"},
        {label: "长沙"},
        {label: "西安"}
    ];
}

