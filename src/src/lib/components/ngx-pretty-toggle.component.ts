// tslint:disable:use-host-property-decorator

import { Input, ElementRef, Component, AfterViewInit, Renderer2, ChangeDetectionStrategy, Attribute } from '@angular/core';
import { PrettyCheckboxColor, PrettyCheckBoxToggleType } from '../model/interfaces';
import { DEFAULT_PREFIX, DEFAULT_OUTLINE_PREFIX } from '../model/params';
import { getColorClassName } from '../utility';

@Component({
  selector: 'ngx-p-toggle:not([will-change]), p-toggle:not([will-change])',
  template: `
    <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
    <label><ng-content></ng-content></label>
  `,
  host: {
    class: 'state'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPrettyToggleComponent implements AfterViewInit {

  @Input() color: PrettyCheckboxColor;
  @Input() outline = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Attribute('outline') private _outline = false,
    @Attribute('color')   private _color: PrettyCheckboxColor,
    @Attribute('type')   private _type: PrettyCheckBoxToggleType,
  ) { }

  ngAfterViewInit() {
    if (this._color) {
      this.renderer.addClass(this.el.nativeElement,
        `${DEFAULT_PREFIX}${this._color}${this._outline ? DEFAULT_OUTLINE_PREFIX : ''}`
      );
    }

    this.renderer.addClass(this.el.nativeElement, `${DEFAULT_PREFIX}${this._type}`);
  }

}
