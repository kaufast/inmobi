"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({data,colstyle}) => {
  return (
    <>
      {data.map((listing) => (
        <div className={` ${colstyle ? 'col-sm-12':'col-sm-6 col-lg-6'}  `} key={listing.id}>
          <div className={colstyle ? "listing-style1 listCustom listing-type" : "listing-style1"}    >
            <div className="list-thumb" >
              <Image
                width={382}
                height={248}
                style={{height:'230px'}}
                className="w-100  cover"
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    DESTACADO
                  </div>
                )}
              </div>

              <div className="list-price">
                {listing.price} / <span>mes</span>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link  href={`/single-v1/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bath} habitaciones
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} baños
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} m²
                </a>
              </div>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">Para Renta</span>
                <div className="icons d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-fullscreen" />
                  </a>
                  <a href="#">
                    <span className="flaticon-new-tab" />
                  </a>
                  <a href="#">
                    <span className="flaticon-like" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
