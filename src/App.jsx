import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Button from "./components/Button.jsx"


export default function App(){
    return(
        <>
  
        <Header />
        <main>

            <section className="name">
                <h1 className="full-name">Jabez Greenan</h1>
                <p className="role">Fullstack Developer</p>
                <p className="website">jabezgreenan.website</p>
            </section>

            <section className="buttons">
                <Button text="Email"/>
                <Button text="LinkedIn" />
            </section>
            
            <section className="about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in
                making things simple and automating daily tasks. I try to keep up with 
                security and best practices,
                and am always looking for new things to learn.
                </p>
            </section>

            <section className="interests">
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
                Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </section>

            
        </main>

        <Footer />
        </>
    )
}