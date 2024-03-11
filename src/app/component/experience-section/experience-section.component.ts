import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProjectComponent } from '../dialog-project/dialog-project.component';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  jsData = [
    {
      name: 'travSIM',
      img: 'travsim.png',
      tools: ['Shopware', 'JavaScript', 'HTML', 'SCSS', 'Bootstrap'],
    },
    {
      name: 'Join - Kanbanboard',
      img: 'join.png',
      text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tools: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Loopback'],
    },
    {
      name: 'bediKids',
      img: 'bedikids.png',
      tools: ['WordPress', 'Angular', 'HTML', 'SCSS', 'TypeScript', 'Loopback'],
    },
    {
      name: 'Alien Zapper',
      img: 'alien-zapper.png',
      tools: ['JavaScript', 'OOP'],
      github: 'https://github.com/RuyRun/JSGame',
      site: 'https://alien-zapper.kevinwyatt.de/'
    },
    {
      name: 'Pokedex',
      img: 'pokedex.png',
      tools: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/RuyRun/pokedex',
      site: 'https://pokedex.kevinwyatt.de/'
    },
  ];
  ngOnInit() {}

  openModal(id:any) {
    let data = this.jsData[id];
    this.dialog.open(DialogProjectComponent, {
      data: data,
      width: '600px',
      backdropClass: 'bg-color',
      autoFocus: false
      // panelClass: 'bg-color',
    })
  }
}
