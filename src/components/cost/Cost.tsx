import styles from "./cost.module.css"
import dataCost from "@/assets/data/cost.json"
import { CostServicesProps} from "@/types/definitions";
import {ScrollAnimation, ScrollAnimation1} from "@/components/ui/animation/ScrollAnimation";

export  default function Cost(){

    return (
        <>
            <section className={styles.section}>
                <h1 className={styles.h1}>{"Découvrez nos offres"}</h1>
                    <ScrollAnimation className={styles.sectionPrice}>
                    {dataCost.services.map((item : CostServicesProps) => (
                        <ScrollAnimation1 className={styles.article} key={item.id}>
                            <div>
                            <h2 className={styles.h2}>{item.name}</h2>
                            <ul className={styles.ul}>
                                <li className={styles.price}>{item.price}</li>
                                <li>{item.scope}</li>
                                <li>{item.responsive}</li>
                                <li>{item.design_ux}</li>
                                <li>{item.seo}</li>
                                {item.payment &&
                                    <li>{item.payment}</li>
                                }
                                {item.api &&
                                    <li>{item.api}</li>
                                }
                                <li>{item.timeline}</li>
                            </ul>
                            </div>
                        </ScrollAnimation1>

                    ))}
                    </ScrollAnimation>
            </section>
        </>
    )
}