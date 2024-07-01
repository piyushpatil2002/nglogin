import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular'
import { Tab1PageModule } from '../tab1/tab1.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab3PageModule } from '../tab3/tab3.module';

const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'tab1',
//         loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
//       },
//       {
//         path: 'tab2',
//         loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
//       },
//       {
//         path: 'tab3',
//         loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
//       },
//       {
//         path: 'tabs',
//         redirectTo: '/tabs/tab1',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/tabs/tab1',
//     pathMatch: 'full'
//   }
// ];

{
  path: 'tabs',
  component: TabsPage,
  children: [
    {
      path: 'tab1',
      // Use direct module reference
      loadChildren: () => Tab1PageModule
    },
    {
      path: 'tab2',
      // Use direct module reference
      loadChildren: () => Tab2PageModule
    },
    {
      path: 'tab3',
      // Use direct module reference
      loadChildren: () => Tab3PageModule
    },
    {
      path: '',
      redirectTo: '/tabs/tab1',
      pathMatch: 'full'
    }
  ]
},
{
  path: '',
  redirectTo: '/tabs/tab1',
  pathMatch: 'full'
}
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
// })

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'tabs',
        component: TabsPage,
        children: [
          {
            path: 'tab1',
            // Use direct module reference
            loadChildren: () => Tab1PageModule
          },
          {
            path: 'tab2',
            // Use direct module reference
            loadChildren: () => Tab2PageModule
          },
          {
            path: 'tab3',
            // Use direct module reference
            loadChildren: () => Tab3PageModule
          },
          {
            path: '',
            redirectTo: '/tabs/tab1',
            pathMatch: 'full'
          }
        ]
      }
    ]),
    Tab1PageModule, // Import Tab1PageModule here
    Tab2PageModule, // Import Tab2PageModule here
    Tab3PageModule, // Import Tab3PageModule here
  ],
  // declarations: [TabsPage]
})
export class TabsPageRoutingModule {}
