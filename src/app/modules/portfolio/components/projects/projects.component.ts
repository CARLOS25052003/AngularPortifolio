import {Component, signal} from '@angular/core';
import {IProjects} from "../../interface/IProjects.interface";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/imgs/fotominha.jpeg',
      alt: 'Primeiro projeto',
      title:"Primeiro projeto",
      with: '100px',
      height:'51px',
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

}
