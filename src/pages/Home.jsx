import Hero from '../components/Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certification from './Certification';
import Contact from './Contact';
import Resume from './Resume';

const Home = () => {
    return (
        <div className="pt-16">
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="certification">
                <Certification />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="resume">
                <Resume />
            </section>
        </div>
    );
};

export default Home;
