import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { useTranslations } from '../../i18n'; // Adjust path as needed

const CallToActions = ({ locale }) => {
  const t = useTranslations(locale);

  return (
    <section className="our-cta pt0">
      <div className="cta-banner bgc-f7 mx-auto maxw1600 pt120 pt60-md pb120 pb60-md bdrs12 position-relative mx20-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6" data-aos="fade-right">
              <div className="cta-style1">
                <h2 className="cta-title">{t('ctaTitle')}</h2>
                <p className="cta-text mb-0">{t('ctaText')}</p>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6" data-aos="fade-left">
              <div className="cta-btns-style1 d-block d-sm-flex align-items-center justify-content-lg-end">
                <Link href="/contact" className="ud-btn btn-transparent mr30 mr0-xs">
                  {t('contactUs')}
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="/contact" className="ud-btn btn-dark">
                  <span className="flaticon-call vam pe-2" />
                  679 680 000
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
