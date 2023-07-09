import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
   selector: "app-home-page",
   templateUrl: "./home-page.component.html",
   styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {
   subject = new Subject<number>();

   handleCapitulo = (capitulo: number) => {
      this.subject.next(capitulo);
   };
}
