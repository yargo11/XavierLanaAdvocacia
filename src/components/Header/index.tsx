import React from 'react';
import {
    Flex, Menu, MenuButton, Image, Text, Divider, Center, Box, Icon, useMediaQuery, useDisclosure, Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react';
import { FiLinkedin, FiMenu } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Header(props) {
    const [isSmallerThan768] = useMediaQuery("(max-width: 768px)")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Flex
            as="header"
            w='100%'
            direction='column'
            color='gray.50'
        >
            <Image src={`/images/${props.coverImg}`} alt='Xavier e Lana Advocacia' maxH={429} objectFit='cover' />
            <Flex
                bg='#444444'
                h={114}
                justify='space-around'
                // w={{
                //     '2xl': 1140,
                //     xl: '75%',
                // }}
                maxW={1140}
                w='100%'
                m='auto'
                mt={-57}
                className={styles.menu}
            // color='#d1ab86'
            >
                {
                    isSmallerThan768 ?
                        <Menu >
                            <MenuButton as='a' href='/' className={styles.menuButton}>
                                <Image src='/images/Logo_Oficial-03.png' alt='logo' w={291} objectFit='cover' />
                            </MenuButton>
                            <MenuButton as='button' ref={btnRef} onClick={onOpen} >
                                <Icon as={FiMenu} />
                            </MenuButton>

                        </Menu>
                        :
                        <Menu >
                            <MenuButton as='a' href='/' className={styles.menuButton}>
                                <Image src='/images/Logo_Oficial-03.png' alt='logo' w={291} objectFit='cover' />
                            </MenuButton>
                            <MenuButton as='a' href='/escritorio' className={styles.menuButton} >
                                O Escritório
                            </MenuButton>
                            <MenuButton as='a' href='/areas' className={styles.menuButton}>
                                Áreas de atuação
                            </MenuButton>
                            <MenuButton as='a' href='/equipe' className={styles.menuButton}>
                                Equipe
                            </MenuButton>
                            <MenuButton as='a' href='/contato' className={styles.menuButton}>
                                Contato
                            </MenuButton>
                        </Menu>

                }
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        {/* <DrawerHeader>
                            <Image src='/images/Logo_Oficial-02.png' alt='logo' w={291} objectFit='cover' />
                        </DrawerHeader> */}

                        <DrawerBody>
                            <Menu >
                                <MenuButton as='a' href='/' className={styles.menuButton}>
                                    <Image src='/images/Logo_Oficial-02.png' alt='logo' w={291} objectFit='cover' />
                                </MenuButton>
                                <MenuButton as='a' href='/escritorio' fontSize='100px' className={styles.menuButton} >
                                    O Escritório
                                </MenuButton>
                                <MenuButton as='a' href='/areas' className={styles.menuButton}>
                                    Áreas de atuação
                                </MenuButton>
                                <MenuButton as='a' href='/equipe' className={styles.menuButton}>
                                    Equipe
                                </MenuButton>
                                <MenuButton as='a' href='/contato' className={styles.menuButton}>
                                    Contato
                                </MenuButton>
                            </Menu>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
            <Flex
                maxW={1140}
                w='100%'
                justify='flex-end'
                m='auto'
                align='center'
                my={4}
                color='gray.800'
            >
                <Text>Português</Text>
                <Center h={6} mx={4}>
                    <Divider orientation="vertical" borderRightWidth={1} borderRightColor='gray.800' />
                </Center>
                <Text> English</Text>
                <Box mx={4} as='a' href='https://www.linkedin.com/' target='_blank'>
                    <Icon as={FiLinkedin} w={8} h={8} color='#2867B2'
                        _hover={{
                            fill: '#2867B2'
                        }}
                    />
                </Box>
            </Flex>
            <Divider mb={12} />
        </Flex>
    )
}