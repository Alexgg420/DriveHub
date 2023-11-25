import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Anuncio } from 'src/app/core/interfaces/anuncios';

@Component({
  selector: 'app-anuncio-info',
  templateUrl: './anuncio-info.component.html',
  styleUrls: ['./anuncio-info.component.scss'],
})
export class AnuncioInfoComponent implements OnInit {

  @Input() anuncio!:Anuncio;
  @Output() onCardClicked:EventEmitter<void> = new EventEmitter<void>();
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {}

  onCardClick(){
    this.onCardClicked.emit();
  }
}
