import { Component } from '@angular/core';

@Component({
    selector: 'layout-sidenav',
    template: `
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" routerLinkActive="active">
                <a class="nav-link" routerLink="/basic" routerLinkActive="active">Basic</a>
            </li>
        </ul>
    `
})
export class LayoutSidenavComponent {
}


