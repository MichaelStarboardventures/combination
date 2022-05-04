export interface ButtonProps {
  type?: 'default' | 'primary' | 'text' | 'link';
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}
