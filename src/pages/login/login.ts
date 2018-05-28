import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {TabsPage} from '../tabs/tabs'
import { AlertController, NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
@Component({
    templateUrl: 'login.html'
})
export class LoginPage {
    username: string;
    password:string;
    userId:null;
    constructor(public alertCtrl: AlertController, public navCtrl: NavController, public storage: Storage) {

    }
    login()
    {
        if (this.username!='admin') {
            
            let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Your Email Invalid',
                buttons: ['OK']
            });
            alert.present();
        }
        else if (this.password!='admin') {
            
            let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Your Password Invalid',
                buttons: ['OK']
            });
            alert.present();
            
        }
        else{
            this.navCtrl.push(TabsPage)
            this.storage.set('userId', this.userId);
        }
    }
    
}
