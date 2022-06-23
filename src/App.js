import React from 'react'
import GlobalStyles from './components/style/globalStyles'
import { ListOfCategories } from './components/ListOfCategory'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import Logo from './components/Logo'

export const App = () => (
  <>
    <Logo />
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
)
