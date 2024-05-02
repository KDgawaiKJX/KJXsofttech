import styled from "styled-components"


const Industries = () => {
    return (
        <main className="bg-gradient-to-r from-purple-500 to-indigo-400">

            <Section>
                <Wrapper>
                    <Title>Industries</Title>
                    <Holder>
                        <Text>
                            <H1>Digital Sectors We Indulged With</H1>
                        </Text>
                        <CardHolder>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox style={{
                                    backgroundImage: `url("https://i.ibb.co/b5bfBxF/mobile-banking.png")`
                                }} />
                                <Card className="shadow-lg shadow-white ">
                                    <p className="text-white">Banking & Finance</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">HealthCare</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Government</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Travel & Hospitality</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Automotive</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Media & Entertainment</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Real Estate</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Investment</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">E-Learning</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Transportation</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">E-Commerce</p>
                                </Card>
                            </CardContainer>
                            <CardContainer className="transform transition duration-500 hover:scale-110">
                                <ColoredBox />
                                <Card className="shadow-lg shadow-white">
                                    <p className="text-white">Technical Services</p>
                                </Card>
                            </CardContainer>
                        </CardHolder>
                    </Holder>
                </Wrapper>
            </Section>
        </main>
    )
}

export default Industries;

const Card = styled.div`
   width: 90%;
   height: 60px;
   border: 2px solid lightblue;
   border-radius: 5px;
   background-color:#0064005e ;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   p{
    width:70%;
    font-weight: bold;
       
    @media (min-width:766px){
        width:80%;
    }

    @media (min-width:990px){
        width:90%;
        display: flex;
        margin-left: 30px;
        justify-content: flex-start;
        align-items: center;

    }
   }
`;

const ColoredBox = styled.div`
    width: 40px;
    height: 40px;
   
    /* margin-right: 20px; */
    position:absolute;
    border-radius:10px;
    z-index: 1;
    border:4.5px solid #fff;
    left:15px;

    @media (min-width:766px){
    left:0;
    z-index:1;
    }
`;

const CardContainer = styled.div`
   width:100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
    position: relative;
   
    @media (min-width:768px){
        width:50%;
    }
   
    @media (min-width:990px){
        width:30%;
    }
`;

const CardHolder = styled.div`
   width:100%;
   display: flex;
   flex-wrap:wrap;
   justify-content:center;
   align-items:center;
   padding:20px 0px;
`


const H1 = styled.h1`
    margin:0;
    font-size:12px;
    color:#000;

    @media (min-width:1024px){
        font-size:25px;
    }
`

const Text = styled.div``

const Holder = styled.div`
    width:100%;
    align-self:center;

    @media (min-width:1024px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:30px;
    margin:0;
    color:#fff;
    /* opacity:20%; */
   
    @media (min-width:1024px){
        font-size:50px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
    color:#2c2c2c;
`