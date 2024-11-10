"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useTranslations } from "@/i18n"; // Use absolute path

const HeroContent = ({ locale }) => {
  const router = useRouter();
  const t = useTranslations(locale);
  const [activeTab, setActiveTab] = useState("buy");
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Update the tabs only when translations are available
    setTabs([
      { id: "buy", label: t("tabs.buy") },
      { id: "rent", label: t("tabs.rent") },
      { id: "sold", label: t("tabs.sold") },
    ]);
  }, [t]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="advance-search-tab mt70 mt30-md mx-auto animate-up-3">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style1">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="advance-search-field position-relative text-start">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        
                        <input
  className="form-control bgc-f7 bdrs12"
  type="text"
  name="search"
  placeholder={t("placeholder.search").replace("{tabLabel}", tab.label)}
/>

                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" />
                      {t("buttons.advanced")}
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      onClick={() => router.push("/map-v1")}
                      type="button"
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
