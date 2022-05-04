import React from 'react';
import { ButtonProps } from './button.props';

const getChilds = (props: ButtonProps) => {
  const { type = 'default', onClick, disabled = false, href } = props;

  switch (type) {
    case 'primary':
      return (
        <button onClick={onClick} disabled={disabled}>
          {props.children ?? 'primary'}
        </button>
      );

    default:
    //   break;
  }
};

export const Button: React.FC<ButtonProps> = (props) => {
  //   const { type = 'default', onClick, disabled = false, href } = props;

  getChilds(props);
  //   return type === 'link' ? (
  //     <a onClick={onClick} href={href}>
  //       {props.children ?? 'Link Text'}
  //     </a>
  //   ) : type === 'primary' ? (
  //     <button onClick={onClick} disabled={disabled}>
  //       {props.children ?? 'primary'}
  //     </button>
  //   ) : type === 'text' ? (
  //     <span>{props.children ?? 'text'}</span>
  //   ) : (
  //     <button onClick={onClick} disabled={disabled}>
  //       {props.children ?? 'default'}
  //     </button>
  //   );
};
