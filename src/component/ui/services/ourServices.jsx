

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import designing from "../../../assets/designing.jpg";
import UIUX from "../../../assets/UIUX.webp";
import frontend from "../../../assets/frontent.png";
import responsive from "../../../assets/responsive-website.png";
import mobileapp from "../../../assets/illustration-19.png";
import prototype from "../../../assets/prototype.png";
import cloudservice from "../../../assets/cloudservice.jpg";
import azure from "../../../assets/azure-top-band-image.png";
import aws from "../../../assets/aws.webp";
import gpu from "../../../assets/gpu.jpg";
import dataeng from "../../../assets/data-engineer.jpg";
import datastore from "../../../assets/data-store.png";
import dataprocess from "../../../assets/dataAnalysis.png";
import datadoc from "../../../assets/data-doc.png";
import dataint from "../../../assets/dataIntegration.png";
import mvc from "../../../assets/mvc.jpg";
import angular from "../../../assets/angular_brand.png";
import nodejs from "../../../assets/node_logo.png";
import vue from "../../../assets/vue_brand.png";
import reactjs from "../../../assets/react_brand.png";
import dataScience from "../../../assets/otherImage/data_science1.jpeg";

const OurServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, 
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Section>
      <Wrapper>
        <Title>Services</Title>
        <Slider {...settings}>
          {services.map((service, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="group shadow-lg hover:shadow-xl">
                <img src={service.image} alt={service.alt} />
                <p>{service.title}</p>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Wrapper>
    </Section>
  );
};

export default OurServices;

const services = [
  { image: UIUX, alt: "UIUX-img", title: "UI/UX DESIGN SERVICES" },
  { image: frontend, alt: "frontend-img", title: "FRONTEND DEVELOPMENT" },
  { image: responsive, alt: "responsive-img", title: "RESPONSIVE WEBSITE DESIGN" },
  { image: mobileapp, alt: "mobileapp-img", title: "MOBILE APPLICATION SERVICES" },
  { image: prototype, alt: "prototype-img", title: "DESIGN PROTOTYPING" },
  { image: azure, alt: "azure-img", title: "Azure Services" },
  { image: aws, alt: "aws-img", title: "AWS Services" },
  { image: gpu, alt: "gpu-img", title: "GPU Service Development" },
  { image: datastore, alt: "data-storage-img", title: "Data Storage" },
  { image: dataprocess, alt: "data-process-img", title: "Data Processing" },
  { image: datadoc, alt: "data-document-img", title: "Data Documentation" },
  { image: dataint, alt: "data-intergration-img", title: "Data Integration" },
  { image: dataScience, alt: "data-eng-img", title: "AI / ML" },
  { image: angular, alt: "angular-img", title: "ANGULAR JS" },
  { image: nodejs, alt: "nodejs-img", title: "NODE JS" },
  { image: vue, alt: "vue-img", title: "VUE JS" },
  { image: reactjs, alt: "reactjs-img", title: "REACT JS" },
  { image: "chatbot", alt: "chatbot-img", title: "Chatbot" },
  { image: "machinelearning", alt: "machinelearning-img", title: "Machine Learning" },
  { image: "tensorflow", alt: "tensorflow-img", title: "Tensorflow" },
];

const Card = styled.div`
  width: 100%;
  height: 280px; /* Increase card size */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); 
  border-radius: 15px; 
  padding: 10px;

  p {
    width: 80%;
    text-align: center;
    font-size: 25px; 
    font-weight: bold;
    margin-top: 15px;
    color : #fff
  }

  img {
    width: 250px;
    height: 180px;
    object-fit: contain;
  }

  @media (min-width: 766px) {
    width: 250px; 
    margin: 20px;
  }
`;

const Section = styled.section`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0; 
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)); 
  color: #000;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  
  text-align: center;  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;

