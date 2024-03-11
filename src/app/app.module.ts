import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { AboutSectionComponent } from './component/about-section/about-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsSectionComponent } from './component/skills-section/skills-section.component';
import { BgSvgComponent } from './component/bg-svg/bg-svg.component';
import { ExperienceSectionComponent } from './component/experience-section/experience-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogProjectComponent } from './component/dialog-project/dialog-project.component';
import { ContactSectionComponent } from './component/contact-section/contact-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DialogImprintComponent } from './component/dialog-imprint/dialog-imprint.component';
import { DialogDataProtecComponent } from './component/dialog-dataProtec/dialog-dataProtec.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    BgSvgComponent,
    ExperienceSectionComponent,
    DialogProjectComponent,
    ContactSectionComponent,
    FooterComponent,
    DialogImprintComponent,
    DialogDataProtecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTypedJsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
