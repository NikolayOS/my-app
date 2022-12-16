import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  passControl!: FormControl;
  ngOnInit(){
    this.passControl = new FormControl("");
    this.passControl.valueChanges.subscribe((value) => {
      const div = document.querySelector("div");
      const elem1 = document.querySelector("#span1");
      const elem2 = document.querySelector("#span2");
      const elem3 = document.querySelector("#span3");
      const letters = /[a-zA-Z]/;
      const numbers = /[0-9]/;
      const sumbols = /[! " # $ % & ' ( ) * + , \ -. / : ; < = > ? @ [ \] ^ _ ` { | }]/;

    if (value.length < 8 && value.length !== 0){
      elem1!.className = "class1"
      elem2!.className = "class1"
      elem3!.className = "class1"
    }
    if(value.length == 0){
      elem1!.className = "class0"
      elem2!.className = "class0"
      elem3!.className = "class0"
    }
    if (value.length >= 8 && (value.match(letters) || value.match(numbers) || value.match(sumbols))){
      elem1!.className = "class1"
      elem2!.className = "class0"
      elem3!.className = "class0"
    }
    if (value.length >= 8 && (
      (value.match(numbers) && value.match(letters)) ||
      (value.match(numbers) && value.match(sumbols)) ||
      (value.match(sumbols) && value.match(letters))
      )){
        elem1!.className = "class2"
        elem2!.className = "class2"
        elem3!.className = "class0"
    }
    if (value.length >= 8 && (value.match(numbers) && value.match(letters) && value.match(sumbols))){
      elem1!.className = "class3"
      elem2!.className = "class3"
      elem3!.className = "class3"
    }
  }
    );}
}
