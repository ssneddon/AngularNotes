import {Component, Input, ViewChild, ElementRef} from '@angular/core'


@Component({
    selector: 'simple-input',
    template: `<input type="text" class="formInput">`,
    styles:[`.formInput {width: 250px;`]
})
export class SimpleInputComponent {
    @Input() formId: string;

    constructor(){}

    closeModal() {
        this.containerEl.nativeElement.value = "new value"
    }
}
