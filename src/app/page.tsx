
import styles from "./page.module.css"
import Header from "@/components/layout/header/Header";
import IntroWrapper from "@/components/ui/introWrapper/IntroWrapper";
import Process from "@/components/process/Process";
import About from "@/components/about/About";
import Realisation from "@/components/realisations/Realisation";
import Cost from "@/components/cost/Cost";





export default function HomePage() {


    return (
        <>
            <header>
               {/* <IntroWrapper >*/}
               {/*</IntroWrapper>*/}
                    <Header />
            </header>
            <main>
               <section id={"about"} >
                   <About/>
               </section>
                {/*<section id={"process"}>*/}
                {/*    <Process />*/}
                {/*</section>*/}
                {/*<section id={"realisations"} >*/}
                {/*    <Realisation/>*/}
                {/*</section>*/}
                {/*<section id={"tarifs"} className={styles.cost}>*/}
                {/*    <Cost/>*/}
                {/*</section>*/}
            </main>

        </>
    );
}
