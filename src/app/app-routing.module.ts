import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { CarInsurancePageComponent } from './components/pages/car-insurance-page/car-insurance-page.component';
import { ClaimsPageComponent } from './components/pages/claims-page/claims-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { RecoverPasswordPageComponent } from './components/pages/recover-password-page/recover-password-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';

// Authentication
import { LoginPageComponent } from './components/pages/authentication/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/authentication/register-page/register-page.component';
import { PurchasePageComponent } from './components/pages/purchase-page/purchase-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { ClaimFormComponent } from './components/pages/claim-form/claim-form.component';
import { ClaimListComponent } from './components/pages/claim-list/claim-list.component';
import { CertificatePageComponent } from './components/pages/certificate-page/certificate-page.component';


const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about-us', component: AboutUsPageComponent},

    {path: 'car-insurance', component: CarInsurancePageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'claims', component: ClaimsPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'my-account', component: MyAccountPageComponent},
    {path: 'recover-password', component: RecoverPasswordPageComponent},
    {path: 'contact-us', component: ContactPageComponent},
    // Authentication
    {path: 'register', component: RegisterPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'purchase', component: PurchasePageComponent},
    {path: 'payment', component: PaymentPageComponent},
    {path: 'claim-form', component: ClaimFormComponent},
    {path: 'claim-list', component: ClaimListComponent},
    {path: 'certificate', component: CertificatePageComponent}, // This line will remain down from the whole pages component list


    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }