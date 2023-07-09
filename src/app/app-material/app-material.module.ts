import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";

const MaterialComponents = [
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatGridListModule,
   MatCardModule,
   MatDividerModule,
   MatListModule,
   MatSidenavModule,
];

@NgModule({
   imports: [MaterialComponents],
   exports: [MaterialComponents],
})
export class AppMaterialModule {}
