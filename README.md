# 🔍 Projeto QA - Portal da Transparência

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina de **Qualidade de Software**, com o objetivo de implementar testes automatizados end-to-end (E2E) para o Portal da Transparência do Governo Federal brasileiro.

**Desenvolvedores:**
- Waldir Pontual
- Jéssica Furtado

## 🎯 Objetivo

Garantir a qualidade e funcionalidade do Portal da Transparência através de testes automatizados que verificam:
- Navegação básica
- Funcionalidades de busca
- Consulta de despesas públicas
- Consulta de transferências
- Busca de informações de servidores públicos
- Verificação de dados de receitas federais

## 🛠 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Cypress** - Framework de testes E2E
- **Cucumber** - BDD (Behavior Driven Development)
- **JavaScript** - Linguagem de programação
- **Gherkin** - Linguagem para especificação de cenários

## 📁 Estrutura do Projeto

```
projeto-qa-transparencia/
├── cypress/
│   ├── e2e/
│   │   ├── features/
│   │   │   └── portal_transparencia.feature      # Cenários de teste em Gherkin
│   │   └── step_definitions/
│   │       └── navegacao_steps.js                # Implementação dos steps
│   ├── fixtures/
│   │   └── example.json                          # Dados de teste
│   ├── screenshots/                              # Screenshots dos testes
│   ├── support/
│   │   ├── commands.js                           # Comandos customizados
│   │   └── e2e.js                                # Configurações globais
│   └── videos/                                   # Gravações dos testes
├── cypress.config.js                             # Configurações do Cypress
├── package.json                                  # Dependências e scripts
└── README.md                                     # Documentação do projeto
```

## 🎬 Funcionalidades Testadas

### 1. Página Inicial
- ✅ Verificação do título do portal
- ✅ Validação dos elementos de navegação

### 2. Sistema de Busca
- ✅ Busca simples por termos específicos
- ✅ Verificação de resultados de busca

### 3. Consulta de Despesas Públicas
- ✅ Navegação para seção de despesas
- ✅ Aplicação de filtros de consulta
- ✅ Visualização de dados de gastos governamentais

### 4. Transferências de Recursos
- ✅ Acesso à seção de transferências
- ✅ Carregamento de dados
- ✅ Visualização de informações de repasses

### 5. Servidores Públicos
- ✅ Navegação para seção de servidores
- ✅ Busca por servidor específico
- ✅ Acesso a detalhes dos servidores

### 6. Receitas Federais
- ✅ Consulta de receitas
- ✅ Seleção de período de consulta
- ✅ Visualização de dados financeiros

## 🚀 Como Executar

### Pré-requisitos
- Node.js
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório do projeto
cd projeto-qa-transparencia

# Instale as dependências
npm install
```

### Execução dos Testes

#### Modo Interativo (Cypress GUI)
```bash
npx cypress open
```

#### Modo Headless (linha de comando)
```bash
npx cypress run
```

#### Executar testes específicos
```bash
npx cypress run --spec "cypress/e2e/features/portal_transparencia.feature"
```

## ⚙️ Configurações

O projeto está configurado com:

- **BaseURL**: `https://portaldatransparencia.gov.br`
- **Gravação de vídeo**: Habilitada
- **Screenshots**: Habilitadas em caso de falha
- **Viewport**: 1280x720 para qualidade de gravação
- **Timeouts**: Configurados para estabilidade
- **Retry**: 1 tentativa em modo de execução

## 📊 Relatórios

Os testes geram automaticamente:
- **Vídeos** das execuções (pasta `cypress/videos/`)
- **Screenshots** em caso de falha (pasta `cypress/screenshots/`)
- **Logs detalhados** no console do Cypress

## 🎯 Estratégia de Testes

### BDD (Behavior Driven Development)
Os cenários são escritos em linguagem natural usando Gherkin, facilitando:
- Comunicação entre stakeholders
- Documentação viva dos requisitos
- Manutenibilidade dos testes

### Padrões Implementados
- **Page Object Model** implícito através dos steps
- **Logs visuais** para acompanhamento da execução
- **Tratamento de elementos dinâmicos**
- **Aguardos inteligentes** para carregamento de páginas

## 🔧 Manutenção

### Comandos Customizados
- `acceptCookies()` - Aceita cookies automaticamente
- `closeModals()` - Fecha modais que podem aparecer

### Tratamento de Erros
- Ignoração de erros JavaScript do site testado
- Tratamento de elementos que podem não estar visíveis
- Verificações condicionais para elementos opcionais

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como atividade prática da disciplina de Qualidade de Software, demonstrando:

- **Aplicação de conceitos de QA**
- **Implementação de testes automatizados**
- **Uso de ferramentas modernas de teste**
- **Práticas de BDD**
- **Documentação técnica**

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato com os desenvolvedores:
- Waldir Pontual
- Jéssica Furtado

---

**Portal da Transparência**: `https://portaldatransparencia.gov.br`

> Este projeto tem fins educacionais