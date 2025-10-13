import { Header } from "../../layouts/header/Header"
import { SectionInit } from "../../layouts/section-init/SectionInit"
import { SectionProducts } from "../../layouts/section-products/SectionProducts"
import { SectionMarks } from "../../layouts/section-marks/SectionMarks"
import { SectionAboutMe } from "../../layouts/section-about-me/SectionAboutMe"
import { CardProduct } from "../../components/card-product/CardProducts"

export const Main = () => {
    return (
        <>
            <Header />
            <SectionInit />
            <SectionProducts />
            <SectionMarks />
            <SectionAboutMe />
            <CardProduct />
        </>
    )
}