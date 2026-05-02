import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@generouted/react-router'

export default function App() {
  return (
    <BrowserRouter basename="/antenox-frontend">
      <Routes />
    </BrowserRouter>
  )
}
