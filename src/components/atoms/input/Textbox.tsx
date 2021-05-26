import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'

type Props = {
  placeholder: string
  selectList: Array<string>
}

export const Textbox = (props: Props) => {
  const { placeholder, selectList } = props
  return (
    <Select
      placeholder="Select option"
      spacing={3}
      bgColor="#fff"
      w="10%"
      m={[2, 3]}
    >
      {selectList.map((skill) => (
        <option value={skill}>{skill}</option>
      ))}
    </Select>
  )
}
