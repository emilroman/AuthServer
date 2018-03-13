import * as ko from "knockout";

export class RegisterAccount {
    public email: KnockoutObservable<string>;
    public password: KnockoutObservable<string>;
    public confirmPassword: KnockoutObservable<string>;

    constructor() {
        this.email = ko.observable("");
        this.password = ko.observable("");
        this.confirmPassword = ko.observable("");
    }

    public emailIsValid = ko.pureComputed(() => {
        return this.email().length > 0;
    });

    public passwordsMatch = ko.pureComputed(() => {
        return this.password() === this.confirmPassword();
    });

    public formIsValid = ko.pureComputed(() => {
        //TODO: add validation here to enable form button
        return this.password().length > 0 && this.passwordsMatch();
    });
}