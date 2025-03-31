import React from "react";
import { Col, Container, Form, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css'

import {
  faLinkedin,
  faTwitterSquare,
  faYoutube,
  faFacebookSquare,
  faPinterest,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"; 
import PropTypes from "prop-types";

const quickLinks = [
  { value: "Terms & Conditions", href: "#!" },
  { value: "Privacy Policy", href: "#!" },
  { value: "Refund Policy", href: "#!" },
];

const socialMedia = [
  { value: "Facebook", href: "#!" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const jobInfo = [
  { value: "Select", href: "#!" },
  { value: "Service", href: "#!" },
  { value: "Payment", href: "#!" },
];

const language = [
  { value: "en", text: "US Dollars $" },
  { value: "bn", text: "UK Dollars $" },
];

const currency = [
  { value: "en", text: "English" },
  { value: "bn", text: "Bangla" },
];

const socialIcons = [
  { icon: faLinkedin, href: "/" },
  { icon: faTwitterSquare, href: "/" },
  { icon: faYoutube, href: "/" },
  { icon: faFacebookSquare, href: "/" },
  { icon: faPinterest, href: "/" },
  { icon: faWordpress, href: "/" },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <a href={qLink.href}>{qLink.value}</a>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
  <li>
    <a href={media.href}>{media.value}</a>
  </li>
);
SocialMedia.propTypes = {
  media: PropTypes.object.isRequired,
};

const JobInfo = ({ job }) => (
  <li>
    <a href={job.href}>{job.value}</a>
  </li>
);
JobInfo.propTypes = {
  job: PropTypes.object.isRequired,
};

const LanguageItem = ({ language }) => (
  <option value={language.value}>{language.text}</option>
);
LanguageItem.propTypes = {
  language: PropTypes.object.isRequired,
};

const CurrencyItem = ({ currency }) => (
  <option value={currency.value}>{currency.text}</option>
);
CurrencyItem.propTypes = {
  currency: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
  <a className="ms-2" href={item.href}>
    {item.value}
  </a>
);

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
  <li>
    <a href={social.href}>
      <FontAwesomeIcon icon={social.icon} />
    </a>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

const Footer7 = () => {
  return (
    <section className="ezy__footer7 light">
      <Container>
        <Row className="text-center text-sm-start">
          <Col sm={6} lg={3} className="mt-4 mt-lg-0">
            <h5>Quick Links</h5>
            <Nav className="flex-column ezy__footer7-quick-links">
              {quickLinks.map((qLink, i) => (
                <QuickLinks qLink={qLink} key={i} />
              ))}
            </Nav>
          </Col>
          <Col sm={6} lg={3} className="mt-4 mt-lg-0">
            <h5>Social Media</h5>
            <Nav className="flex-column ezy__footer7-quick-links">
              {socialMedia.map((media, i) => (
                <SocialMedia media={media} key={i} />
              ))}
            </Nav>
          </Col>
          <Col sm={6} lg={3} className="mt-4 mt-lg-0">
            <h5>Job Info</h5>
            <Nav className="flex-column ezy__footer7-quick-links">
              {jobInfo.map((job, i) => (
                <JobInfo job={job} key={i} />
              ))}
            </Nav>
          </Col>
          <Col sm={6} lg={3} className="mt-4 mt-lg-0">
            <h5>Language</h5>
            <Form.Select name="language" className="px-4">
              {language.map((lang, i) => (
                <LanguageItem language={lang} key={i} />
              ))}
            </Form.Select>
            <h5 className="mt-4">Currency</h5>
            <Form.Select name="currency" className="px-4">
              {currency.map((curr, i) => (
                <CurrencyItem currency={curr} key={i} />
              ))}
            </Form.Select>
          </Col>

          <Col lg={9}>
            <Nav className="ezy__footer7-social mt-3">
              {socialIcons.map((social, i) => (
                <SocialItem social={social} key={i} />
              ))}
            </Nav>
            <div className="mt-3 opacity-50 ezy__footer7-copyright">
              <span>Copyright &copy; Easy Frontend, All rights reserved</span>
              {quickLinks.map((item, i) => (
                <NavigationItem item={item} key={i} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer7;
