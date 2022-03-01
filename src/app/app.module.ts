import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardSkillsComponent } from './card/card-skills/card-skills.component';
import { CardContactComponent } from './card/card-contatc/card-contact.component';
import { CardHeaderPhotoComponent } from './card/card-header/card-header-photo/card-header-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardSkillsComponent,
    CardContactComponent,
    CardHeaderPhotoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
