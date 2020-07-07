import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
public className:string;
public href:string;
public text:string;
  constructor() { }

  getClassName(){
    return this.className;
  }
  getHref(){
    return this.href;
  }
  getText(){
    return this.text;
  }
  setClassName(className:string){
    this.className = className;
  }
  setHref(href:string){
      this.href = href;
  }
  setText(text:string){
      this.text = text;
  }

}
