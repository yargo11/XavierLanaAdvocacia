import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
    Flex, Heading, Text, Box, Spacer, UnorderedList, ListItem,
    Tabs, Tab, TabList, TabPanels, TabPanel
} from '@chakra-ui/react'

export default function areas() {
    return (
        <Flex direction='column'>
            <Header coverImg='img-escritorio.jpg' />
            <Flex w='100%' maxW={1140} m='auto'>
                <Tabs variant="soft-rounded" colorScheme="blackAlpha">
                    <TabList>
                        <Tab>Societário</Tab>
                        <Tab>Contratos</Tab>
                        <Tab>Execuções Fiscais</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Heading mb={4}>Societário</Heading>
                            <UnorderedList>
                                <ListItem>
                                    Elaboração de contratos e estatutos sociais, acordos de acionistas e quotistas,
                                    atas, acordos de confidencialidade e demais documentos societários.
                                </ListItem>
                                <ListItem>
                                    Orientação de condutas em assembléias de acionistas e reuniões de conselhos de
                                    administração.
                                </ListItem>
                                <ListItem>
                                    Estruturação de negócios e atividades empresariais. Constituição de sociedades e
                                    outras formas de associação e parcerias.
                                </ListItem>
                                <ListItem>
                                    Assessoria, planejamento, estruturação e negociação de transações de compra e venda,
                                    investimento ou permuta de participações societárias ou ativos.
                                </ListItem>
                                <ListItem>
                                    Auditoria legal e assessoria para reorganizações societárias.
                                </ListItem>
                                <ListItem>
                                    Assessoria e mediação em litígios entre sócios e acionistas.
                                </ListItem>
                                <ListItem>
                                    Diligências Legais (due diligence).
                                </ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <Heading mb={4}>Contratos</Heading>
                            <UnorderedList>
                                <ListItem>
                                    Elaboração, revisão e negociação de contratos
                                </ListItem>
                                <ListItem>
                                    Assessoria na extinção das obrigações contratuais, abrangendo medidas extrajudiciais que
                                    buscam o adimplemento, a resolução, o distrato e a resilição dos contratos.
                                </ListItem>
                            </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                            <Heading mb={4}>Execuções Fiscais</Heading>
                            <UnorderedList>
                                <ListItem>
                                    Análise dos processos de execução fiscal com o objetivo de orientar o cliente quanto
                                    às matérias de defesa.
                                </ListItem>
                                <ListItem>
                                    Acompanhamento dos processos e apresentação de defesas.
                                </ListItem>
                                <ListItem>
                                    Assessoria e orientação nas execuções fiscais com o objeto de minimizar os riscos do
                                    processo.
                                </ListItem>
                            </UnorderedList>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Footer />
        </Flex>

    )
}