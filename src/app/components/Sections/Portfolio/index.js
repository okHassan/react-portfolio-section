import React, { useState } from "react";
import Title from "../../shared/Title";
import Subtitle from "../../shared/Subtitle";
import Button from "./Button";
import Card from "../../../components/shared/Card";
import Slide from "react-reveal/Slide";
import Popup from "reactjs-popup";
import Modal from "../Modal";
import "../Modal/Popup.css";
import { PORTFOLIO } from "../../../data/portfolio";

const Portfolio1 = () => {
  const [popupData, setPopupData] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(PORTFOLIO.cardData);

  const dataFilterHandler = (type) => {
    if (type === "all") setData(PORTFOLIO.cardData);
    else setData(PORTFOLIO.cardData.filter((data) => data.category === type));
  };

  const closeModal = () => setOpen(false);

  const popUpData = (data) => {
    setPopupData(data);
    setOpen((o) => !o);
  };

  return (
    <>
      <section className="min-h-screen bg-[#040404] py-10">
        <div className="container mx-auto md:max-w-screen-lg px-2">
          <div className="text-center">
            <Subtitle>{PORTFOLIO.titles.subtitle}</Subtitle>
            <Title>{PORTFOLIO.titles.title}</Title>
          </div>
          <div className="flex flex-wrap justify-center space-x-3 md:space-x-5 py-5 sm:py-5 md:py-10">
            <Button data={PORTFOLIO.buttonData} dataType={dataFilterHandler} />
          </div>

          <Slide bottom cascade>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 place-content-center gap-y-8 sm:gap-6 md:gap-12 sm:px-5 md:py-10">
              <Card data={data} popUpData={popUpData} />
            </div>
          </Slide>
        </div>
      </section>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <Modal closeModal={closeModal} popupData={popupData} />
        </div>
      </Popup>
    </>
  );
};

export default Portfolio1;
