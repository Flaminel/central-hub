import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [LoginComponent, MatButtonModule, MatIconModule],
})
export class CoreModule {}
