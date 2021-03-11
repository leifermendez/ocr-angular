import {Component, OnDestroy, OnInit} from '@angular/core';
import {OcrService} from '../ocr.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-out-put-text',
  templateUrl: './out-put-text.component.html',
  styleUrls: ['./out-put-text.component.scss']
})
export class OutPutTextComponent implements OnInit, OnDestroy {
  private listSubscribers: Subscription[];
  public textOut: string;

  constructor(private ocrService: OcrService) {
  }

  ngOnInit(): void {
    this.listObserver();
  }

  ngOnDestroy(): void {
    this.listSubscribers.forEach(a => a.unsubscribe());
  }


  listObserver = () => {
    const observer1$ = this.ocrService.cbText
      .subscribe(({text}) => {
        this.textOut = text;
      });

    this.listSubscribers = [observer1$];
  };

}
