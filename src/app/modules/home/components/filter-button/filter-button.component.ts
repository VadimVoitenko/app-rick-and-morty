import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { filterOptions } from './filter-options';

type FilterCategory = keyof typeof filterOptions;
type FilterField = (typeof filterOptions)[FilterCategory][number];

@Component({
  selector: 'app-filter-button',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    NgFor,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    FormsModule,
  ],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.scss',
})
export class FilterButtonComponent {
  isClick: boolean = false;
  isActiveFilter: boolean = false;
  filterCategories: FilterCategory[] = Object.keys(
    filterOptions
  ) as FilterCategory[];
  selectedCategory: FilterCategory | null = null;
  selectedField: FilterField | null = null;
  filterFields: FilterField[] = [];
  filterValue: string = '';

  @Output()
  search = new EventEmitter<{
    category: string;
    field: string;
    value: string;
  }>();

  onClick() {
    this.isClick = !this.isClick;
    this.isActiveFilter = !this.isActiveFilter;
    if (this.isClick) {
      this.selectedCategory = null;
      this.selectedField = null;
      this.filterFields = [];
      this.filterValue = '';
    }
  }

  onCategoryChange() {
    if (this.selectedCategory) {
      this.filterFields = filterOptions[
        this.selectedCategory
      ] as unknown as FilterField[];
      this.selectedField = null;
    } else {
      this.filterFields = [];
    }
  }

  applyFilter() {
    if (this.selectedCategory && this.selectedField && this.filterValue) {
      this.search.emit({
        category: this.selectedCategory,
        field: this.selectedField,
        value: this.filterValue,
      });
    }
  }
}
