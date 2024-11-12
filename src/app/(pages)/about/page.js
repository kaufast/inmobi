import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
 import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/pages/about/Agents";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const About = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Sobre Inmobi</h2>
                <div className="breadcumb-list">
                  Inmobiliaria &nbsp;
                  <a href="#">  Nosotros</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>
                 Nuestra misión es cambiar la perspectiva del sector inmobiliario.{" "}
                <br className="d-none d-lg-block" /> Brindamos una perspectiva eficaz del sector inmobiliario
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">
                No importa cuán estructurado esté el mercado, el sector inmobiliario siempre presenta desafíos inesperados. Sin embargo, adaptarse a las nuevas tendencias y mantener un enfoque innovador es más fácil de lo que parece. Nuestro objetivo es transformar la forma en que las personas ven el mundo inmobiliario, ofreciendo soluciones ágiles y personalizadas.
              </p>
              <p className="text mb55">
                Siempre buscamos nuevas formas de mejorar la experiencia de nuestros clientes, brindando servicios de alta calidad que satisfagan sus necesidades. Nuestro compromiso es estar a la vanguardia de la industria, liderando con transparencia, confianza y un profundo conocimiento del mercado inmobiliario.
              </p>
              <div className="row">
                <Mission />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* About Banner */}
      <section className="our-about pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-12">
              <div className="about-page-img">
                <Image
                  width={1206}
                  height={515}
                  priority
                  className="w-100 h-100 cover"
                  src="/images/about/about-page-banner.jpg"
                  alt="about banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Banner */}

      {/* Funfact */}
      <section className="pt-0">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FunFact />
          </div>
        </div>
      </section>
      {/* End Funfact */}

      {/* Exclusive Agents */}
      <section className="pb90">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Agentes Exclusivos</h2>
                <p className="paragraph">
                  Contamos con un equipo de agentes exclusivos que se especializan en ofrecer el mejor servicio personalizado. Nuestro enfoque es conectar a los clientes con las mejores oportunidades del mercado, garantizando un proceso eficiente y transparente.
                </p>
              </div>
            </div>
            {/* End header */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Exclusive Agents */}

      {/* Abut intro */}
      <section className="pt30 pb-0">
        <div className="cta-banner3 bgc-thm-light mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg bdrs24 position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <h2 className="title text-capitalize">
                  Encontremos juntos la mejor  <br className="d-none d-md-block" />{" "}
                  opción para ti
                  </h2>
                </div>
                <div className="why-chose-list style2">
                  <Features />
                </div>
                <Link href="#" className="ud-btn btn-dark">
                  Saber más
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Abut intro */}



      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default About;
