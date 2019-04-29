import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { key } from 'localforage';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.page.html',
  styleUrls: ['./admin-portal.page.scss'],
})
export class AdminPortalPage implements OnInit {
  select: string = "rgba(0,0,0,0.2)";
  select1: string = "rgba(0,0,0,0.2)";
  select2: string = "rgba(0,0,0,0.2)";
  select3: string = "rgba(0,0,0,0.2)";
  select4: string = "rgba(0,0,0,0.2)";
  count: number = 0;
  

  constructor(public router: Router, 
    public afstore: AngularFirestore,
    private LNotif: LocalNotifications,
    private storage: Storage, ) {
      
      var s =this.afstore.collection('reports').valueChanges()
      var x=s.subscribe((data) => { 
          console.log('new data added')
          if((JSON.parse(localStorage.getItem('RChk'))==null)&&(this.count!=0))
          {
            this.newRep();
            console.log('RChk: '+JSON.parse(localStorage.getItem('RChk')))
          }
          this.count++;
         
      })

   }

   newRep(){
    this.LNotif.schedule({
      id: 1,
      text: 'New Report Made, Please Check Reports',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { secret: key }
    });
   }

  logOut() {
    localStorage.setItem('userID',null);
    localStorage.setItem('password',null);
    this.router.navigate(['login']);
  }


  async EntranceV() {
    //console.log(JSON.parse(localStorage.getItem('userID')));

    this.select = "rgba(255,255,255,0.4)";
    this.router.navigate(['allocate-vehicle']);
    await this.stall(300);
    this.select = "rgba(0,0,0,0.2)";
  }
  async exitV() {
    this.select1 = "rgba(255,255,255,0.4)";
    this.router.navigate(['deallocate-vehicle']);
    await this.stall(300);
    this.select1 = "rgba(0,0,0,0.2)";
  }
  async vehicleV() {
    this.select2 = "rgba(255,255,255,0.4)";
    this.router.navigate(['vparked']);
    await this.stall(300);
    this.select2 = "rgba(0,0,0,0.2)";
  }
  async reportV(){
    this.select3 = "rgba(255,255,255,0.4)";
    this.router.navigate(['creports']);
    await this.stall(300);
    this.select3 = "rgba(0,0,0,0.2)";
  }
  async manageSys(){
    this.select4 = "rgba(255,255,255,0.4)";
    this.router.navigate(['manage-sys']);
    await this.stall(300);
    this.select4 = "rgba(0,0,0,0.2)";
  }

  ngOnInit() {
    this.select = "rgba(0,0,0,0.2)";
  }


  stall(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
