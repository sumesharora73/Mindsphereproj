import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachineoneComponent } from './machineone/machineone.component';
import { MachinetwoComponent } from './machinetwo/machinetwo.component';
import { MachinethreeComponent } from './machinethree/machinethree.component';

 
const routes: Routes = [{ path: '', redirectTo:'/machineone', pathMatch:'full'},
{ path: 'machineone', component: MachineoneComponent},
{ path: 'machinetwo', component: MachinetwoComponent },
{ path: 'machinethree', component: MachinethreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
