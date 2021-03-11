import {Component, OnInit} from '@angular/core';
import {OcrService} from '../ocr.service';

@Component({
  selector: 'app-home-file',
  templateUrl: './home-file.component.html',
  styleUrls: ['./home-file.component.scss']
})
export class HomeFileComponent implements OnInit {
  listImages = [
    {
      src: 'banner.jpeg'
    },
    {
      src: 'eng_bw.png'
    },
    {
      src: 'example-1.PNG'
    }
  ];

  constructor(private ocrService: OcrService) {
  }

  ngOnInit(): void {
  }

  clickImage = (image) => {
    this.ocrService.cbImage.emit(image);
  };
}
