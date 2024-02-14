export const generalHelpers = {
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  isEmailValid: (email: string) => {
    return generalHelpers.emailPattern.test(email);
  }
}