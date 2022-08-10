import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CardComponentComponent } from "../card-component/card-component.component";
import { ChartOverviewComponent } from "../chart-overview/chart-overview.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { StackChartComponent } from "../stack-chart/stack-chart.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeroSectionComponent,
        CardComponentComponent,
     
        StackChartComponent,
        ChartOverviewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
        HeroSectionComponent,
        CardComponentComponent
    ],
})

export class HomeModule {}