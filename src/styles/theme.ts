import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
    colors:{
        xla1:'#d1ab86',
        xla2:'#444444'
    },
    styles: {
        global: {
            body: {
                color: '#444444',
                bg: '#gray.50'
            }
        }
    }
})

export const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})