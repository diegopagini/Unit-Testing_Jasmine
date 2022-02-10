import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-with-methods',
  templateUrl: './component-with-methods.component.html',
  styleUrls: ['./component-with-methods.component.scss'],
})
export class ComponentWithMethodsComponent implements OnInit {
  text: string;

  ngOnInit(): void {
    this.text = 'test';
  }

  changeText(text: string) {
    this.text = text;
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  destructureEmoji(emoji: string): any[] {
    return [...emoji];
  }
}
