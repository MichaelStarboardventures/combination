export type ButtonProps = {
  type?: 'default' | 'primary' | 'text' | 'link';
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
};
