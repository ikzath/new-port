import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  // const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          {/* <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
          </div> */}

        <div className="contact-wrapper">
          <div className="contact-wrapper__text">              
            <form className='form-style-6' method="post" action="https://getform.io/f/74e672a2-8bdd-48a8-9426-742040bd2fd2">
                <input type="text" name="field1" placeholder="Your Name" required={true} />
                <input type="email" name="field2" placeholder="Email Address"  required={true}  />
                <textarea name="field3" placeholder="Type your Message"  required={true} ></textarea> 
                <input type="submit" value="Send" />
            </form>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
