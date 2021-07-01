import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Flex, Heading, Text } from '@chakra-ui/react'


export default function Escritorio() {
    return (
        <Flex direction='column'>
            <Header coverImg='img-escritorio.jpg' />
            <Flex direction='column' maxW={1140} w='100%' m='auto' my={8}>
                <Heading mb={4}>O Escritório</Heading>
                <Text fontSize='xl' lineHeight={1} my={2}>
                    Escritório nascido da fusão de expertises e experiências no mundo empresarial, buscamos as melhores
                    soluções técnico-jurídicas para uma prestação de serviços jurídicos de excelência adequada às
                    necessidades de cada um de nossos clientes.
                </Text>

                <Text fontSize='xl' lineHeight={1} my={2}>Nosso relacionamento com parceiros, clientes e prestadores de serviços está pautada no respeito,
                    confiança, comprometimento com as expectativas almejadas sempre pautada na ética.
                </Text>

                <Text  fontSize='xl' lineHeight={1} my={2}>Nosso propósito é prestar serviços de inteligência jurídica para impulsionar oportunidades ajudando
                    a preservar e criar valor para os negócios de nossos clientes.
                </Text>
            </Flex>
            <Footer />
        </Flex>
    )
}