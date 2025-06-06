import React from "react";
import styles from "./Footer.module.css";
import LogoComponent from "./LogoComponent";
import "../App.css";
import Facebook from "./SvgComponents/Facebook";
import { Instagram, Linkdin, Mail } from "./SvgComponents";
import { fLogo } from "../assets";

const Footer = () => {
  return (
    <footer className={`section ${styles.footerSection}`}>
      <div className={`sectionContainer ${styles.footerContainer}`}>
        <div className={`${styles.firstCol}`}>
          <div className={styles.navLogo}>
            <img src={fLogo} className="w-[200px]" />
          </div>

          <p className="text-[0.8rem] leading-5">
            Boxwood Capital is a trading name of Boxwood Capital Limited,
            registered in London, England, W1F 9RJ Incorporated on: 14 July
            2019, entity number 12156964
          </p>

          <p className="text-[0.6rem] leading-4">
            Boxwood Capital provides free consultations. Fund recovery services,
            including chargeback programs, are subject to retainers, fees,
            and/or commissions based on the individual case history and the
            selected service. Boxwood Capital does not offer any financial
            investments or advisory services.
          </p>

          <p className="text-[0.6rem] leading-4">
            * May not initially apply to cryptocurrency cases.
          </p>
        </div>

        <div className={`${styles.secondCol}`}>
          <p className="pb-[1.5rem]">Contact</p>

          <div className={`${styles.secondContent}`}>
            <div>
              <p className="text-[1rem] font-bold">Registered Office:</p>
              <p className="text-[0.8rem]">
                46/48, Beak Street, London, England, W1F 9RJ
              </p>
            </div>

            <div>
              <p className="text-[1rem] font-bold">Email:</p>
              <p className="text-[0.9rem]">accounts@boxwood-cap.com</p>
            </div>

            <div>
              <p className="text-[1rem] font-bold">Call Us:</p>
              <p className="text-[0.9rem]">
                +61 (1300) 580701 AUSTRALIA (FREEPHONE)
              </p>
              <p className="text-[0.9rem]">+1 (866) 519-2589 USA</p>
            </div>
          </div>
        </div>

        <div>
          <p className="pb-[1.5rem] font-bold">Our Services</p>
          <div className={`${styles.thirdCol} `}>
            <ul className="text-[0.9rem]">
              <li>Trading Scams</li>
              <li>Internet and online scams</li>
              <li>Cryptocurrency Trading Losses</li>
              <li>Crypto Wallet Checker</li>
              <li>Revolut Scam Refunds</li>
              <li>HyperVerse Scam</li>
              <li>NFT Scam and Investment Recovery</li>
            </ul>
            <ul className="text-[0.9rem]">
              <li>Forex Trading Scams</li>
              <li>Tracing Services</li>
              <li>Cryptocurrency Trading Losses</li>
              <li>Regulated broker recovery</li>
              <li>Landlord Services</li>
              <li>Residential rent arrears</li>
              <li>Evictions</li>
              <li>Bank Fraud</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.forthCol}`}>
          <p className="pb-[1.5rem] font-bold">Information</p>
          <ul className="text-[0.9rem]">
            <li>Trading Scams</li>
            <li>Internet and online scams</li>
            <li>Cryptocurrency Trading Losses</li>
            <li>Crypto Wallet Checker</li>
            <li>Revolut Scam Refunds</li>
            <li>HyperVerse Scam</li>
            <li>NFT Scam and Investment Recovery</li>
          </ul>
        </div>
      </div>
      <hr className="w-full" />
      <p className="text-[0.7rem] text-center pt-[1rem]">
        Boxwood Capital
        <span className="text-[#ABABAB]">© 2024. All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
