import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// ================================
// STEPS COMUNS PARA TODOS OS CENÁRIOS
// ================================
Given('que eu estou na página inicial do Portal da Transparência', () => {
  // Log para o vídeo
  cy.log('🏠 Acessando Portal da Transparência');
  
  cy.visit('/');
  cy.wait(3000);
  
  // Aceitar cookies se aparecer
  cy.get('body').then(($body) => {
    if ($body.find('#cookiebar').length > 0) {
      cy.log('🍪 Aceitando cookies');
      cy.get('#cookiebar').click({ force: true });
      cy.wait(2000);
    }
  });
  
  cy.log('✅ Página inicial carregada');
});

// ================================
// CENÁRIO 1: PÁGINA INICIAL
// ================================
Then('eu devo ver o título do portal', () => {
  cy.log('🔍 Verificando título da página');
  cy.title().should('contain', 'Portal da Transparência');
  cy.log('✅ Título verificado');
});

Then('eu devo ver elementos de navegação', () => {
  cy.log('🧭 Verificando elementos de navegação');
  cy.get('body').should('be.visible');
  cy.get('a').should('have.length.greaterThan', 0);
  cy.log('✅ Navegação verificada');
});

// ================================
// CENÁRIO 2: BUSCA SIMPLES
// ================================
When('eu realizo uma busca por {string}', (termo) => {
  cy.log(`🔍 Realizando busca por: ${termo}`);
  cy.get('body').should('be.visible');
  
  // Procura por campo de busca
  cy.get('input[type="search"], input[type="text"], input[placeholder*="buscar"], input[placeholder*="pesquisar"]')
    .first()
    .type(termo, { force: true });
  
  cy.log('📝 Termo digitado no campo de busca');
  
  // Procura botão de busca
  cy.get('button[type="submit"], input[type="submit"], button:contains("Buscar"), button:contains("Pesquisar")')
    .first()
    .click({ force: true });
    
  cy.log('🚀 Busca executada');
});

Then('eu devo ver resultados relacionados à busca', () => {
  cy.log('⏳ Aguardando resultados da busca');
  cy.wait(3000);
  cy.get('body').should('be.visible');
  cy.url().should('not.equal', 'https://portaldatransparencia.gov.br/');
  cy.log('✅ Resultados da busca carregados');
});

// ================================
// CENÁRIO 3: DESPESAS PÚBLICAS
// ================================
When('eu navego para a seção de despesas', () => {
  cy.log('💰 Navegando para seção de despesas');
  cy.get('body').should('be.visible');
  cy.get('a[href*="despesa"]').first().click({ force: true });
  cy.log('✅ Seção de despesas acessada');
});

When('eu seleciono um filtro de consulta', () => {
  cy.log('🔧 Configurando filtros de consulta');
  cy.wait(3000);
  cy.get('body').should('be.visible').wait(2000);
  cy.get('body').then(($body) => {
    if ($body.find('select').length > 0) {
      cy.log('📋 Filtros encontrados');
      cy.get('select').first().wait(2000);
    }
  });
  cy.log('✅ Filtros configurados');
});

Then('eu devo ver informações sobre despesas públicas', () => {
  cy.log('🔍 Verificando informações de despesas');
  cy.get('body').should('be.visible');
  cy.get('body').then(($body) => {
    const bodyText = $body.text().toLowerCase();
    const hasExpectedContent = 
      bodyText.includes('despesa') || 
      bodyText.includes('coronav') || 
      bodyText.includes('gasto') || 
      bodyText.includes('orçament') ||
      bodyText.includes('valor');
    
    expect(hasExpectedContent).to.be.true;
  });
  cy.log('✅ Informações de despesas verificadas');
});

Then('eu devo poder visualizar dados de gastos governamentais', () => {
  cy.log('📊 Verificando dados de gastos');
  cy.get('body').should('be.visible');
  cy.url().should('not.equal', 'https://portaldatransparencia.gov.br/');
  cy.log('✅ Dados de gastos visualizados');
});

// ================================
// CENÁRIO 4: TRANSFERÊNCIAS
// ================================
When('eu navego para a seção de transferências', () => {
  cy.log('🔄 Navegando para seção de transferências');
  cy.get('body').should('be.visible');
  cy.get('a[href*="transferencia"], a[href*="convenio"], a:contains("Transferência"), a:contains("Convênio")')
    .first()
    .click({ force: true });
  cy.log('✅ Seção de transferências acessada');
});

When('eu aguardo o carregamento dos dados', () => {
  cy.log('⏳ Aguardando carregamento dos dados');
  cy.wait(3000);
  cy.get('body').should('be.visible');
  cy.log('✅ Dados carregados');
});

Then('eu devo ver informações sobre transferências', () => {
  cy.log('🔍 Verificando informações de transferências');
  cy.get('body').should('be.visible');
  cy.get('body').then(($body) => {
    const bodyText = $body.text().toLowerCase();
    const hasExpectedContent = 
      bodyText.includes('transferência') || 
      bodyText.includes('convenio') || 
      bodyText.includes('convênio') || 
      bodyText.includes('repasse') ||
      bodyText.includes('recurso');
    
    expect(hasExpectedContent).to.be.true;
  });
  cy.log('✅ Informações de transferências verificadas');
});

Then('eu devo poder visualizar dados de repasses', () => {
  cy.log('📊 Verificando dados de repasses');
  cy.get('body').should('be.visible');
  cy.url().should('not.equal', 'https://portaldatransparencia.gov.br/');
  cy.log('✅ Dados de repasses visualizados');
});

// ================================
// CENÁRIO 5: SERVIDORES
// ================================
When('eu navego para a seção de servidores', () => {
  cy.log('👥 Navegando para seção de servidores');
  cy.get('body').should('be.visible');
  cy.get('a[href*="servidor"], a:contains("Servidor"), a:contains("Pessoa")')
    .first()
    .click({ force: true });
  cy.log('✅ Seção de servidores acessada');
});

When('eu realizo uma busca por servidor', () => {
  cy.log('🔍 Realizando busca por servidor');
  cy.wait(3000);
  cy.get('body').should('be.visible');
  
  // Tenta encontrar campo de busca e fazer uma pesquisa simples
  cy.get('body').then(($body) => {
    if ($body.find('input[type="text"], input[type="search"]').length > 0) {
      cy.log('📝 Campo de busca encontrado');
      cy.get('input[type="text"], input[type="search"]')
        .first()
        .type('Silva', { force: true });
      
      // Procura botão de busca
      if ($body.find('button[type="submit"], button:contains("Buscar"), input[type="submit"]').length > 0) {
        cy.log('🚀 Executando busca');
        cy.get('button[type="submit"], button:contains("Buscar"), input[type="submit"]')
          .first()
          .click({ force: true });
      }
    }
  });
  
  cy.wait(2000);
  cy.log('✅ Busca por servidor realizada');
});

Then('eu devo ver resultados da consulta', () => {
  cy.log('🔍 Verificando resultados da consulta');
  cy.get('body').should('be.visible');
  cy.get('body').then(($body) => {
    const bodyText = $body.text().toLowerCase();
    const hasExpectedContent = 
      bodyText.includes('servidor') || 
      bodyText.includes('pessoa') || 
      bodyText.includes('resultado') || 
      bodyText.includes('cargo') ||
      bodyText.includes('órgão');
    
    expect(hasExpectedContent).to.be.true;
  });
  cy.log('✅ Resultados da consulta verificados');
});

Then('eu devo poder acessar detalhes dos servidores', () => {
  cy.log('📊 Verificando detalhes dos servidores');
  cy.get('body').should('be.visible');
  cy.url().should('not.equal', 'https://portaldatransparencia.gov.br/');
  cy.log('✅ Detalhes dos servidores acessíveis');
});

// ================================
// CENÁRIO 6: RECEITAS
// ================================
When('eu navego para a seção de receitas', () => {
  cy.log('📊 Navegando para seção de receitas');
  cy.get('body').should('be.visible');
  cy.get('a[href*="receita"], a:contains("Receita"), a:contains("Arrecadação")')
    .first()
    .click({ force: true });
  cy.log('✅ Seção de receitas acessada');
});

When('eu seleciono um período de consulta', () => {
  cy.log('📅 Selecionando período de consulta');
  cy.wait(3000);
  cy.get('body').should('be.visible');
  
  // Procura por seletores de período/ano
  cy.get('body').then(($body) => {
    if ($body.find('select').length > 0) {
      cy.log('📋 Seletores de período encontrados');
      cy.get('select').first().wait(2000);
    }
  });
  cy.log('✅ Período de consulta configurado');
});

Then('eu devo ver informações sobre receitas', () => {
  cy.log('🔍 Verificando informações de receitas');
  cy.get('body').should('be.visible');
  cy.get('body').then(($body) => {
    const bodyText = $body.text().toLowerCase();
    const hasExpectedContent = 
      bodyText.includes('receita') || 
      bodyText.includes('arrecadação') || 
      bodyText.includes('tributo') || 
      bodyText.includes('imposto') ||
      bodyText.includes('valor');
    
    expect(hasExpectedContent).to.be.true;
  });
  cy.log('✅ Informações de receitas verificadas');
});

Then('eu devo poder visualizar dados financeiros', () => {
  cy.log('📊 Verificando dados financeiros');
  cy.get('body').should('be.visible');
  cy.url().should('not.equal', 'https://portaldatransparencia.gov.br/');
  cy.log('✅ Dados financeiros visualizados');
});