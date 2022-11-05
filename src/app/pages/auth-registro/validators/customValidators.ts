import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static MatchingPasswords: ValidatorFn = (form: AbstractControl<any, any>): ValidationErrors | null => {
    const password = form.value.password;
    const confirmPassword = form.value.repeatPassword;
    return equalsOrEmpty(password, confirmPassword)
      ? null
      : {not_matching: true};
  };
}

function equalsOrEmpty(password: string, confirmPassword: string) {
  return password === confirmPassword && confirmPassword !== undefined;
}
