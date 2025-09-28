import { Inter, Castoro_Titling} from "next/font/google"

export const paragraphFont = Inter({
    weight : ["400", "600"],
    subsets : ["latin"],
    variable: "--paragraph-font"
})

export const subtitle = Castoro_Titling({
    weight : "400",
    subsets : ["latin"],
    variable: "--subtitle-font"
})