import { renderProp } from '../../lib/render-prop';

describe('renderProp', () => {
  test('properly curries with one function (returns a function)', () => {
    const result = renderProp(jest.fn);

    expect(typeof result === 'function').toBe(true);
  });

  test('properly curries two functions (returns a function)', () => {
    const result = renderProp(jest.fn, jest.fn);

    expect(typeof result === 'function').toBe(true);
  });
});
