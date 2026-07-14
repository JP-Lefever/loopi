import styles from "./cardProcess.module.css"
import Image from "next/image"
import { ServicesProps } from "@/types/definitions"
import TiltCard from "@/components/ui/3D/TiltCard";

export default function CardProcess({
                                        service,
                                    }: {
    service: ServicesProps
    index: number
}) {
    const { name, image, description } = service



    return (
        <TiltCard>
            <article className={styles.card}>
                <figure className={styles.imageContainer}>
                    <Image className={styles.image} src={image} alt={name} fill={true} />
                </figure>

                <div className={styles.infoContainer}>
                    <h3 className={styles.title}>{name}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
            </article>
        </TiltCard>
    )
}
