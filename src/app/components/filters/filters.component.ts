import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  categories = ['shoes', 'sports'];
  @Output() selectedCategory = new EventEmitter<string>();

  onCategorySelected(selectedCategory: string): void {
    this.selectedCategory.emit(selectedCategory);
  }
}
