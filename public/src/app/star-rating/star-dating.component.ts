import { Component, OnInit, forwardRef, Input, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]

})
export class StarRatingComponent implements ControlValueAccessor{

  stars: boolean[] = Array(5).fill(true);

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 1 : 1;
  }

  // Function to call when the rating changes.
  onChange = (rating: number) => {
  };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {
  };


  get value(): number {
    if(!this.disabled){
      return this.stars.reduce((total, starred) => {
        return total + (starred ? 1 : 0);
      }, 0);
    }
  }
  rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }

  writeValue(rating: number): void {
    if (!this.disabled) {
      this.stars = this.stars.map((_, i) => rating > i);
      this.onChange(this.value);
    }

  }

  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
