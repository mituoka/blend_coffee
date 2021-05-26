import { extendTheme } from  '@chakra-ui/react'

const theme = extendTheme({
    styles:{
        global:{
            body:{
                backgroundColor:"teal.400",
            }
        }
    }
})

export default theme;