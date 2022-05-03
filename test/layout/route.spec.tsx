import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../../src';

describe('layout route', () => {
  it(`route渲染内容为route1，结果应该为route1`, async function () {
    const { getByTestId } = render(
      <Layout route={{ routes: [{ path: '/route1', name: 'route1' }] }}>
        route
      </Layout>
    );
    const result = await getByTestId('route');

    expect(result.textContent).toBe('route1');
  });

  it(`menuItemRender渲染内容为"item"，结果应该为item`, async function () {
    const { getByTestId } = render(
      <Layout
        route={{ routes: [{ path: '/route1', name: 'route1' }] }}
        menuItemRender={() => <>item</>}
      >
        menu item render
      </Layout>
    );
    const result = await getByTestId('route');

    expect(result.textContent).toBe('item');
  });
});
