import { Component } from "@angular/core";

export interface Tile {
   color: string;
   cols: number;
   rows: number;
   text: string;
}

@Component({
   selector: "app-home-page",
   templateUrl: "./home-page.component.html",
   styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {}
