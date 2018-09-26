import * as R from 'ramda';
import { childrenRenderProp } from '../../lib/children-render-prop';

describe('childrenRenderProp', () => {
  test('can render generic object', () => {
    const object = {
      children: input => input,
      output: 'output'
    };

    const exampleRenderProp = childrenRenderProp(R.prop('output'));
    const result = exampleRenderProp(object);

    expect(result).toBe(object.output);
  });
});
