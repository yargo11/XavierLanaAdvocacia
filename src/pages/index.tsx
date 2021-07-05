import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Wrap,
  WrapItem,
  Center,
  Flex,
  Image,
  Heading,
  Text,
  Spacer,
  Divider,
  Icon,
  Link,
  useMediaQuery
} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Home() {

  const [isSmallerThan1134] = useMediaQuery("(max-width: 1134px)")

  return (
    <Flex direction='column'>
      <Header coverImg='xlaesc.jpg' />
      <Flex
        maxW={1210}
        m='auto'
      >
        {
          isSmallerThan1134 ?
            <Wrap spacing='-4px' justify='center' m='auto'>
              <WrapItem
                borderBottom='1px solid #969696'>
                <Center w="380px" h="309px" d='flex' flexDirection='column' p='27px' alignItems='flex-start'>
                  <Heading size='lg'>O Escritório</Heading>
                  <Spacer />
                  <Text textAlign='justify'>
                    Escritório nascido da fusão de expertises e experiências no mundo empresarial, buscamos as melhores
                    soluções técnico-jurídicas para uma prestação de serviços jurídicos de excelência adequada às necessidades
                    de cada um de nossos clientes.
                  </Text>
                  <Spacer />
                  <Link href="/escritorio">
                    <Icon as={FiChevronRight} />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem
                borderBottom='1px solid #969696'
              >
                <Center w="380px" h="309px">
                  <Image w='325px' h='254px' src='/images/xla.jpg' alt='Descrição' />
                </Center>
              </WrapItem>
              <WrapItem
                borderBottom='1px solid #969696'>
                <Center w="380px" h="309px" d='flex' flexDirection='column' p='27px' alignItems='flex-start'>
                  <Heading size='lg'>Advogados</Heading>
                  <Spacer />
                  <Text textAlign='justify'>
                    Nossos profissionais são capacitados e estão constantemente capacidatadas buscam constantemente estão
                    preparados para atender prontamente as mais diversas demandas.
                  </Text>
                  <Spacer />
                  <Link href="/equipe">
                    <Icon as={FiChevronRight} />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem
                borderBottom='1px solid #969696'
              >
                <Center w="380px" h="309px">
                  <Image w='325px' h='254px' src='/images/img-destaque-2.jpg' alt='Descrição' />
                </Center>
              </WrapItem>
              <WrapItem
                borderBottom='1px solid #969696'
              >
                <Center w="380px" h="309px" d='flex' flexDirection='column' p='27px' alignItems='flex-start'>
                  <Heading size='lg'>Especialidades</Heading>
                  <Spacer />
                  <Text textAlign='justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla est, convallis vitae nulla ac,
                    iaculis mollis justo. Mauris non mattis magna. Integer gravida tempus augue, id viverra massa vulputate
                    non.
                  </Text>
                  <Spacer />
                  <Link href="/">
                    <Icon as={FiChevronRight} />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem
                borderBottom='1px solid #969696'
              >
                <Center w="380px" h="309px">
                  <Image w='325px' h='254px' src='/images/img-destaque-3.jpg' alt='Descrição' />
                </Center>
              </WrapItem>
            </Wrap>
            :
            <Wrap spacing='-4px' justify='center' m='auto'>
              <WrapItem
                borderBottom='1px solid #969696'>
                <Center w="380px" h="309px" d='flex' flexDirection='column' p='27px' alignItems='flex-start'>
                  <Heading size='lg'>O Escritório</Heading>
                  <Spacer />
                  <Text textAlign='justify'>
                    Escritório nascido da fusão de expertises e experiências no mundo empresarial, buscamos as melhores
                    soluções técnico-jurídicas para uma prestação de serviços jurídicos de excelência adequada às necessidades
                    de cada um de nossos clientes.
                  </Text>
                  <Spacer />
                  <Link href="/escritorio">
                    <Icon as={FiChevronRight} />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem
                borderRight='1px solid #969696'
                borderBottom='1px solid #969696'
                borderLeft='1px solid #969696'
              >
                <Center w="380px" h="309px">
                  <Image w='325px' h='254px' src='/images/xla.jpg' alt='Descrição' />
                </Center>
              </WrapItem>
              <WrapItem
                borderBottom='1px solid #969696'>
                <Center w="380px" h="309px" d='flex' flexDirection='column' p='27px' alignItems='flex-start'>
                  <Heading size='lg'>Advogados</Heading>
                  <Spacer />
                  <Text textAlign='justify'>
                    Nossos profissionais são capacitados e estão constantemente capacidatadas buscam constantemente estão
                    preparados para atender prontamente as mais diversas demandas.
                  </Text>
                  <Spacer />
                  <Link href="/equipe">
                    <Icon as={FiChevronRight} />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="380px" h="309px">
                  <Image w='325px' h='254px' src='/images/img-destaque-2.jpg' alt='Descrição' />
                </Center>
              </WrapItem>
              <WrapItem
                borderRight='1px solid #969696'
                borderLeft='1px solid #969696'
              >
                <Center w="380px" h="309px" d='flex' flexDirection='column' p='27px' alignItems='flex-start'>
                  <Heading size='lg'>Especialidades</Heading>
                  <Spacer />
                  <Text textAlign='justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla est, convallis vitae nulla ac,
                    iaculis mollis justo. Mauris non mattis magna. Integer gravida tempus augue, id viverra massa vulputate
                    non.
                  </Text>
                  <Spacer />
                  <Link href="/">
                    <Icon as={FiChevronRight} />
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem>
                <Center w="380px" h="309px">
                  <Image w='325px' h='254px' src='/images/img-destaque-3.jpg' alt='Descrição' />
                </Center>
              </WrapItem>
            </Wrap>

        }

      </Flex>
      <Flex
        maxW={1200}
        w='100%'
        border='1px solid #c0c0c1'
        m='auto'
        h={308}
        direction='row'
        my={12}
      >
        <Flex
          direction='column'
          p={25}
          w='70%'
        // minW='32rem'
        >
          <Heading size='lg'>
            Reconhecimentos
          </Heading>
          <Spacer />
          <Text>
            <Icon as={FaQuoteLeft} mr={4} />Todo o escritório é focado em contencioso e é excelente no que faz. O escritório Sergio Bermudes Advogados
            tem ótimas equipes de arbitragem e contencioso envolvidas em casos muito relevantes e representam empresas
            nacionais e estrangeiras.<Icon as={FaQuoteRight} ml={4} />
          </Text>
          <Spacer />
          <Text my={4}>
            Depoimento ao Chambers & Partners
          </Text>
          <Spacer />
          <FiChevronRight />
        </Flex>
        <Center h='80%' mx={1} my='auto'>
          <Divider orientation="vertical" />
        </Center>
        <Flex p={25}>
          <Center>
            <Image boxSize='150px' src='images/selo-1.png' alt='premio 1' />
            <Image boxSize='150px' src='images/selo-2.jpg' alt='premio 2' />
          </Center>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}
