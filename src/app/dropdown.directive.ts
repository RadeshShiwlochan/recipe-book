import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  private isOpened = false;

  @HostBinding('class.open') get openDropDown() {
    return this.isOpened;
  }

  @HostListener('click') open() {
    return this.isOpened = true;
  }

  @HostListener('mouseleave') closeDropDown() {
    return this.isOpened = false;
  }



  constructor() { }

}
