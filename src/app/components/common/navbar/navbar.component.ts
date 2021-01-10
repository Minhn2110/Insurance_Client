import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAccountStatus } from '../../store/store.selector';
import { accountAction, LOAD_USER_INFO } from '../../store/store.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  accountStatusSubscription: Subscription;
  accountStatus: boolean;

  menuItemOthers: Array<any> = [
    {name: 'About Us', router: '/about-us'},
    {name: 'Contact Us', router: '/contact-us'},
  ] 
  menuItem: Array<any> = [
    {name: 'Home', router: '/'},
    {name: 'Insurance', router: '/purchase'},
    {name: 'Claim', router: '/claims'},
    {name: 'FAQ', router: '/faq'}
  ]
 

  ngOnInit(): void {
    this.accountStatusSubscription = this.store.select(getAccountStatus).subscribe((status: boolean) => {
      this.accountStatus = status;
      console.log('status', status);

    });
    this.isLoggedIn();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

  isLoggedIn():void {
    if (localStorage.getItem('token') != null){
      localStorage.removeItem('mod');
    } else {
      // alert ('no');
    }
  }

  logOut(): void {
    this.store.dispatch(accountAction({accountStatus: false}));
    localStorage.removeItem("token");
    this.store.dispatch(LOAD_USER_INFO({userInfo: null}));
    alert('a');
  }

}
