import { Divider, Flex, Heading, Text } from '@chakra-ui/react'

interface TitleProps {
  children: string;
}

export function Title(props: TitleProps) {
  return (
    <Flex flexDir="column" justifyContent="center">
      <Heading as="h1" fontWeight="medium" fontSize={["2xl","4xl"]} px="5" py="2" >
        {props.children}
      </Heading>
      <Divider orientation='horizontal' borderBottom="8px" borderBottomColor="purple.500" />
    </Flex>
  );
}


