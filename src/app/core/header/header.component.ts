import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  darkTheme = false;
  @Output() onChangeTheme = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {}
  changeTheme() {
    this.darkTheme = !this.darkTheme;
    this.onChangeTheme.emit(this.darkTheme);
  }

  goTo(destination: string) {
    if (!this.router.url.includes('home')) {
      this.router.navigate(['home']);
    }
    setTimeout(() => {
      UtilsService.goTo(destination);
    }, 100);
  }
}
