import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { HomePage } from '../home/home';
import { Reminder } from '../../classes/reminder';

/*
Generated class for the ViewReminder page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
    selector: 'page-view-reminder',
    templateUrl: 'view-reminder.html'
})

export class ViewReminderPage {
    reminder: Reminder;

    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public af: AngularFire) {
        this.reminder = navParams.data;
    }

    ionViewDidLoad() {}

    deleteReminder() {
        let reminderList = this.af.database.list('/reminders');
        let loader = this.loadingCtrl.create({
            content: "Deleting reminder..."
        });
        let successToast = this.toastCtrl.create({
            message: 'Success: The reminder was deleted successfully.',
            duration: 3000
        });        
        let errorToast = this.toastCtrl.create({
            message: 'Error: There was an error in deleting the reminder. Please try again.',
            duration: 3000
        });

        loader.present();
        reminderList.remove(this.reminder.key).then(
            () => {
                loader.dismiss();
                this.navCtrl.push(HomePage);
                successToast.present();
            },

            (Error) => {
                loader.dismiss();
                errorToast.present();
            }
        );
    }
}
