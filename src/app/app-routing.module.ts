import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BusinessInsurancePageComponent } from './components/pages/business-insurance-page/business-insurance-page.component';
import { CarInsurancePageComponent } from './components/pages/car-insurance-page/car-insurance-page.component';
import { ClaimsPageComponent } from './components/pages/claims-page/claims-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { HealthInsurancePageComponent } from './components/pages/health-insurance-page/health-insurance-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { LifeInsurancePageComponent } from './components/pages/life-insurance-page/life-insurance-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { RecoverPasswordPageComponent } from './components/pages/recover-password-page/recover-password-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';

// Authentication
import { LoginPageComponent } from './components/pages/authentication/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/authentication/register-page/register-page.component';


const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about-us', component: AboutUsPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'business-insurance', component: BusinessInsurancePageComponent},
    {path: 'health-insurance', component: HealthInsurancePageComponent},
    {path: 'life-insurance', component: LifeInsurancePageComponent},
    {path: 'car-insurance', component: CarInsurancePageComponent},
    {path: 'blog-grid', component: BlogGridPageComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'claims', component: ClaimsPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'my-account', component: MyAccountPageComponent},
    {path: 'recover-password', component: RecoverPasswordPageComponent},
    {path: 'contact-us', component: ContactPageComponent},
    // Authentication
    {path: 'register', component: RegisterPageComponent},
    {path: 'login', component: LoginPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }