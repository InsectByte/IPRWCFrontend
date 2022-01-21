import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {UserService} from "../shared/User/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public showMenu: boolean = false;
  @ViewChild('collapse') collapseMenu: any;

  private loggedInSub : Subscription = new Subscription();
  loggedIn : boolean = false;

  constructor(private _userService : UserService) {
  }

  ngOnInit(): void {
    this.loggedInSub = this._userService.getJwtSub().subscribe(
      (response: string) => {
        this.loggedIn = (response != null && response != "");
      }
    )
  }

  ngAfterViewInit(): void {
  }

  public toggleMenu(collapse: HTMLDivElement) {
    this.showMenu = !this.showMenu;
    collapse.classList.toggle("hidden")
    collapse.classList.toggle("flex")
  }

  ngOnDestroy() {
    this.loggedInSub.unsubscribe();
  }
}
