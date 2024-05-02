import React, { useState } from "react"
import styled from "styled-components"

import img from "../../../assets/fixed.png"
import img1 from "../../../assets/hourly.png"
import img2 from "../../../assets/contract.png"
import AI_img from "../../../assets/machine.png"
import enterprise from "../../../assets/erp.png"
import UIUX from "../../../assets/uiux.png"
import dataVisualization from "../../../assets/data_visualisation.png"
import IOT from "../../../assets/cloud.png"
import devops from "../../../assets/devop.png"
import operation from "../../../assets/custom.png"
import ecommerce from "../../../assets/online.png"
import { Link } from "react-router-dom"

const Service = () => {
    return (
        <Section>
            <Wrapper>
                <Title className='text-cyan-600'>Services</Title>
                <Holder>
                    <Text>
                        <H1>What Do We Offer ?</H1>
                        <Button className="bg-amber-400 hover:bg-amber-500 text-white" onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth' // Optional: smooth scrolling animation
                            });
                        }} to={"/services"}>All Services</Button>
                    </Text>
                    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                            <Hold >
                                <Card className="group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500   ">
                                    <img src={AI_img} />
                                    <span className="text-slate-900 ">Machine Learning/AI</span>
                                </Card>
                                <Card className=" group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500   ">
                                    <img src={IOT} />
                                    <span className="text-slate-900 ">IOT & Cloud Services</span>
                                </Card>
                            </Hold>
                            <Hold>
                                <Card className=" group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500  ">
                                    <img src={enterprise} />
                                    <span className="text-slate-900 ">Solution & ERP Design</span>
                                </Card>
                                <Card className=" group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500  ">
                                    <img src={devops} />
                                    <span className="text-slate-900 ">Devops</span>
                                </Card>
                            </Hold>
                            <Hold>
                                <Card className=" group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500   ">
                                    <img src={UIUX} />
                                    <span className="text-slate-900 ">UI/UX Development</span>
                                </Card>
                                <Card className=" group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500    ">
                                    <img src={operation} />
                                    <span className="text-slate-900 ">Custom Software Development</span>
                                </Card>
                            </Hold>
                            <Hold>
                                <Card className=" group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500   ">
                                    <img src={dataVisualization} />
                                    <span className="text-slate-900 ">Data Visualization</span>
                                </Card>
                                <Card className=" group  bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500    ">
                                    <img src={ecommerce} />
                                    <span className="text-slate-900 ">E-commerce Development</span>
                                </Card>
                            </Hold>
                        </div>

                    </div>

                    {/* <div class="bg-white">
                                <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <h2 class="sr-only">Products</h2>

                                    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                        <div   className=" border-slate-400 border-solid border  bg-cover shadow-md">
                                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                                            <img src={AI_img}/>
                                            </div>
                                            <span className="text-slate-900 ">Machine Learning/AI</span>
                                        </div>
                                        <a href="#" class="group">
                                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                            </div>
                                            <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                                            <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
                                        </a>
                                        <a href="#" class="group">
                                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                            </div>
                                            <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                                            <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
                                        </a>
                                        <a href="#" class="group">
                                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                            </div>
                                            <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                                            <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
                                        </a>


                                    </div>
                                </div>
                            </div> */}


                </Holder>
            </Wrapper>
        </Section>
    )
}

export default Service;

const Card = styled.div`
    width:100%;
    height: 200px;
    background-color: fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin:20px 0px;
    box-shadow: 0px 0px 5px lightgray;
    transition: all 550ms;
    img{
        width: 180px;
        height: 180px;
        object-fit: contain;
    }

    span{
        text-align:center;
        font-weight:500;
        margin-top:-20px
    }

  
`

const Hold = styled.div`
    width:100%;
`

const Button = styled(Link)`
    width:120px;
    height:45px;
    border:none;
    border-radius:50px;
    font-size:14px;
    font-weight:bold;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    
    @media (min-width:766px){
    width: 129px;
    height: 41px;
    border:none;
    border-radius:43px;
    font-size:17px;
    font-weight:bold;
   
    }
`

const HolderTwo = styled.div`
    width:100%;
    display: grid;
    gap:20px;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(1,1fr);

    @media (min-width:766px){
        width:100%;
        height:70vh;
        grid-template-columns: repeat(4,1fr);
    }   
`

const H1 = styled.h1`
    margin:0;
    font-size:12px;
    color: #000;

    @media (min-width:1024px){
        font-size:25px;
    }
`

const Text = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    padding:25px 0px;
`

const Holder = styled.div`
    width:100%;
    align-self:center;

    @media (min-width:766px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:30px;
    margin:0;
    
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
    background-color: #fff;
    padding:20px 0px;
    color:#000;
`