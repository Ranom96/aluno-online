describe('Adicionando um requerimento de disciplina Manutenção de Software', () => {
  it('passes', () => {
    cy.visit('localhost:3000/requerimentos');

    cy.get('.btn')
      .click()
      .then(() => {
        cy.get('#inputDisciplina').select('ADS030 - Manutenção de Software e DevOps');
        cy.get('#inputProva').select('A1');
        cy.get('#inputArgumentacao').type('Teste de argumentação', { delay: 20 });
        cy.get('.btn-danger').click();

        cy.get(':nth-child(6) > .col-md-5').should('be.visible');
      });
  });
});

describe('Adicionando um requerimento de disciplina Construção de Frontend ', () => {
  it('passes', () => {
    cy.visit('localhost:3000/requerimentos');

    cy.get('.btn')
      .click()
      .then(() => {
        cy.get('#inputDisciplina').select('ADS032 - Construção de Frontend');
        cy.get('#inputProva').select('A2');
        cy.get('#inputArgumentacao').type('Outro teste de argumentação', { delay: 20 });
        cy.get('.btn-danger').click();

        cy.get('.col-md-5').should('be.visible');
      });
  });
});

describe('Testando funcionalidade do botão desistir', () => {
  it('passes', () => {
    cy.visit('localhost:3000/requerimentos');

    cy.get('.btn')
      .click()
      .then(() => {
        cy.get('#inputDisciplina').select('ADS032 - Construção de Frontend');
        cy.get('#inputProva').select('A2');
        cy.get('#inputArgumentacao').type('Outro teste de argumentação', { delay: 20 });

        cy.get('.btn-light').click();

        cy.url().should('eq', 'http://localhost:3000/requerimentos');
      });
  });
});