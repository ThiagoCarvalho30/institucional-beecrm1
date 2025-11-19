# Estrutura de Estilos

Esta pasta contém todos os arquivos CSS do projeto, organizados de forma modular para facilitar a manutenção e escalabilidade.

## 📁 Estrutura de Arquivos

```
styles/
├── variables.css          # Variáveis CSS (cores, espaçamentos, tipografia)
├── base.css              # Reset e estilos base
├── responsive.css        # Media queries globais
├── accessibility.css     # Estilos de acessibilidade
├── components/           # Componentes reutilizáveis
│   ├── header.css
│   ├── footer.css
│   ├── buttons.css
│   └── cards.css
└── pages/               # Estilos específicos de páginas
    ├── home.css
    ├── legal.css
    └── contact.css
```

## 🎨 Padrão Visual

### Páginas Legais (Termos de Uso e Política de Privacidade)

As páginas legais seguem um padrão visual consistente:

- **Classes principais:**
  - `.legal-page` - Container da página
  - `.legal-page__header` - Cabeçalho centralizado
  - `.legal-wrapper` - Container do conteúdo com card branco
  - `.legal-section` - Cada seção do documento
  - `.legal-contact` - Card de contato ao final

- **Características:**
  - Layout centralizado e limpo
  - Máximo de 900px de largura para melhor leitura
  - Separadores sutis entre seções
  - Tipografia otimizada para leitura longa
  - Responsivo em todos os dispositivos

## 🔧 Como Usar

### Adicionar novos estilos

1. **Para componentes globais:** Crie um arquivo em `components/`
2. **Para páginas específicas:** Crie um arquivo em `pages/`
3. **Importe no globals.css:** Adicione o import no arquivo principal

### Exemplo de import

```css
/* app/globals.css */
@import '../styles/components/seu-componente.css';
```

## 📱 Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Mobile pequeno:** < 480px

## 🎯 Convenções

- Use variáveis CSS para cores, espaçamentos e tipografia
- Siga o padrão BEM para nomenclatura de classes
- Mantenha especificidade baixa
- Priorize mobile-first quando possível
- Agrupe media queries no final de cada arquivo
