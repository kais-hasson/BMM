import { Component } from '@angular/core';
import {paragraphItem} from "../../config/paragraph";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-color-models',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './color-models.html',
  styleUrl: './color-models.scss'
})
export class ColorModels {

    protected readonly theParagraph = paragraphItem;
}
