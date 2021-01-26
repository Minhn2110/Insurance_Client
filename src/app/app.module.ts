import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

import { CarInsurancePageComponent } from './components/pages/car-insurance-page/car-insurance-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ClaimsPageComponent } from './components/pages/claims-page/claims-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { TeamComponent } from './components/common/team/team.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { RecoverPasswordPageComponent } from './components/pages/recover-password-page/recover-password-page.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { HomeoneFaqComponent } from './components/pages/home-demo-one/homeone-faq/homeone-faq.component';
import { HomeoneCompanyComponent } from './components/pages/home-demo-one/homeone-company/homeone-company.component';
import { HomeoneFeedbackComponent } from './components/pages/home-demo-one/homeone-feedback/homeone-feedback.component';
import { HomeoneFutureComponent } from './components/pages/home-demo-one/homeone-future/homeone-future.component';
import { HomeoneGetAQuoteComponent } from './components/pages/home-demo-one/homeone-get-a-quote/homeone-get-a-quote.component';
import { HomeoneServicesComponent } from './components/pages/home-demo-one/homeone-services/homeone-services.component';
import { HomeoneWhyChooseUsComponent } from './components/pages/home-demo-one/homeone-why-choose-us/homeone-why-choose-us.component';
import { HometwoFeedbackComponent } from './components/pages/home-demo-two/hometwo-feedback/hometwo-feedback.component';
import { HometwoWhyChooseUsComponent } from './components/pages/home-demo-two/hometwo-why-choose-us/hometwo-why-choose-us.component';
import { HometwoGetAQuoteComponent } from './components/pages/home-demo-two/hometwo-get-a-quote/hometwo-get-a-quote.component';
import { HometwoServicesComponent } from './components/pages/home-demo-two/hometwo-services/hometwo-services.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HometwoWelcomeComponent } from './components/pages/home-demo-two/hometwo-welcome/hometwo-welcome.component';
import { HometwoFutureComponent } from './components/pages/home-demo-two/hometwo-future/hometwo-future.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomethreeFutureComponent } from './components/pages/home-demo-three/homethree-future/homethree-future.component';
import { HomethreeCompanyComponent } from './components/pages/home-demo-three/homethree-company/homethree-company.component';
import { HomethreeServicesComponent } from './components/pages/home-demo-three/homethree-services/homethree-services.component';
import { HomethreeWhyChooseUsComponent } from './components/pages/home-demo-three/homethree-why-choose-us/homethree-why-choose-us.component';
import { HomethreeGetAQuoteComponent } from './components/pages/home-demo-three/homethree-get-a-quote/homethree-get-a-quote.component';
import { HomethreeFaqComponent } from './components/pages/home-demo-three/homethree-faq/homethree-faq.component';
import { HomethreeFeedbackComponent } from './components/pages/home-demo-three/homethree-feedback/homethree-feedback.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';

// Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './components/pages/authentication/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/authentication/register-page/register-page.component';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import {PurchasePageComponent} from './components/pages/purchase-page/purchase-page.component';
import {PaymentPageComponent} from './components/pages/payment-page/payment-page.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './components/store/store.reducer';
import { ClaimFormComponent } from './components/pages/claim-form/claim-form.component';
import { ClaimListComponent } from './components/pages/claim-list/claim-list.component';
import { CertificatePageComponent }from './components/pages/certificate-page/certificate-page.component'

import { MaterialModule } from './material.module';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavbarComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        ContactPageComponent,
        BlogGridPageComponent,
        BlogDetailsPageComponent,
        NotFoundComponent,
        CarInsurancePageComponent,
        ComingSoonPageComponent,
        ClaimsPageComponent,
        PricingPageComponent,
        ServicesPageComponent,
        PartnerComponent,
        TeamComponent,
        BlogComponent,
        MyAccountPageComponent,
        RecoverPasswordPageComponent,
        HomeoneBannerComponent,
        HomeoneFaqComponent,
        HomeoneCompanyComponent,
        HomeoneFeedbackComponent,
        HomeoneFutureComponent,
        HomeoneGetAQuoteComponent,
        HomeoneServicesComponent,
        HomeoneWhyChooseUsComponent,
        HometwoFeedbackComponent,
        HometwoWhyChooseUsComponent,
        HometwoGetAQuoteComponent,
        HometwoServicesComponent,
        FunfactsComponent,
        HometwoWelcomeComponent,
        HometwoFutureComponent,
        HometwoBannerComponent,
        HomeDemoThreeComponent,
        HomethreeBannerComponent,
        HomethreeFutureComponent,
        HomethreeCompanyComponent,
        HomethreeServicesComponent,
        HomethreeWhyChooseUsComponent,
        HomethreeGetAQuoteComponent,
        HomethreeFaqComponent,
        HomethreeFeedbackComponent,
        AboutUsPageComponent,
        // New
        LoginPageComponent,
        RegisterPageComponent,
        PurchasePageComponent,
        PaymentPageComponent,
        ClaimFormComponent,
        ClaimListComponent,
        CertificatePageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        NgxScrollTopModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        SweetAlert2Module.forRoot(),
        StoreModule.forRoot({ count: counterReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
        }),
        MaterialModule
        // StoreModule.forRoot();
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }