import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public alertController: AlertController, public router: Router) {}
  time = 5;
  check:boolean = false;
  check1:boolean = false;
  timer=0;
  min=0;
  async reserveSpot() {
    var IDChk = JSON.parse(localStorage.getItem('userID'));
    if (IDChk == null) {
      const alert = await this.alertController.create({
        header: 'Unknown User',
        subHeader: 'Please Log-in to Continue.',
        buttons: ['OK']
      });

      await alert.present();
    }
    else{
      if ( (this.check1 == true) && (this.check == true) ) {
        const alert = await this.alertController.create({
          header: 'Reservation',
          subHeader: 'Your spot has been successfully Reserved.',
          message:
            'Failure to arrive in ' + this.time + ' mins and you will lose it.',
          buttons: ['OK']
        });
        await alert.present();
        this.startcountdown(this.time);
        this.check = false;
        this.check1 = false;
      } else {
        const alert = await this.alertController.create({
          header: 'Reservation',
          subHeader: 'Please Select Time and Spot.',
          buttons: ['OK']
        });
  
        await alert.present();
      }

      
    }

    
  }
  async startcountdown(T:any){
      var intervalVar = setInterval(function(){
        this.timer++;
        if((this.timer-60)==1){
          this.min++;
          this.timer= this.timer-60;
        }
        if(this.min==T){
          //check Database here
          console.log("times Up bruh")

          //do this last:
          clearInterval(intervalVar);
          this.timer=0;
          this.min=0;
        }
      }.bind(this),1000)
  }

  selectSpot() {
    this.check1 = true;
    this.router.navigate(['sspot']);
  }
  async selectTime() {
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
          handler: (data: string) => {
            console.log(data);
            this.check = true;
            this.time = parseInt(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
