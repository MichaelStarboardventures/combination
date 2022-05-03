import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../../src';

describe('layout', () => {
  it(`layout渲染内容为"hello layout"，结果应该为"hello layout"`, async function () {
    const { getByTestId } = render(<Layout>hello layout</Layout>);
    const result = await getByTestId('layout');

    expect(result.textContent).toBe('hello layout');
  });
});
