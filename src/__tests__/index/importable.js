import { renderProp, childrenRenderProp } from '../../../';

describe('index exports', () => {
  test('ability to be imported', () => {
    expect(renderProp).toBeDefined();
    expect(childrenRenderProp).toBeDefined();
  });
});
