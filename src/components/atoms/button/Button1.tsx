import React from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: string
}

export const Button1 = (props: Props) => {
  const { children } = props
  return (
    <Button colorScheme="teal" bgColor="#1A4A55" size="md">
      {children}
    </Button>
  )
}
