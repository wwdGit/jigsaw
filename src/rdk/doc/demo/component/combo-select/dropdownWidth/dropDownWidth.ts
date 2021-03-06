/**
 * Created by 10177553 on 2017/4/13.
 */

import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {RdkComboSelect} from "../../../../../component/combo-select/combo-select";

@Component({
    templateUrl: 'dropDownWidth.html',
})
export class ComboSelectWidthDemo implements AfterViewInit {
    public dropDownWidth="120%";
    public selectedCity = [{label: "北京"}];

    @ViewChild(RdkComboSelect) comboSelect:RdkComboSelect;

    constructor() {
    }

    ngAfterViewInit() {
        this.comboSelect.select.subscribe(data => {
            console.log(data);
        })
    }

    private citys = [
        {label: "北京"},
        {label: "上海"},
        {label: "南京"},
        {label: "深圳"},
        {label: "长沙"},
        {label: "西安"},
        {label: "盐城"},
        {label: "徐州"},
        {label: "连云港"},
        {label: "哈尔滨"}
    ];

}
