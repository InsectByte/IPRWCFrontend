import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMenu: boolean = false;
  @ViewChild('collapse') collapseMenu: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  public toggleMenu(collapse: HTMLDivElement) {
    this.showMenu = !this.showMenu;
    collapse.classList.toggle("hidden")
    collapse.classList.toggle("flex")
  }
}
