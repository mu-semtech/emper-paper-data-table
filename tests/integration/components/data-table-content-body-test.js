import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-table-content-body', 'Integration | Component | data table content body', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{data-table-content-body}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#data-table-content-body}}
      template block text
    {{/data-table-content-body}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
