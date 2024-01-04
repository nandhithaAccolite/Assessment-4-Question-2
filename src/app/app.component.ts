import { Component } from "@angular/core";
import * as converter from "number-to-words";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  mynumber: number = 0;
  outputWords = "";
  convertToWord() {
    this.outputWords = converter.toWords(this.mynumber);
  }
}

