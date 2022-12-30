import { ChangeDetectorRef, Component } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";


@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements ControlValueAccessor {
    title = "InputComponent"
    public value = "";
    block1 = "";
    block2 = "";
    block3 = "";
    letters = /[a-zA-Z]/;
    numbers = /[0-9]/;
    sumbols = /[! " # $ % & ' ( ) * + , \ -. / : ; < = > ? @ [ \] ^ _ ` { | }]/;
    onChange = (value: string) => {};
    private onTouched!: () => void;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}
    public onInputValueChange(event: Event): void {
        const targetInputElement = event.target as HTMLInputElement;
        this.value = targetInputElement.value;
        this.onChange(this.value);
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
        

    public writeValue(value: string): void {
        this.value = value;

        this.changeDetector.detectChanges();
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
        
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
    
}