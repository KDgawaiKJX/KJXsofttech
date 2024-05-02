import styled from "styled-components";

const Process = () => {
    const data = [
        {
            id: 1,
            title: "1. Requirement Gathering",
            discrp: "We follow the important need of gathering requirements, assets, and data to start our task.",
            image: "https://i.ibb.co/Lxp34hX/requirement.jpg"
        },
        {
            id: 2,
            title: "2. UI/UX Design Prototype",
            discrp: "We make appealing and enchanting designs with the most recent instruments of planning, which will be sent ahead for the Development team to start.",
            image: "https://i.ibb.co/Stp35CX/prototyoe.png"
        },
        {
            id: 3,
            title: "3. Development",
            discrp: "Advancement of versatile application/web/block-chain began utilizing most recent devices and innovations with straightforwardness.",
            image: "https://i.ibb.co/tmDLWL0/pngtree-web-development-concept-flat-design-png-image-2197063.jpg"
        },
        {
            id: 4,
            title: "4. Quality Assurance",
            discrp: "KjxSoftTech values quality and furnishes 100 percent bug free application with no split the difference in it.",
            image: "https://i.ibb.co/PMctqcq/Quality-Assurance-Testing.png"
        },
        {
            id: 5,
            title: "5. Deployment & Support",
            discrp: "After preliminary and following all cycles, your website is prepared to send off online. We are here to answer every one of your questions.",
            image: "https://i.ibb.co/wy49sRW/mobile-app-development-process-step-6-deployment-and-launch-Photo-Room-png-Photo-Room.png"
        }
    ];

    return (
        <Section>
            <VideoWrapper>
                <video autoPlay loop muted>
                    <source src="https://youtu.be/mOFoh9FUR8w?si=JwKpTumfF6bSonW_" type="video/mp4" />
                </video>
            </VideoWrapper>
            <Wrapper>
                <Title className='text-cyan-700'>Process</Title>
                <Holder>
                    <Text>
                        <H1>Our Process</H1>
                    </Text>
                    <Cards>
                        {data.map(({ id, title, discrp, image }) => (
                            <Card key={id}>
                                <Image src={image} alt={title} />
                                <H2>{title}</H2>
                                <P2>{discrp}</P2>
                            </Card>
                        ))}
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    );
};

export default Process;

const P2 = styled.p`
    font-size: 15px;
    width: 90%;
    font-weight: normal;
    color: grey;
    text-align: center;
`

const H2 = styled.h2`
    margin: 0;
    font-size: 20px;
`

const Image = styled.img`
    height: 210px;
    width: 300px;
    object-fit: wrap;
    margin-bottom: 20px;
`

const Card = styled.div`
    width: 400px; /* Fixed width for all cards */
    height: 350px; /* Fixed height for all cards */
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 20px;
    box-shadow: 0px 0px 10px lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: all 0.2s ease-in-out; 

    &:hover {
        transform: scale(1.10); /* Increase size on hover */
        box-shadow: 0px 0px 15px black;
    }
`

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
`

const H1 = styled.h1`
    margin: 0;
    font-size: 17px;

    @media (min-width: 1024px) {
        font-size: 35px;
    }
`

const Text = styled.div``

const Holder = styled.div`
    width: 100%;
    align-self: center;

    @media (min-width: 1024px) {
        width: 95%;
    }
`

const Title = styled.h1`
    font-size: 40px;
    margin: 0;

    @media (min-width: 1024px) {
        font-size: 65px;
    }
`

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
`

const Section = styled.section`
    width: 100%;
    position: relative; /* Ensure the wrapper is positioned relative to this */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    color: #006400;
`

const VideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; /* Ensure the video is behind other content */
    
    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
