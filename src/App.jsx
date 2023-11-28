import React, { useState } from 'react'
import State from './Componets/State'
import Card from './Componets/Card'
import Index from './Conditional_Rendering/index'
import Hooks from './Componets/Hooks_UseState/Hooks'
import Hook1 from './Componets/Hooks_UseState/Hook1'
import Event_Handler_Class from './Componets/Event_Handler_Class/Event_Handler_Class'
import Counter from './Componets/Counter-App/counter'

export default function App() {
  
  return (
    <div>
      
      {/* <State />
      <Card />
      <Index />
      <Event_Handler_Class />
      <Hooks />
      <Hook1 /> */}
      <Counter />
    </div>
  )
}
