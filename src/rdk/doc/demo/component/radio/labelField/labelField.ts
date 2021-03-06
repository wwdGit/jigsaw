import { Component } from "@angular/core";

@Component({
  templateUrl: 'labelField.html'
})
export class RadioLabelFieldDemoComponent {
    public selectedCity:{};
    citys = [
        {name: "北京",id:"1"},
        {name: "上海",id:"2"},
        {name: "南京",id:"3"},
        {name: "深圳",id:"4"},
        {name: "长沙",id:"5"},
        {name: "西安",id:"6"}
    ];
    constructor(){
        this.selectedCity={name: "西安",id:"6"};
    }
    public radioChange(message:any){
        console.log(`switch message is: ${message.name}`);
    }
}

