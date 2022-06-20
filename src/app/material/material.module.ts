import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatProgressBarModule} from '@angular/material/progress-bar';

const data = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  CommonModule
];
@NgModule({
  declarations: [],
  imports: data,
  exports: data
})
export class MaterialModule { }
