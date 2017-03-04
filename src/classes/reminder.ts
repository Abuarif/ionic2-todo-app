export class Reminder {
    key:         string
    name:        string
    createdAt:   string
    endDate:     string
    endTime:     string
    hasDuration: boolean
    avatar:      string

    convertToDays(dateInput: number): number {
        let days = <any>dateInput/(1000 * 60 * 60 * 24);
        return days;
    }

    getCreatedDate(): string {
        let options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }

        return new Date(this.createdAt).toLocaleString('en-GB', options);
    }

    getEndDate(): string {
        let options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }

        return new Date(this.endDate).toLocaleString('en-GB', options);
    }

    getTotalDays(): number {
        let reminderStartDate = new Date(this.createdAt);
        let reminderEndDate   = new Date(this.endDate);

        let totalDays = this.convertToDays((<any>reminderEndDate - <any>reminderStartDate));

        return Math.round(totalDays);
    }

    getLapsedDays(): number {
        let reminderStartDate = new Date(this.createdAt);
        let lapsedDays        = this.convertToDays((<any>new Date() - <any>reminderStartDate));

        return Math.round(lapsedDays);
    }

    getRemainingDays(): number {
        let remainingDays = this.getTotalDays() - this.getLapsedDays();

        return remainingDays;
    }

    getPercentage(): number {
        return Math.round(this.getLapsedDays()/this.getTotalDays() * 100);
    }
}
