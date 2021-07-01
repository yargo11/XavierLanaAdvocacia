import { Flex, Text, Divider, Heading, Spacer } from '@chakra-ui/react';


export function Footer() {
    return (
        <Flex direction='column' bg='#444444'>
            <Divider borderTopWidth={4} borderTopColor="#222" />
            <Flex direction='column' w='100%' h={230} maxW={1140} m='auto' my={8} color='gray.50'>
                <Heading>Localização</Heading>
                <Spacer />
                <Text>
                    Xavier Lima Advocacia Soc. de Advogados
                </Text>
                <Spacer />
                <Text>
                    Rua Felipe dos Santos 521, 9º andar – Lourdes | BH | MG | 30180-163
                </Text>
                <Spacer />
                <Text>
                    Telefone (31) 2515-6756
                </Text>
                <Spacer />
                <Text>
                    Email: erico@xavierlima.com.br
                </Text>
            </Flex>
        </Flex>
    )
}