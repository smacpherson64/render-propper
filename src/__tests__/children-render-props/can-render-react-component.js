import * as React from 'react';
import * as R from 'ramda';
import { render } from 'react-testing-library';
import { childrenRenderProp } from '../../lib/children-render-prop';

describe('renderProp', () => {
  test('can render a react component - implicitly', () => {
    const ChildrenRenderProp = childrenRenderProp(R.prop('test'));

    const { getByText } = render(
      <ChildrenRenderProp test="output">
        {result => <div>{result}</div>}
      </ChildrenRenderProp>
    );

    expect(getByText('output')).toHaveTextContent('output');
  });

  test('can render a react component - explicitly', () => {
    const ChildrenRenderProp = childrenRenderProp(R.prop('test'));

    const { getByText } = render(
      <ChildrenRenderProp
        test="output"
        children={result => <div>{result}</div>}
      />
    );

    expect(getByText('output')).toHaveTextContent('output');
  });
});
