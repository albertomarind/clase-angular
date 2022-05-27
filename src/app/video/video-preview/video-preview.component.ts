import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.scss']
})
export class VideoPreviewComponent implements OnInit {

  @Input()
  image: string = 'https://i.ytimg.com/vi/EoZFxj-qhUY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDO0xToyEgqrA6b_t8VYwdbL3zIpA';

  @Input()
  title: string = '';

  @Input()
  timer: string = '00:00';

  @Input()
  channel: string | undefined = '';

  @Input()
  views: number = 1;

  @Input()
  date: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
