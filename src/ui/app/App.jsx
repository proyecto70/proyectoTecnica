import './App.css'
import { ProviderApp } from "../../domain/context/app/ProviderApp"
import { Main } from "../pages/main/Main"
import { Payment } from "../pages/payment/Payment"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {

  return (
    <BrowserRouter>
      <ProviderApp>
        <Routes>
          <Route path="/project-tecnica/" element={<Main />} />
          <Route path='/project-tecnica/payment' element={<Payment />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </ProviderApp>
    </BrowserRouter>
  )
}