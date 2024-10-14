import { defineStore } from "pinia";

type Account = {
  name: string;
  surname: string;
  email: string;
  password: string;
  googleId: string | null;
};

export enum LoginState {
  loginWithAladiaAccount,
  loginWithGoogle,
  HasNotAccount,
}

export const useAccountStore = defineStore("account", {
  state: () => ({
    accounts: [
      {
        name: "natty",
        surname: "ab",
        email: "natty@gmail.com",
        password: "1234567",
        googleId: null,
      },
      {
        name: "google",
        surname: "account",
        email: "google@gmail.com",
        password: "1234567",
        googleId: "12322314341324",
      },
    ] as Account[],
  }),

  actions: {
    signup(account: Account) {
      this.accounts.push(account);
    },
    login(email: string): LoginState {
      const account = this.accounts.find((item) => item.email === email);

      if (!account) {
        return LoginState.HasNotAccount;
      }

      if (!account.googleId) {
        return LoginState.loginWithAladiaAccount;
      }

      return LoginState.loginWithGoogle;
    },
  },
});
