import { Button } from '@chakra-ui/react'
import Client from '../core/Client';

interface ButtonProps {
  color?: 'blue' | 'green' | 'gray';
  children: React.ReactNode;
  mr?: string;
  onClick?: () => void 
}

export function ButtonComponent(props: ButtonProps) {
  const color = props.color ?? 'blue';

  return (
    <Button
    size='md'
      fontSize='md'
      onClick={props.onClick}
      mr={props.mr}
      mb="4"
      textColor="white"
      bgGradient={`linear(to-r, ${color}.500, ${color}).700`}>
      {props.children}
    </Button>
  );
}
