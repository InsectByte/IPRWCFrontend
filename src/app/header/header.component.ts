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
    this.loggedInSub = this._userService.getJwt().subscribe(
      (response: string) => {
        console.log(response)
        this.loggedIn = (response != undefined);
        console.log(this.loggedIn)
      }
    )
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

  ngOnDestroy() {
    this.loggedInSub.unsubscribe();
  }
}
