export interface user {
  uid: string;
  userid: string;
  username?: string;
  accountType?: string;
}

export class UserService {
  private user: user;

  constructor() {}

  setUser(user: user) {
    this.user = user;
  }

  getUID() {
    return this.user.uid;
  }
}
