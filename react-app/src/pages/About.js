import styles from "./css/About.css";
import Question from "./components/Question"
import aboutBackground from "../images/about-background.png";
import ContactForm from "./components/ContactForm";

const About = (props) => {
    return (
        <main id="about-page" style={{ backgroundImage:`url(${aboutBackground})` }}>
            <div id="about-site" className="about-card">
                <h2>About this Website and Myself</h2>

                <p>I am building this website to create a place to store my favorite recipes for the public to see. I am focusing on recipes that are affordable, fun, and quick to make. Additionally, I want to promote beginners to learn more about cooking, as it is an essential skill for everyone. </p>
                <p>I am a university student who enjoys cooking as much as I enjoy hanging out with friends and family. I hope that my recipes can reach a broad audience and convince others to learn how to spread love through food. </p>
            </div>

            <div id="faq" className="about-card">
                <h2>Frequently Asked Questions</h2>
                
                <Question questionQ="Q: Where do you find recipes?" questionA="Many of the recipes here are my own, and others I have found online, made myself, 
                                                                        and added adjustments over time. All outside sources are accredited appropriately." />
                
                <Question questionQ="Q: What's a good starter recipe?" questionA="There are lots of good starters, but my suggestion is to start with the very 
                                                        basics like pasta and simple proteins. My personal favorite is experimenting with different forms of cooking eggs." />

                <Question questionQ="Q: What tools do I need to start cooking?" questionA="You only need a simple pot and frying pan to make the majority of recipes on this website.
                                         Any sharp knife will do for beginners, just be careful and take your time. I would also recommend using a bamboo cutting board and a wooden cooking spoon." />
            </div>

            
            <ContactForm />
        </main>
    );
};

export default About;