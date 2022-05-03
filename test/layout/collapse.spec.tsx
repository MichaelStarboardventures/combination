import React from 'react';
import { act, render } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Layout } from '../../src';

describe('layout onCollapse', () => {
  it('传入onCollapse回调，点击菜单折叠时应该被执行', async function () {
    const fn = jest.fn();
    const { getByTestId } = render(<Layout onCollapse={fn}>onCollapse</Layout>);

    const actionDom = await getByTestId('action');

    act(() => {
      userEvent.click(actionDom);
    });

    expect(fn).toBeCalled();
  });
});
