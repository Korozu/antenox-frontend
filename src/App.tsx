import { Routes } from '@generouted/react-router'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter basename="/antenox-frontend">
      <Routes />
    </BrowserRouter>)
}
