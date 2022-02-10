import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/spooky-logo-lg-tall.png"
        alt="Spooky Rentals Logo"
      />
    `);
    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/spooky-logo-lg-tall.png')
      .hasAttribute('alt', 'Spooky Rentals Logo');
  });

  test('clicking on the component toggles its size', async function (assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/spooky-logo-lg-tall.png"
        alt="Spooky Rentals Logo"
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
