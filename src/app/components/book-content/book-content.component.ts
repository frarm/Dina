import { Component, Input } from "@angular/core";
import { Subject } from "rxjs";

@Component({
   selector: "app-book-content",
   templateUrl: "./book-content.component.html",
   styleUrls: ["./book-content.component.css"],
})
export class BookContentComponent {
   @Input() subject!: Subject<number>;
   capitulos: boolean[] = [true, false, false, false, false, false, false, false, false, false];

   ngOnInit() {
      // Se suscribe a los valores que se emiten por el Subject<>
      this.subject.subscribe((capitulo: number) => {
         this.capitulos = [false, false, false, false, false, false, false, false, false, false];
         this.capitulos[capitulo] = true;
      });
   }
}
