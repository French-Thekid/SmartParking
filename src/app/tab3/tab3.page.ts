import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {
    
  }
  time= 5;
  check=false;
  async reserveSpot() {
    if(this.check==true)
    {
      const alert = await this.alertController.create({
        header: 'Reservation',
        subHeader: 'Your spot has been successfully Reserved.',
        message: 'Fail to arrive in '+this.time+' mins and you might loose it.',
        buttons: ['OK']
      });
      await alert.present();
      this.check=false;
    }
    else{
      const alert = await this.alertController.create({
        header: 'Reservation',
        subHeader: 'Please Select Time and Spot.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    
  }

  async selectTime() {
    this.check=true
    const alert = await this.alertController.create({
      header: 'Time Selection',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '5 Minutes',
          value: '5',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '10 Minutes',
          value: '10'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '15 Minutes',
          value: '15'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '20 Minutes',
          value: '20'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Ok',
          handler: (data:string) => {
            console.log(data); 
            this.time=parseInt(data);
        }
        }
      ]
    });

    await alert.present();
  }


}