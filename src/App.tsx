import React, { useState } from 'react'
import { ChakraProvider, Image } from '@chakra-ui/react'
import { Textbox } from './components/atoms/input/Textbox'
import { DefaultLayout } from './components/templates/DefaultLayout'
import { Button1 } from './components/atoms/button/Button1'

import theme from './theme/theme'

function App() {
  const [skillList, setSkillList] = useState(['skill1', 'skill2', 'skill3'])
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout>
        <Button1>検索</Button1>
        <Image
          src={`${process.env.PUBLIC_URL}/homebackimage.jpg`}
          width="100%"
          height="800px"
          alt="home_back"
        />
        <Textbox placeholder="Skill" selectList={skillList} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default App
