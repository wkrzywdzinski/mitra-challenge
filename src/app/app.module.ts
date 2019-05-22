import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddlesectionComponent } from './middlesection/middlesection.component';
import { FeaturedeventsComponent } from './featuredevents/featuredevents.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, MiddlesectionComponent, FeaturedeventsComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
