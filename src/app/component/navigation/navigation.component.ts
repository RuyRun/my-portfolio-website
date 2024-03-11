import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  sections = ['about', 'skill', 'projects', 'contact'];
  activeSection = this.sections[0];

  constructor(private translate:TranslateService) {
   
  }

  ngOnInit() {
  }

  switchLanguage(lang: 'en' | 'de'){
    this.translate.use(lang);
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY -500;
        const offsetBottom = offsetTop + rect.height;

        if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
          this.activeSection = section;
        }
      }
    });
  }
}
