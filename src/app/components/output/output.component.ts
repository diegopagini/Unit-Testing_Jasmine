import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent {
  @Output() textEmitter = new EventEmitter<string>();

  onText(text: string): void {
    this.textEmitter.emit(text);
  }
}
