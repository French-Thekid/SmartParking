import { Injectable } from '@angular/core';

interface user {
  username: string;
  userid: string;
  uid: string;
  license: string;
  department: string;
  email:string;
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
  getEmail() {
    return this.user.email;
  }
  getLicense() {
    return this.user.license;
  }
  getDepartment() {
    return this.user.department;
  }

  /*getAccountType() {
    return this.user.accountType;
  }*/

  getUID() {
    return this.user.uid;
  }
}
