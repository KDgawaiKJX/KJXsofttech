import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import data from "../../../services.json";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  background: linear-gradient(rgba(0, 0, 0.5, 1), rgba(255, 255, 255, 1)); 
  color: #000;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  animation: 1s ${fadeInAnimation};
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 100px;
  }
`;

const Holder = styled.div`
  width: 100%;
  min-height: 88vh;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  margin: 0;
  margin-top: 100;
  font-size: 17px;
  color: #000;
  @media (min-width: 1024px) {
    font-size: 55px;
  }
`;

const Text = styled.div`
  margin-top: 20px;
`;

const HolderTwo = styled.div`
  width: 100%;
  height: 85%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 766px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${({ rw }) => (rw ? "row" : "row-reverse")};
  }
`;

const Image = styled.div`
  width: 100%;
  font-weight: bold;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  p {
    font-size: 30px;
    margin-bottom: 0;
  }
  @media (min-width: 766px) {
    width: 45%;
    align-self: flex-start;
  }
  @media (min-width: 1205px) {
    height: 500px;
    width: 50%;
  }
`;

const CardHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px lightgrey;
  border-radius: 10px;
  padding: 10px 0px;
  margin: 20px 0px;
  background: linear-gradient(
    to bottom,
    #0d9488 0%,
    #00bf72 50%,
    #0d9488 100%
  );
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.10);
    box-shadow: 0px 0px 10px lightgrey;
  }
  p {
    width: 70%;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }
  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
  @media (max-width: 766px) {
    width: 90%;
  }
`;

const MoreServices = () => {
  const [searchTerm, setSearchTerm] = useState("AI/ML");
  const [filteredData, setFilteredData] = useState(data.data);

  useEffect(() => {
    const filteredResults = data.data.filter((item) =>
      item.id.includes(searchTerm)
    );
    setFilteredData(filteredResults);
  }, [searchTerm]);

  return (
    <Section>
      <Wrapper>
        <Title className="text-cyan-700">Services</Title>
        <Holder>
          <Text>
            <H1>More Services</H1>
          </Text>
          <HolderTwo>
            <CardHold>
              <Card onClick={() => setSearchTerm("AI/ML")}>
                <p>AI/ML</p>
              </Card>
              <Card onClick={() => setSearchTerm("Data Engineering")}>
                <p>Data Engineering</p>
              </Card>
              <Card onClick={() => setSearchTerm("Cloud Service")}>
                <p>Cloud Services</p>
              </Card>
              <Card onClick={() => setSearchTerm("Development")}>
                <p>Web Development</p>
              </Card>
              <Card onClick={() => setSearchTerm("Api")}>
                <p>API</p>
              </Card>
              <Card onClick={() => setSearchTerm("MVC")}>
                <p>MVC</p>
              </Card>
              <Card onClick={() => setSearchTerm("UI/UX")}>
                <p>UI/UX</p>
              </Card>
              <Card onClick={() => setSearchTerm("App")}>
                <p>APP</p>
              </Card>
            </CardHold>
            <CardHold>
              {filteredData?.map((props) => (
                <a
                  key={props.name}
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card>
                    <img src={props.image} alt={props.name} />
                    <p>{props.name}</p>
                  </Card>
                </a>
              ))}
            </CardHold>
          </HolderTwo>
        </Holder>
      </Wrapper>
    </Section>
  );
};

export default MoreServices;
