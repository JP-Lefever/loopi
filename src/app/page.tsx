
import styles from "./page.module.css"
import Header from "@/components/layout/header/Header";
import IntroWrapper from "@/components/ui/introWrapper/IntroWrapper";
import Process from "@/components/process/Process";
import About from "@/components/about/About";
import Cost from "@/components/cost/Cost";
import Works from "@/components/works/Works";





export default function HomePage() {


    return (
        <>
            <header>
               {/* <IntroWrapper >*/}
               {/*</IntroWrapper>*/}
                    <Header />
            </header>
            <main>
                <section id={"process"}>
                    <Process />
                </section>
                <section id={"realisations"} >
                    <Works/>
                </section>
               {/*<section id={"about"} >*/}
               {/*    <About/>*/}
               {/*</section>*/}
                <section id={"tarifs"} className={styles.cost}>
                    <Cost/>
                </section>
            </main>

        </>
    );
}
