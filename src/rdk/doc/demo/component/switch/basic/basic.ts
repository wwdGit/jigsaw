import { Component } from "@angular/core";
import { RdkSwitchModule } from "../../../../../component/switch/index";

@Component({
  templateUrl: 'basic.html'
})
export class SwitchBasicDemoComponent {
    public testSwitch(message:any){
        console.log("switch message is: "+message);
    }
}

