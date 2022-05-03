import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../../src';

describe('layout header', () => {
  it(`headerRender渲染内容为"header"，结果应该为header`, async function () {
    const { getByTestId } = render(
      <Layout headerRender={() => <>header</>}>header content</Layout>
    );
    const result = await getByTestId('headerContainer');

    expect(result.textContent).toBe('header');
  });
});
