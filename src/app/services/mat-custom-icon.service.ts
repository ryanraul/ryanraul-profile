import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class MatCustomIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }

  initCustomIcons(): void {
    this.registerSkillsIcons();
    this.registerContactsIcons();
  }

  registerContactsIcons() {
      this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/linkedin-logo.svg'));
      this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/facebook-logo.svg'));
      this.matIconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/instagram-logo.svg'));
      this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github-logosvg.svg'));

  }

  registerSkillsIcons() {
    this.matIconRegistry.addSvgIcon('c-sharp', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/c-sharp-logosvg.svg'));
    this.matIconRegistry.addSvgIcon('angular', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/angular-logo.svg'));
    this.matIconRegistry.addSvgIcon('python', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/python-logo.svg'));
    this.matIconRegistry.addSvgIcon('java', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/java-logo.svg'));
    this.matIconRegistry.addSvgIcon('sql', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/sql-logo.svg'));    
  }
}
