import { Component, EventEmitter, Output } from "@angular/core";

@Component({
   selector: "app-book-section",
   templateUrl: "./book-section.component.html",
   styleUrls: ["./book-section.component.css"],
})
export class BookSectionComponent {
   @Output() onCapitulo: EventEmitter<number> = new EventEmitter<number>();
   sendInfo = (capitulo: number): void => {
      this.onCapitulo.emit(capitulo);
   };
}
