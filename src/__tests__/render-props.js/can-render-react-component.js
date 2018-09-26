import * as React from 'react';
import * as R from 'ramda';
import { render } from 'react-testing-library';
import { renderProp } from '../../lib/render-prop';

describe('renderProp', () => {
  test('can render a react component', () => {
    const ChildrenRenderProp = renderProp(R.prop('children'), R.prop('test'));

    const { getByText } = render(
      <ChildrenRenderProp test="output">
        {result => <div>{result}</div>}
      </ChildrenRenderProp>
    );

    expect(getByText('output')).toHaveTextContent('output');
  });
});
