// src/app/[locale]/contact/page.js
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Form from "@/components/pages/contact/Form";
import Office from "@/components/pages/contact/Office";
import { useTranslations } from '@/i18n'; // Directly importing from src

export const metadata = {
  title: "Contact || Homez - Real Estate NextJS Template",
};

const Contact = ({ params }) => {
  const t = useTranslations(params.locale); // Get translations for current locale

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader locale={params.locale} />
      {/* End Main Header Nav */}

      {/* Mobile Nav */}
      <MobileMenu locale={params.locale} />
      {/* End Mobile Nav */}

      {/* Contact With Map */}
      <section className="p-0">
        <iframe
          className="home8-map contact-page"
          loading="lazy"
          src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
          title="London Eye, London, United Kingdom"
          aria-label="London Eye, London, United Kingdom"
        />
      </section>
      {/* End Contact With Map */}

      {/* Contact Form */}
      <section>
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative">
              <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                <h4 className="form-title mb25">{t('contact.formTitle')}</h4>
                <Form />
              </div>
            </div>

            <div className="col-lg-5 offset-lg-2">
              <h2 className="mb30 text-capitalize">{t('contact.heading')}</h2>
              <p className="text">{t('contact.description')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Form */}

      {/* Office Visit */}
      <section className="pt0 pb90 pb10-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-delay="300">
              <div className="main-title text-center">
                <h2 className="title">{t('contact.visitOfficeTitle')}</h2>
                <p className="paragraph">{t('contact.visitOfficeDescription')}</p>
              </div>
            </div>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <Office />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToActions locale={params.locale} />

      {/* Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer locale={params.locale} />
      </section>
    </>
  );
};

export default Contact;
