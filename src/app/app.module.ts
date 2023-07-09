import { AppMaterialModule } from "./app-material/app-material.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { BookSectionComponent } from "./components/book-section/book-section.component";
import { BookContentComponent } from "./components/book-content/book-content.component";

@NgModule({
   declarations: [
      AppComponent,
      BookContentComponent,
      BookSectionComponent,
      FooterComponent,
      HomePageComponent,
      NavbarComponent,
   ],
   imports: [
      AppMaterialModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      BrowserModule,
      FlexLayoutModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
