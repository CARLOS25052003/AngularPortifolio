import {Component, inject, signal} from '@angular/core';
import {IProjects} from "../../interface/IProjects.interface";

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {EDialogPanelClass} from "../../enum/EDialogPanelClass.enum";
import {DialogProjectsComponent} from "../dialog/dialog-projects/dialog-projects.component";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/imgs/Working.png',
      alt: 'Primeiro projeto',
      title: "Primeiro projeto em andamento",
      with: '120px',
      height: '120px',
      description:
        '<p> primeiro projeto',
      links: [
        {
          name: 'Primeiro projeto',
          href: 'https://www.primeiroprojeto.com',
        }
      ]
    }
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
