import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor (private fb :FormBuilder){}
  // myForm = this.fb.group({
  // first: [""]
  // })
  value = "";
  block1 = "";
  block2 = "";
  block3 = "";
  letters = /[a-zA-Z]/;
  numbers = /[0-9]/;
  sumbols = /[! " # $ % & ' ( ) * + , \ -. / : ; < = > ? @ [ \] ^ _ ` { | }]/;


  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    this.value = targetDivElement.value;
    if (this.value.length < 8 && this.value.length !== 0){
      this.block1 = "class1"
      this.block2 = "class1";
      this.block3 = "class1";
    }
    if (this.value.length == 0){
      this.block1 = "class0"
      this.block2 = "class0";
      this.block3 = "class0";
    }
    if (this.value.length >= 8 && (this.value.match(this.letters) || this.value.match(this.numbers) || this.value.match(this.sumbols))){
      this.block1 = "class1";
      this.block2 = "class0";
      this.block3 = "class0";
    }
    if (this.value.length >= 8 && (
      (this.value.match(this.numbers) && this.value.match(this.letters)) ||
      (this.value.match(this.numbers) && this.value.match(this.sumbols)) ||
      (this.value.match(this.sumbols) && this.value.match(this.letters))
      )){
      this.block1 = "class2";
      this.block2 = "class2";
      this.block3 = "class0";
    }
    if (this.value.length >= 8 && (this.value.match(this.numbers) && this.value.match(this.letters) && this.value.match(this.sumbols))){
      this.block1 = "class3";
      this.block2 = "class3";
      this.block3 = "class3";
    }
}
  
}