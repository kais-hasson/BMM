import { Component } from '@angular/core';
import {paragraphItem} from "../../config/paragraph";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-digital-images',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './digital-images.html',
  styleUrl: './digital-images.scss'
})
export class DigitalImages {

    protected readonly theParagraph = paragraphItem;
}
