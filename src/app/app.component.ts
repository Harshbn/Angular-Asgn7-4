import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Asgn7-4';

  // public message:string="Marvellous Infosystems";

  // public Click()
  // {
  //     if(this.message=="Marvellous Infosystems")
  //     {
  //       this.message="Educating for better future";
  //     }
  //     else
  //     {
  //       this.message="Marvellous Infosystems";
  //     }
  // }

  public message:string="marvellous infosystems";
  public Tolowercase()
  {
    this.message="marvellous infosystems";
  }

  public Touppercase()
  {
    this.message="MARVELLOUS INFOSYSTEMS";
  }
}
