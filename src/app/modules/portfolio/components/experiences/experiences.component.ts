import {Component, signal} from '@angular/core';
import {IExperiences} from "../../interface/IExperiences.interface";
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Front-end e Back-end Junior",
        p: "TJ-RO | JUN 2024 - Ativo ",
      },
      text:'<p> \n' +
        'Iniciei minha trajetória em junho e atualmente atuo como estagiário no Tribunal de Justiça na área de desenvolvimento. Possuo conhecimentos em HTML, Angular, CSS e SASS, que utilizo para colaborar em projetos e aprimorar minhas habilidades no desenvolvimento front-end.',
    },
    {
      summary: {
        strong: "Sistemas de informação",
        p: "Unisapiens | Jan 2023 - DEZ 2026",
      },
      text:'<p>Estudo na faculdade UniSapiens e o curso é de meu extremo interesse. Estou continuamente me adaptando e aprendendo mais sobre ele. No momento, estou focado em aprender o framework Angular, a linguagem Java, além de HTML e CSS.',
    },
    {
      summary: {
        strong: "Projetos | trabalhos",
        p: "Nenhum até o momento",
      },
      text:"<p>Até o momento, não realizei nenhum grande projeto."
    },

  ]);
}
