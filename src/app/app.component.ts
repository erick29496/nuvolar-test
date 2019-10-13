import {AfterViewInit, Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {ThemeService} from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Nuvolar App';
  theme: number;

  constructor(private themeService: ThemeService,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.theme = 0;
  }

  setTheme(value: number) {
    this.themeService.setTheme(value);
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.themeService.getSelectedThemeBody();
  }

  getSelectedThemeNavBar() {
    return this.themeService.getSelectedThemeNavBar();
  }

  getSelectedThemeBackground() {
    return this.themeService.getSelectedThemeBackground();
  }

}
