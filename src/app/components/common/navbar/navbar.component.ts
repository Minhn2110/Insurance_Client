import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getAccountStatus, selectUserInfo } from '../../store/store.selector';
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
  selecUserInfoSubscription: Subscription;
  accountStatus: boolean;
  isClient: boolean = true;

  menuItemOthers: Array<any> = [
    {name: 'About Us', router: '/about-us'},
    {name: 'Contact Us', router: '/contact-us'},
  ] 
  menuItem: Array<any> = [
    {name: 'Home', router: '/'},
    {name: 'Insurance', router: '/car-insurance'},
    {name: 'Claim', router: '/claims'}, 
    {name: 'Claim List', router: '/claim-list'}, 
    // {name: 'Claim Form', router: '/claim-form'},
    // {name: 'Certificate', router: '/certificate'},
  ]
 

  ngOnInit(): void {
    this.accountStatusSubscription = this.store.select(getAccountStatus).subscribe((status: boolean) => {
      this.accountStatus = status;
    });
    // Need to debiug this
    this.store.select(selectUserInfo).subscribe((userInfo: any) => {
      console.log('user', userInfo);

      if (userInfo) {
        console.log('user', userInfo);
        this.isClient = userInfo.role.name === 'PARTNER' ? false : true;
      }
    })
    this.isLoggedIn();
    setTimeout(() => {
      this.checkIfhasToken();
    });
  }

  checkIfhasToken() {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      this.accountStatus = true;
      this.store.dispatch(accountAction({accountStatus: true}));
      this.store.dispatch(LOAD_USER_INFO({userInfo: JSON.parse(localStorage.getItem('userInfo'))}));
    }
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
  }

}
