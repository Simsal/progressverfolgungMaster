import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  stillstand = {Stillstandsname: "CO-Boiler 2017",
              ErsterFruehesterAusbautermin: "20.04.2017",
              LetzterSpaetesterEinbautermin: "20.06.2017",
            Stillstandsstatus: "In Ausführung"};

  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
