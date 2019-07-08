import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "menu/home", pathMatch: "full" },
  { path: "menu", loadChildren: "./menu/menu.module#MenuPageModule" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "detail",
    loadChildren: "./missions/detail/detail.module#DetailPageModule"
  },
  {
    path: "detail",
    loadChildren: "./missions/detail/detail.module#DetailPageModule"
  },  { path: 'detail', loadChildren: './launches/past-launches/detail/detail.module#DetailPageModule' },
  { path: 'past-detail', loadChildren: './launches/past-launches/past-detail/past-detail.module#PastDetailPageModule' },
  { path: 'upcoming-detail', loadChildren: './launches/upcoming-launches/upcoming-detail/upcoming-detail.module#UpcomingDetailPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
