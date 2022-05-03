import React from 'react';
import { act, render } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Tags } from '../../src/tags';

describe('tags', () => {
  it('tags自定义内容，值为"tag1"，结果为"tag1"', async () => {
    const { getByTestId } = render(<Tags value={1}>tag1</Tags>);
    const result = await getByTestId('tags');

    expect(result.textContent).toBe('tag1');
  });

  it('tags group自定义内容，值为"tag group1"，结果为"tag group1"', async function () {
    const { getByText } = render(
      <Tags.Group>
        <Tags value={`1`}>tag group1</Tags>
        <Tags value={`2`}>tag group2</Tags>
      </Tags.Group>
    );

    const result = getByText('tag group1');

    expect(result).toBeTruthy();
  });

  it('tags group 回调，传入回调，点击tag时应该被执行', async function () {
    const fn = jest.fn();

    const { getByText } = render(
      <Tags.Group onClick={fn}>
        <Tags value={`1`}>tag group1</Tags>
        <Tags value={`2`}>tag group2</Tags>
      </Tags.Group>
    );

    const dom = await getByText('tag group1');

    act(() => {
      userEvent.click(dom);
    });

    expect(fn).toBeCalled();
  });
});
