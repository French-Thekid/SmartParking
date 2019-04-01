import { Injectable } from '@angular/core';

interface user {
  username: string;
  userid: string;
  uid: string;
}

@Injectable()
export class UserService {
  private user: user;

  constructor() {}

  setUser(user: user) {
    this.user = user;
  }

  getUsername() {
    return this.user.username;
  }

  /*getAccountType() {
    return this.user.accountType;
  }*/

  getUID() {
    return this.user.uid;
  }
}
