import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Flex, Heading, Text, Box, Image, Spacer, Wrap, WrapItem } from '@chakra-ui/react'

import styles from './styles.module.scss'

export default function Equipe() {
    return (
        <Flex direction='column'>
            <Header coverImg='img-escritorio.jpg' />
            <Flex direction='column' maxW={1140} w='100%' m='auto' p={4}>
                <Heading mb={4}>Equipe</Heading>
                <Text fontSize='xl' lineHeight={1.25} textAlign='justify' mb={12}>
                    Nossos profissionais são capacitados e estão constantemente capacidatadas buscam constantemente estão
                    preparados para atender prontamente as mais diversas demandas.
                </Text>

                <Wrap flexDirection='row' justify='center'>
                    <WrapItem flexDirection='column' flex='1'>
                        <Heading fontSize='3xl' mb={4}>Érico Xavier Lima</Heading>
                        <Heading fontSize='2xl' mb={4}>Sócio Fundador</Heading>
                        <Text fontSize='xl' lineHeight={1.25} display='block' textAlign='justify'>
                            <Image src='/images/erico.jpeg' alt='Érico Xavier Lima' boxSize="280px" float='right' m={4} />
                            Reúne há 19 anos as melhores práticas na área empresarial com foco em Societário,
                            Fiscal/Tributário, Contencioso Cível, é Conselheiro de Administração pela Fundação Dom
                            Cabral-FDC ajudando empresas a desenvolver seus negócios no ambiente de Governança Corporativa
                            com segurança jurídica. Possui MBA em Direito da Economia e da Empresa pela Fundação Getúlio
                            Vargas-FGV, é membro do Instituto Brasileiro de Governança Corporativa – IBGC, membro do
                            Instituto Brasileiro de Direito Empresarial – IBRADEMP e membro da Comissão de Estudos
                            Permanentes sobre Compliance da OABMG.
                        </Text>
                    </WrapItem>
                    {/* <WrapItem >
                    </WrapItem> */}
                </Wrap>

                <Wrap flexDirection='row' mt={12} justify='center' className={styles.reverseWrap}>
                    {/* <WrapItem alignItems='center'>
                    </WrapItem> */}
                    <WrapItem flexDirection='column' flex='1'>
                        <Heading fontSize='3xl' mb={4} ml='auto'>Fernanda Lana</Heading>
                        <Heading fontSize='2xl' mb={4} ml='auto'>Sócia- Fundadora</Heading>
                        <Text fontSize='xl' lineHeight={1.25} display='block' textAlign='justify'>
                            <Image src='/images/lana.jpg' alt='Fernanda Lana' boxSize="280px" float='left' m={4} />
                            Mestranda em Direito, Professora, advogada nas mais diversas áreas do direito empresarial com
                            mais de 20 anos de atuação, assessorando empresas a desenvolverem suas atividades com maior
                            segurança jurídica sobretudo nas áreas cível, contratual, ambiental, minerária, societária e
                            concorrencial. Há mais de 14 anos tem forte atuação, consultoria e na implementação de Programas
                            de Compliance nas mais diversas empresas e instituições nacionais e multinacionais,
                            orientando-as em todas as etapas da implementação de Programas de Compliance. É também
                            especialista em Auditoria na ISO 19.600/2016 e 37.301/2021 e ISO 37.001/2017 pela SAS
                            Certificadora. Fundou Comissão de Compliance da OAB/MG onde é Presidente. É membro do Conselho
                            de Transparência e Combate à Corrupção da Corregedoria do Estado de Minas Gerais e Diretora de
                            Compliance da Caixa de Assistência da OAB/MG. É ainda fundadora, Membro e ex. Presidente da
                            Comissão Especial de Estudos Permanentes sobre Compliance do Conselho Federal da OAB, membro do
                            Instituto dos Advogados de Minas Gerais, membro da Associação Brasileira das Mulheres de
                            Carreira - MG e Membro do Compliance Women Committee.
                        </Text>
                    </WrapItem>
                </Wrap>
            </Flex>
            <Footer />
        </Flex>
    )
}