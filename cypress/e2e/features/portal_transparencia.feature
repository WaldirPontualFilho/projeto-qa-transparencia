Feature: Navegação no Portal da Transparência
  Como um cidadão interessado em transparência pública
  Eu quero navegar pelo Portal da Transparência
  Para acessar informações sobre gastos públicos

  Scenario: Acessar a página inicial do portal
    Given que eu estou na página inicial do Portal da Transparência
    Then eu devo ver o título do portal
    And eu devo ver elementos de navegação

  Scenario: Realizar busca simples no portal
    Given que eu estou na página inicial do Portal da Transparência
    When eu realizo uma busca por "educação"
    Then eu devo ver resultados relacionados à busca

  Scenario: Acessar consulta de despesas públicas
    Given que eu estou na página inicial do Portal da Transparência
    When eu navego para a seção de despesas
    And eu seleciono um filtro de consulta
    Then eu devo ver informações sobre despesas públicas
    And eu devo poder visualizar dados de gastos governamentais

  Scenario: Consultar transferências de recursos
    Given que eu estou na página inicial do Portal da Transparência
    When eu navego para a seção de transferências
    And eu aguardo o carregamento dos dados
    Then eu devo ver informações sobre transferências
    And eu devo poder visualizar dados de repasses

  Scenario: Buscar informações de servidores públicos
    Given que eu estou na página inicial do Portal da Transparência
    When eu navego para a seção de servidores
    And eu realizo uma busca por servidor
    Then eu devo ver resultados da consulta
    And eu devo poder acessar detalhes dos servidores

  Scenario: Verificar dados de receitas federais
    Given que eu estou na página inicial do Portal da Transparência
    When eu navego para a seção de receitas
    And eu seleciono um período de consulta
    Then eu devo ver informações sobre receitas
    And eu devo poder visualizar dados financeiros
