import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Reminder } from '../../classes/reminder';
import { AngularFire } from 'angularfire2';
/* 
Generated class for the AddReminder page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
    selector: 'page-add-reminder',
    templateUrl: 'add-reminder.html'
})

export class AddReminderPage {

    reminder: Reminder = new Reminder();
    avatarRows = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire, public loadingCtrl: LoadingController, public toastCtrl: ToastController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddReminderPage');
        this.reminder.avatar = "assets/images/clock.png";

        this.avatarRows.push({
            value: [
            "assets/images/backpack.png",
            "assets/images/ball.png",
            "assets/images/basketball.png",
            "assets/images/bear.png",
            "assets/images/beer.png",
            "assets/images/book.png"
            ]
        });
        this.avatarRows.push({
            value: [
            "assets/images/box.png",
            "assets/images/cake.png",
            "assets/images/camera.png",
            "assets/images/cat.png",
            "assets/images/clock.png",
            "assets/images/cloud.png"
            ]
        });
        this.avatarRows.push({
            value: [
            "assets/images/game.png",
            "assets/images/gift.png",
            "assets/images/graduation.png",
            "assets/images/mastercard.png",
            "assets/images/moneybag.png",
            "assets/images/movie.png"
            ]
        });

        this.avatarRows.push({
            value: [
            "assets/images/rainbow.png",
            "assets/images/rice.png",
            "assets/images/spaghetti.png",
            "assets/images/sun.png",
            "assets/images/syringe.png",
            "assets/images/throphy.png"
            ]
        });
    }

    createReminder() {
        let reminderList = this.af.database.list('/reminders');
        let loader = this.loadingCtrl.create({
            content: "Creating reminder..."
        });
        let successToast = this.toastCtrl.create({
            message: 'Success: The reminder was added successfully.',
            duration: 3000
        });    
        let errorToast = this.toastCtrl.create({
            message: 'Error: There was an error in creating the reminder. Please try again.',
            duration: 3000
        });

        this.reminder.createdAt = new Date().toString();

        loader.present();
        reminderList.push(this.reminder).then(
            (any) => {
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

    updateAvatar(path: string) {
        this.reminder.avatar = path;
    }
}
