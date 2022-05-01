import { FormLabel, Input } from "@chakra-ui/react";

interface InputProps {
  type: 'text' | 'number';
  text: string;
  value: string | number;
  onChange?: (e: any) => void;
}

export function InputComponent(props: InputProps) {
  return (
    <div>
      <FormLabel mb="1" htmlFor="text">{props.text}</FormLabel>
      <Input 
      mb="2"
      onChange={e => props.onChange?.(e.target.value) }
      variant="filled" px="4" py="2"
      type={props.type} value={props.value} _focusVisible={{ bg: 'gray.100' }}
      />
    </div>
  );
}