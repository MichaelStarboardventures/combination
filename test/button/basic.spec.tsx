import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Button, useButtonType } from '../../src';

describe('basic button', () => {
  it(`button渲染自定义内容为"MyButton"，结果应该为"MyButton"`, async function () {
    const { getByTestId } = render(<Button>MyButton</Button>);
    const result = await getByTestId('button');

    expect(result.textContent).toBe('MyButton');
  });

  it(
    'type为primary时，返回结果应该为{\n' +
      "          backgroundColor: '#1890ff',\n" +
      "          color: '#fff',\n" +
      '        } ',
    async function () {
      const { result } = await renderHook(() => useButtonType('primary'));

      expect(result.current).toEqual({
        backgroundColor: '#1890ff',
        color: '#fff',
      });
    }
  );
});
