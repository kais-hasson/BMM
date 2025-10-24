import { Component } from '@angular/core';
import { NgOptimizedImage} from '@angular/common';
import {defaultMenuItems} from '../config/menu-items';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
 navigationItems= defaultMenuItems
  constructor(public router: Router) {}
  isActive(url: string): boolean {
    // second param true => exact match
    return this.router.isActive(url, true);
  }
}
