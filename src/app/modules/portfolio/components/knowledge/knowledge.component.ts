import {Component, signal} from '@angular/core';
import {IKnowlodge} from "../../interface/IKnowlodge.interface";

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
public arrayKnowledge = signal<IKnowlodge[]>([
  {
    src: "assets/icons/knowledgeicons/java.svg",
    alt: "icon do Java"
  },
  {
    src: "assets/icons/knowledgeicons/angular.svg",
    alt: "icon do Angular"
  },
  {
    src: "assets/icons/knowledgeicons/html5.svg",
    alt: "icon do HTML"
  },
  {
    src: "assets/icons/knowledgeicons/kotlin.svg",
    alt: "icon do Kotlin"
  },
  {
    src: "assets/icons/knowledgeicons/mongodb.svg",
    alt: "icon do MongoDB"
  },
  {
    src: "assets/icons/knowledgeicons/sass.svg",
    alt: "icon do Sass"
  }
    ])
}
