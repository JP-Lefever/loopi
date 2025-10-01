
import Header from "@/components/layout/header/Header";
import Works from "@/components/works/Works";
import Process from "@/components/process/Process";
import Prices from "@/components/prices/Prices";
import About from "@/components/about/About";





export default function HomePage() {

    return (
        <>
            <header>
                    <Header />
            </header>
            <main>
               <section id={"about"} >
                   <About/>
               </section>
                <section id={"process"}>
                    <Process />
                </section>
                <section id={"realisations"} >
                    <Works/>
                </section>
                <section id={"tarifs"}>
                    <Prices/>
                </section>
            </main>

        </>
    );
}
