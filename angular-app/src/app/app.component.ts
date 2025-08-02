import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="modern-container">
      <header class="header">
        <h1>{{ title }}</h1>
        <p class="subtitle">Aplicação Angular e Backend Java em perfeita sintonia.</p>
      </header>

      <section class="status-card">
        <h2>Status do Sistema</h2>
        <div class="status-item">
          <span class="indicator online"></span>
          <p>Backend Java</p>
          <p class="details">Rodando na porta 8080</p>
        </div>
        <div class="status-item">
          <span class="indicator online"></span>
          <p>Frontend Angular</p>
          <p class="details">Servido pelo Nginx na porta 8081</p>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2025 - Projeto Dockerizado</p>
      </footer>
    </main>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f0f4f8; /* Cor de fundo suave */
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .modern-container {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      padding: 2.5rem;
      max-width: 600px;
      width: 100%;
      text-align: center;
    }

    .header {
      margin-bottom: 2rem;
    }

    h1 {
      color: #334e68; /* Título com cor mais escura */
      font-size: 2.5rem;
      font-weight: 600;
      margin: 0;
    }

    .subtitle {
      color: #6a7c93; /* Subtítulo em cinza para contraste */
      font-size: 1.1rem;
      margin-top: 0.5rem;
    }
    
    .status-card {
      background-color: #f7fafc; /* Fundo do card em cinza claro */
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }
    
    h2 {
      color: #334e68;
      font-size: 1.5rem;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    .status-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    
    .status-item:last-child {
      margin-bottom: 0;
    }

    .indicator {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #cbd5e0; /* Cinza padrão */
    }

    .indicator.online {
      background-color: #2ac769; /* Verde para status online */
      box-shadow: 0 0 8px rgba(42, 199, 105, 0.5); /* Linha corrigida */
    }
    
    p {
      color: #4a5568;
      margin: 0;
    }

    .details {
      color: #718096;
      font-size: 0.9rem;
    }

    .footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 1.5rem;
    }
    
    .footer p {
      color: #a0aec0;
      font-size: 0.9rem;
    }
  `]
})
export class AppComponent {
  title = 'Frontend Angular';
}