import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Projetos',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Registro de vendas',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'API de CEP quarkus',
            icon: 'pi pi-fw pi-align-center',
          },
        ],
      },
    ];
  }
}
