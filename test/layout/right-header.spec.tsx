import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../../src';

describe('right header content', () => {
  it(`rightHeaderRender渲染内容为"right header"，结果应该为"right header"`, async function () {
    const { getByTestId } = render(
      <Layout rightContentRender={() => <>right header</>}>
        right header content
      </Layout>
    );
    const result = await getByTestId('rightHeaderContainer');

    expect(result.textContent).toBe('right header');
  });
});
