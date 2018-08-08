import { Injectable } from '@angular/core';

let config_Key_Name = "config";

@Injectable()

export class UserConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: "",

  }

  constructor() {
    console.log('Hello MoovieProvider Provider');
  }

  getConfigData(): any {
    return localStorage.getItem(config_Key_Name);
  }

  setConfigData(showSlide?: boolean, name?: string, username?: string){
    const config = {
      showSlide: false,
      name: "",
      username: "",
    }

    if (showSlide) {
      config.showSlide = showSlide;
    }
    if (name) {
      config.name = name;
    }
    if(username) {
      config.username = username;
    }
    else {
      console.log(Error);
    }

    localStorage.setItem(config_Key_Name, JSON.stringify(config));
  }
}
