import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../../../core/services/themService/theme-service';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-nav',
  imports: [RouterLink ],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.css',
})
export class MainNav {
    
    themeService = inject(ThemeService);
    isDarkMode =computed(() => this.themeService.isDarkMode()) ;
  
    
    isMenuOpen: boolean = false;
  
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
    
    toggleTheme() {
      this.themeService.toggleTheme();
    }

}
