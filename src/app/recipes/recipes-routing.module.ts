import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipeRoutes: Routes = [
    {path: '', component: RecipesComponent, children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}


    ]}
];
@NgModule({
    imports: [ RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class RecipesRoutingModule{

}