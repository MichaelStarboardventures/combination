import styled from 'styled-components';

export const TagsStyled = styled.div<{
  selected: boolean;
  type?: 'tag' | 'card';
}>`
  cursor: pointer;
  & .tag {
    padding: 10px 25px;
    line-height: 25px;
    font-size: 10px;
    cursor: pointer;

    ${({ selected }) =>
      `
        color: ${selected ? '#fff' : '#52575C'};
        background: ${selected ? '#706BFF' : '#F6F6F6'}
      `}
  }

  & .card {
    width: 300px;
    padding: 0 25px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    transition: height 0.5s;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    ${({ selected }) =>
      `   
        height: ${selected ? '32px' : '28px'};
        line-height: ${selected ? '32px' : '28px'};
        background: ${selected ? '#706BFF' : '#C3C3C3'}
    `}
  }
`;

export const TagsCardStyled = styled.div<{ selected: boolean }>`
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  transition: height 0.5s;

  ${({ selected }) =>
    `   
        height: ${selected ? '32px' : '28px'};
        line-height: ${selected ? '32px' : '28px'};
        background: ${selected ? '#706BFF' : '#C3C3C3'}
    `}
`;

export const TagsGroupStyled = styled.div<{ type: 'tag' | 'card' }>`
  display: flex;
  height: ${({ type }) => `${type === 'tag' ? '45px' : '52px'}`};
  align-items: end;
`;
