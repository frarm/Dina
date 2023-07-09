import { AppMaterialModule } from "./app-material/app-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

@NgModule({
   declarations: [AppComponent, NavbarComponent, FooterComponent, HomePageComponent],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppMaterialModule,
      AppRoutingModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
