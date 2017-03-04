import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddReminderPage } from '../add-reminder/add-reminder';
import { ViewReminderPage } from '../view-reminder/view-reminder';
import { AngularFire } from 'angularfire2';
import { Reminder } from '../../classes/reminder';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    reminders: Reminder[] = [];

    constructor(public navCtrl: NavController, public af: AngularFire) {}

    ionViewDidLoad() {
        let reminderLists = this.af.database.list('/reminders');

        reminderLists.subscribe(data =>
            this.reminders = data.map((item) => {
                let reminder: Reminder = Object.assign(new Reminder(), item);
                reminder.key = item.$key;
                return reminder;
            })
            );
    }

    viewReminder(reminder: Reminder) {
        this.navCtrl.push(ViewReminderPage, reminder);
    }

    addNewReminder() {
        this.navCtrl.push(AddReminderPage);
    }
}
