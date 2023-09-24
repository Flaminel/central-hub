import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

// Core Components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [SignInComponent, PageNotFoundComponent, ToolbarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatCardModule],
  exports: [SignInComponent, PageNotFoundComponent, ToolbarComponent, MatButtonModule, MatIconModule, MatCardModule],
})
export class CoreModule {}
