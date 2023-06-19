import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;

  @Output() selectedCategory = new EventEmitter<string>();

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

  onCategorySelected(selectedCategory: string): void {
    this.selectedCategory.emit(selectedCategory);
  }

  getCategories(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((_categories) => {
        this.categories = _categories;
      });
  }
}
