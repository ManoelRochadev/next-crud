import {  Flex, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import Client from "../core/Client";
import { ButtonComponent } from "./Button";
import { InputComponent } from "./Input";

interface FormProps {
 client: Client;
 cancel?: () => void;
 clientChange?: (client: Client) => void;
}

export function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age);

  return (
    <FormControl>
      {id && <InputComponent text="Id" type="text" value={props.client.id}/>}
      <InputComponent text="Nome" type="text" onChange={setName} value={name}/>
      <InputComponent text="Idade" type="number" onChange={setAge} value={age}/>
      <Flex as="div" justifyContent="flex-end" mt="3">
        <ButtonComponent color="blue" mr="2" onClick={() => props.clientChange?.(new Client(name, age, id))}>
          {id ? 'Atualizar' : 'Cadastrar'}
        </ButtonComponent>
        <ButtonComponent onClick={props.cancel} color="gray" >Cancelar</ButtonComponent>
      </Flex>
    </FormControl>
  );
}