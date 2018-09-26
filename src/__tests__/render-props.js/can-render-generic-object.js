import * as R from 'ramda';
import { renderProp } from '../../lib/render-prop';

describe('renderProp', () => {
  test('can render generic object', () => {
    const object = {
      test: input => input,
      output: 'output'
    };

    const exampleRenderProp = renderProp(R.prop('test'), R.prop('output'));
    const result = exampleRenderProp(object);

    expect(result).toBe(object.output);
  });
});
