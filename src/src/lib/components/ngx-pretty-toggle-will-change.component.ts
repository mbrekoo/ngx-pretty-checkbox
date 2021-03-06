// tslint:disable:use-host-property-decorator

import { Input, ElementRef, Component, HostBinding, SimpleChanges, OnChanges, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxColor, PrettyCheckBoxToggleType } from '../model/interfaces';
import { DEFAULT_PREFIX, DEFAULT_OUTLINE_PREFIX } from '../model/params';
import { getColorClassName } from '../utility';

@Component({
  selector: 'ngx-p-toggle[will-change], p-toggle[will-change]',
  template: `
    <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
    <label><ng-content></ng-content></label>
  `,
  host: {
    class: 'state'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPrettyToggleWillChangeComponent implements OnChanges {

  @Input() type: PrettyCheckBoxToggleType;

  @HostBinding(`class.${DEFAULT_PREFIX}on`)
  get isToggleOn() { return this.type === PrettyCheckBoxToggleType.On; }

  @HostBinding(`class.${DEFAULT_PREFIX}off`)
  get isToggleOff() { return this.type === PrettyCheckBoxToggleType.Off; }


  @Input() color: PrettyCheckboxColor;
  @Input() outline = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.color || changes.outline) {

      const oldClass =
        getColorClassName(
          changes.color ? changes.color.previousValue : this.color,
          changes.outline ? changes.outline.previousValue : null
        );

      const newClass =
        getColorClassName(
          changes.color ? changes.color.currentValue : this.color,
          changes.outline ? changes.outline.currentValue : null
        );

      this.renderer.removeClass(this.el.nativeElement, oldClass);
      this.renderer.addClass(this.el.nativeElement, newClass);
    }
  }

}
