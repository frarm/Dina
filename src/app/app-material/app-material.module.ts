import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";

const MaterialComponents = [MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule];

@NgModule({
   imports: [MaterialComponents],
   exports: [MaterialComponents],
})
export class AppMaterialModule {}
