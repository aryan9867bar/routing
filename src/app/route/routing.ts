import { Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ContactComponent}from "../contact/contact.component";
 
export const routes:Routes = [
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"about/:id",
        component:AboutComponent
    },
    {
        path:"",
        redirectTo:"contact",
        pathMatch:"full"
    }
]