import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vparked',
  templateUrl: './vparked.page.html',
  styleUrls: ['./vparked.page.scss'],
})
export class VparkedPage implements OnInit {
  selectedSpot: string;
  SbuttonColor = 'clear';
  iconColor1 = 'white';
  iconColor2 = 'white';
  iconColor3 = 'white';
  iconColor4 = 'white';
  iconColor5 = 'white';
  iconColor6 = 'white';
  iconColor7 = 'white';
  iconColor8 = 'white';
  iconColor9 = 'white';
  iconColor10 = 'white';
  iconColor11 = 'white';
  iconColor12 = 'white';
  iconColor13 = 'white';
  iconColor14 = 'white';
  iconColor15 = 'white';
  iconColor16 = 'white';
  iconColor17 = 'white';
  iconColor18 = 'white';
  iconColor19 = 'white';
  iconColor20 = 'white';
  iconColor21 = 'white';
  iconColor22 = 'white';
  iconColor23 = 'white';
  iconColor24 = 'white';
  iconColor25 = 'white';
  iconColor26 = 'white';
  iconColor27 = 'white';
  iconColor28 = 'white';
  iconColor29 = 'white';
  iconColor30 = 'white';
  iconColor31 = 'white';
  iconColor32 = 'white';
  iconColor33 = 'white';
  iconColor34 = 'white';
  iconColor35 = 'white';
  iconColor36 = 'white';
  iconColor37 = 'white';
  iconColor38 = 'white';
  iconColor39 = 'white';
  iconColor40 = 'white';
  iconColor41 = 'white';
  iconColor42 = 'white';
  iconColor43 = 'white';
  iconColor44 = 'white';
  iconColor45 = 'white';
  iconColor46 = 'white';
  iconColor47 = 'white';
  iconColor48 = 'white';
  iconColor49 = 'white';
  iconColor50 = 'white';
  iconColor51 = 'white';
  iconColor52 = 'white';
  iconColor53 = 'white';
  iconColor54 = 'white';
  iconColor55 = 'white';
  iconColor56 = 'white';
  iconColor57 = 'white';
  iconColor58 = 'white';
  iconColor59 = 'white';
  iconColor60 = 'white';

  constructor(private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  return() {
    this.router.navigate(['admin-portal']);
  }

  async returnSpot(spot: string) {
    //do check here

    this.selectedSpot = spot;
    const alert = await this.alertController.create({
      header: 'Parking Details',
      subHeader: 'Under Construction',
      message: 'Parking lot ' + spot + ' selected',
      translucent: true,
      buttons: ['OK']
    });

    await alert.present();
  }

}
