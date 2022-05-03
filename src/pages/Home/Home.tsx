import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";

const Home = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        bg='white'
        w='100%'
        m='40px 0 15px 0'
        boxShadow='md'
        borderRadius='lg'
        borderWidth='0.2px'>
        <Text fontSize='3xl' letterSpacing='4px' textDecorationStyle='wavy'>
          CHAT APP
        </Text>
      </Box>
      <Box
        bg='white'
        w='100%'
        p={4}
        borderRadius='lg'
        borderWidth='0.6px'
        boxShadow='lg'>
        <Tabs isFitted variant='solid-rounded'>
          <TabList mb='1em'>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
