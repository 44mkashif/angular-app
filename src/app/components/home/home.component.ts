import { Component } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols = 3;
  selectedCategory: string | null = null;
  rowHeight: number = ROWS_HEIGHT[this.cols];

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onCategorySelected(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
  }
}
