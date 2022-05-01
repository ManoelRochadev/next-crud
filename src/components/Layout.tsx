import { Box, Flex } from "@chakra-ui/react";
import { Title } from "./Title";

interface LayoutProps {
  title: string;
  children: any;
}

export function Layout(props: LayoutProps) {
  return (
    <Flex bg="white" rounded="md" textColor="gray.800" w={["96%", "86%" ,"66%"]} fontSize={["4xl"]} flexDir="column">
      <Title>
        {props.title}
      </Title>
      <Box p="6">
        {props.children}
      </Box>
    </Flex>
  )
}