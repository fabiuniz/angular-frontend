import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p>Aplicação Angular funcionando com sucesso!</p>
      <div class="status">
        <h3>Status da conexão com o backend:</h3>
        <p>Backend Java rodando na porta 8080</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      padding: 2rem;
      font-family: Arial, sans-serif;
    }
    
    h1 {
      color: #dd0031;
      margin-bottom: 1rem;
    }
    
    .status {
      background-color: #f0f0f0;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 2rem;
    }
    
    .status h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }
  `]
})
export class AppComponent {
  title = 'Frontend Angular';
}
