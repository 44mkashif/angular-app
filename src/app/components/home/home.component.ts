import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols = 3;
  selectedCategory: string | null = null;

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }

  onCategorySelected(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
  }
}
