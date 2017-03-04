import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { ViewReminderPage } from '../pages/view-reminder/view-reminder';
import { AngularFireModule } from 'angularfire2';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

export const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    storageBucket: "",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
}

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddReminderPage,
        ViewReminderPage,
        ProgressBarComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AddReminderPage,
        ViewReminderPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
