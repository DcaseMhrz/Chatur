import { React } from "react";
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Signup from '../components/Signup'
import Login from '../components/Login'


const Home = () => {
    // const [chats, setchats] = useState([]);

    // const fetchChat = async () => {
    //     const data = await fetch("api/chats")
    //     const parsedData = await data.json()

    //     setchats(parsedData.chats)
    //     console.log(chats)
    // };
    // useEffect(() => {
    //     fetchChat()


    // }, [])

    return (
        <Container maxW='xl' centerContent>
            <Box
                d='flex'
                textAlign={'center'}
                p={3}
                bg='white'
                w={'100%'}
                margin={'40px 0 15px 0'}
                borderRadius='lg'
                borderWidth={'1px'}
            >
                <Text fontSize={'4xl'} fontFamily={'work Sans'}>ChatuR</Text>
            </Box>
            <Box
                bg='white'
                w={'100%'}
                p='4'
                borderRadius={'lg'}
                borderWidth='1px'
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList mb={'1em'}>
                        <Tab width={'50%'}>Login</Tab>
                        <Tab width={'50%'}>Sign Up</Tab>
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
        </Container >
    );
};

export default Home;
