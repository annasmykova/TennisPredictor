import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from 'src/components/index'

storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ))
