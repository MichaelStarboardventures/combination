import React, { useMemo } from 'react';
import { ButtonProps } from './button.props';
import { ButtonStyled } from './style';

export const useButtonType = (type?: ButtonProps['type']) => {
  return useMemo(() => {
    switch (type) {
      case 'primary':
        return {
          backgroundColor: '#1890ff',
          color: '#fff',
        };
      case 'default':
        return {
          backgroundColor: '#fff',
        };
      default:
        return {
          backgroundColor: '#fff',
        };
    }
  }, [type]);
};

export const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  onClick,
  href,
  children,
}) => {
  if (type === 'text')
    return <span data-testid={'button-text'}>{children}</span>;
  if (type === 'link')
    return (
      <a href={href} data-testid={'button-link'}>
        {children}
      </a>
    );

  const buttonStyle = useButtonType(type);

  return (
    <ButtonStyled
      data-testid={'button'}
      disabled={disabled}
      style={{ ...buttonStyle }}
      onClick={onClick}
    >
      <span>{children}</span>
    </ButtonStyled>
  );
};
