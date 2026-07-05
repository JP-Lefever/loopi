import { Inter, Castoro_Titling, Cormorant_Garamond, Space_Grotesk} from "next/font/google"

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

export const title = Space_Grotesk({
    weight : "700",
    subsets : ["latin"],
    variable: "--title-font5"
})

export const text = Cormorant_Garamond({
    weight : "700",
    subsets : ["latin"],
    variable: "--text-font"
})

