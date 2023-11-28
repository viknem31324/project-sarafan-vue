import { render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import AppButton from './AppButton.vue';

test('проверка варианта', () => {
  const button = render(AppButton, {
    props: {
      label: 'Кнопка',
      variant: 'accent',
    }
  });

  expect(button).toBe('accent');
});

describe('AppButton', () => {
  it('проверка лейбла', () => {
    const button = render(AppButton, {
      props: {
        label: 'Кнопка',
      }
    });

    button.getByText('Кнопка');
  });

  it('проверка дом элемента', () => {
    const button = render(AppButton, {
      props: {
        label: 'Кнопка',
      }
    });

    expect(button.html()).toBe(`<button class="app-button app-button--accent" type="button">Кнопка</button>`);
  });
});