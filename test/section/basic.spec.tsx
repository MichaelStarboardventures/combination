import React from 'react';
import { render } from '@testing-library/react';
import { Section } from '../../src';

describe('section', () => {
  it('自定义内容，值为"hello"，渲染结果应该为"hello"', async () => {
    const { getByText } = render(<Section>hello</Section>);
    const result = await getByText('hello');

    expect(result).toBeTruthy();
  });
});
