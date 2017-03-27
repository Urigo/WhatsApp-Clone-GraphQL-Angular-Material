import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getUser() {
    return {
      id: 'cj0sfee17ahpa0198nw4bpncf',
      name: 'Tom',
    };
  }

}
