import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAuthGuard } from './app.authguard'
import { AppComponent } from './app.component'

const routes: Routes = [
    { 
        path: '/', 
        canActivate: [AppAuthGuard], 
        data: { roles: ['view-profile'] }
    }
]

@NgModule({
providers: [AppAuthGuard],
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})

export class AppRoutingModule {}
