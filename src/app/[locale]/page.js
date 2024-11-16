// src/app/[locale]/page.js
import Explore from "@/components/common/Explore";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import About from "@/components/home/home-v1/About";
import ApartmentType from "@/components/home/home-v1/ApartmentType";
import CallToActions from "@/components/common/CallToActions";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import Testimonial from "@/components/home/home-v1/Testimonial";
import Hero from "@/components/home/home-v1/hero";
import Image from "next/image";
import Blog from "@/components/common/Blog";
import Link from "next/link";
import PopulerProperty from "@/components/home/home-v1/PopulerProperty";
import { useTranslations } from '../../i18n';

export const metadata = {
  title: "Inmobi - ¡Bienvenido! El Mejor Socio para Bienes Raíces",
  description: "Explora nuestras propiedades destacadas y encuentra la casa de tus sueños en España con Inmobi.",
};

const HomePage = ({ params }) => {
  const locale = params.locale || "es"; // Default to Spanish if locale not provided
  const t = useTranslations(locale); // Load translations based on locale

  return (
    <>
      {/* Main Header Nav */}
      <Header locale={locale} />
      {/* End Main Header Nav */}

      {/* Mobile Nav */}
      <MobileMenu />
      {/* End Mobile Nav */}

      {/* Home Banner Style V1 */}
      <section className="home-banner-style1 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <Hero locale={locale} />
              </div>
            </div>
          </div>
          <a href="#explore-property">
            <div className="mouse_scroll animate-up-4">
              <Image width={20} height={105} src="/images/about/home-scroll.png" alt="scroll image" />
            </div>
          </a>
        </div>
      </section>
      {/* End Home Banner Style V1 */}

      {/* Explore Apartment */}
      <section id="explore-property" className="pb90 pb30-md">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="main-title" data-aos="fade-up" data-aos-delay="300">
                <h2 className="title">{t('exploreApartmentTypes')}</h2>
                <p className="paragraph">{t('inspireText')}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="explore-apartment-slider" data-aos="fade-up" data-aos-delay="300">
                <ApartmentType locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Discover How Inmobi Can Help */}
      <section className="pt0 pb90 pb10-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up" data-aos-delay="300">
              <div className="main-title text-center">
                <h2 className="title">{t('howInmobiCanHelp')}</h2>
                <p className="paragraph">{t('personalizedSolutions')}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Explore locale={locale} />
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bgc-f7">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">{t('featuredProperties')}</h2>
                <p className="paragraph">{t('uniquePropertySelection')}</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-3-col">
                  {t('viewAllProperties')}
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties by City */}
      <section className="pb40-md pb90">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">{t('propertiesByCity')}</h2>
                <p className="paragraph">{t('citySelection')}</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/cities">
                  {t('viewAllCities')}
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="pt0 pb40-md">
        <div className="container">
          <About locale={locale} />
        </div>
      </section>

      {/* Popular Property */}
      <PopulerProperty locale={locale} />

      {/* Testimonials */}
      <section className="pb100 pb50-md bgc-thm-light">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <div className="main-title" data-aos="fade-up" data-aos-delay="300">
                <h2 className="title">{t('testimonialsTitle')}</h2>
                <p className="paragraph">{t('testimonialsSubtitle')}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider" data-aos="fade-up" data-aos-delay="300">
                <Testimonial locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pb90 pb20-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">{t('fromOurBlog')}</h2>
                <p className="paragraph">{t('blogSubtitle')}</p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog locale={locale} />
          </div>
        </div>
      </section>

      {/* Our CTA */}
      <CallToActions locale={locale} />

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer locale={locale} />
      </section>
    </>
  );
};

export default HomePage;
