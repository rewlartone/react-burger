describe('DnD works correctly', function() {
  before(function() {
    cy.visit('http://localhost:3000');
  });

  it('should open constructor page by default', function() {
    cy.contains('Соберите бургер');
  });
it('constructor page should contain ingredients', function() {
    cy.get('[class^=burger-ingredients_ingredients]').should('have.length.greaterThan', 0);
  });
  
  it('should drag and drop ingregients from ingredients to constructor', function() {
    cy.get('[class^=burger-ingredients_item]').eq([1]).trigger('dragstart');
    cy.get('[class^=burger-constructor_elements]').eq([0]).trigger('drop');
	cy.get('[class^=burger-ingredients_item]').eq([7]).trigger('dragstart');
    cy.get('[class^=burger-constructor_elements]').eq([0]).trigger('drop');
  });
  
  it('constructor should contains bun and meat', function() {
  cy.get('[class^=constructor-element]').eq([0]).contains('Флюоресцентная булка R2-D3');
  cy.get('[class^=constructor-element]').eq([1]).contains('Флюоресцентная булка R2-D3');
  cy.get('[class^=burger-constructor_element]').eq([0]).contains('Мясо бессмертных моллюсков Protostomia');
  });
    it('ingredients counters should increment', function() {
    cy.get('[class^=burger-ingredients_item]').eq([1]).first('class^=counter_counter__num').contains('2');
	cy.get('[class^=burger-ingredients_item]').eq([7]).first('class^=counter_counter__num').contains('1');
  });
}); 