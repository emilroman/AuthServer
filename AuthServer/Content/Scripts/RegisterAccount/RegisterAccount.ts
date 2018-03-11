import * as ko from "knockout";
import * as $ from "jquery";

export class RegisterAccount {
    public email: KnockoutObservable<string>;
    public password: KnockoutObservable<string>;
    public confirmPassword: KnockoutObservable<string>;
    private passwordConfirmationMatches: any;
    public formIsValid: any;

    constructor() {
        this.email = ko.observable("");
        this.password = ko.observable("");
        this.confirmPassword = ko.observable("");
        this.passwordConfirmationMatches = ko.computed(() => {
            return this.password().length > 0 && this.password() === this.confirmPassword();
        });
        this.formIsValid = ko.computed(() => {
            //TODO: add validation here to enable form button
            return this.passwordConfirmationMatches();
        });
    }
}

$(() => {
    ko.applyBindings(new RegisterAccount(), $("#register-account")[0]);
});