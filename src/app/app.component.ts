import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit(): void {
    AOS.init({disable: 'mobile'});
    AOS.refresh();
  }
  title = 'my-portfolio-website';

}
