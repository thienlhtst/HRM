// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../../theme/shared/components/card/card.component";

@Component({
    selector: 'app-ui-color',
    standalone: true,
    templateUrl: './ui-color.component.html',
    styleUrls: ['./ui-color.component.scss'],
    imports: [CommonModule, CardComponent]
})
export default class UiColorComponent {}
