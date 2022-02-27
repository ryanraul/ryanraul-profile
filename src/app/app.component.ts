import { Component } from '@angular/core';
import { MatCustomIconService } from './services/mat-custom-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'raulryan-portfolio';


        
  constructor(private _matCustomIconService: MatCustomIconService,) {

  }

  ngOnInit() {
    this._matCustomIconService.initCustomIcons();
  }
}
