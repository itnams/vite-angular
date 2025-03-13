import { Routes } from "@angular/router";
import { SignalComponent } from "signal";
import { FeatureComponent } from "feature"
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'signal',
        pathMatch: 'full',
    },
    {
        path: 'signal',
        component: SignalComponent,
        pathMatch: 'full',
    },
    {
        path:"signal-store",
        component: FeatureComponent,
        pathMatch: 'full',
    }
]