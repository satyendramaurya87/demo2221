import React from "react";
import Layout from "../components/Layout";
import {ABOUT_DATA, TALKS, ARTICLE_LINKS} from "../../config/about";
import styled from 'styled-components';
import {tokens} from "../../config/themes"
import ProfilePicture from "../assets/images/profile.png"
import {Icons} from "../assets/icon.js"

const AboutSection=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:${tokens.space[8]} 0;
    color:${tokens.colors.primary[0]};
    width:100%;
    div{
        width:50%;
        margin-right:5%;
    }
    h1{
        margin-bottom:${tokens.space[8]};
        font-weight:${tokens.fontWeights.medium};
        font-size:${tokens.fontSizes[7]};
    }
    p{
        font-size:${tokens.fontSizes[4]};
        text-align: justify;
    }
    img{
        width:25%;
        box-shadow: 6px 6px 0 0 white, 6px 6px 0 2px ${tokens.colors.primary[1]};
    }
    @media only screen and (max-width: 768px) {
        flex-direction:column;
        div,img{
            width:70%
        }
        img{
            margin-top:${tokens.space[8]};
        }
    }
`;

const DownloadLink= styled.a`
    text-decoration:none;
    font-size:${tokens.fontSizes[5]};
    color:${tokens.colors.tertiary[0]};
    font-weight:${tokens.fontWeights[1]};
`;

const DesriptionSection= styled.div`
    padding:4% 8%;
    width:100%;
    h2{
        font-size:${tokens.fontSizes[5]};
        color:${tokens.colors.tertiary[0]};
        margin-bottom:${tokens.space[4]};
    }
    iframe{
        margin:0 ${tokens.space[4]} ${tokens.space[4]} 0;
        width:340px;
        height:200px;
        @media only screen and (max-width: 768px) {
            width:100%;
            height:340px;
        }
        @media only screen and (max-width: 576px) {
            height:280px;
        }
    }
    @media only screen and (max-width: 576px) {
        padding:4% 2%;
    }
`;

const MediumCard = styled.div`
    height:180px;
    width:35vw;
    border:1px solid #dcd4d4;
    box-shadow: 0 2px 5px rgba(154,160,185,.05), 0 5px 10px rgba(166,173,201,.2);
    display:flex;
    position:relative;
    margin: ${tokens.space[4]} ${tokens.space[4]} ${tokens.space[4]} 0;
    img{
        height:100%;
        width:195px;
    }
    .desc-container{
        padding:${tokens.space[6]};
    }
    .title{
        font-size:${tokens.fontSizes[6]};
        color:${tokens.colors.primary[0]};
    }
    .footer-desc{
        position:absolute;
        bottom:${tokens.space[6]};
        font-size:${tokens.fontSizes[3]};
        display:flex;
        align-items:center;
        color:${tokens.colors.primary[2]};
        span{
            margin: 0 ${tokens.space[2]};
        }
        
    }
    @media only screen and (max-width: 1024px) {
        width:100%;
        margin: ${tokens.space[4]} 0;
    }
    @media only screen and (max-width: 576px) {
        height:160px;
        .title{
            font-size:${tokens.fontSizes[4]};
        }
        img{
            width:150px;
        }
    }
`;


const AboutPage = () => {
  return (
    <Layout>
        <AboutSection>
            <div>
                <h1>{ABOUT_DATA.heading}</h1>
                {
                    ABOUT_DATA.description.map(paragraph=>(
                        <>
                            <p>{paragraph}</p><br/>
                        </>
                    ))
                }
                <p>If you would like to know more about me, feel free to <a href="https://twitter.com/tanishaaa03">connect on twitter</a>.</p><br/>
                <DownloadLink href={ABOUT_DATA.resume} download>
                    Download Resume {Icons.download}
                </DownloadLink>
            </div>
            <img src={ProfilePicture} alt="profile of Tanisha Sabherwal" />
        </AboutSection>
        <DesriptionSection>
                <h2>TALKS</h2>
                <div>
                    {
                        TALKS.map(talkDescription=>(
                            <iframe
                                src={talkDescription.url}
                                title={talkDescription.title}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                frameBorder="0"
                                webkitallowfullscreen="true"
                                mozallowfullscreen="true"
                                allowFullScreen
                                />
                        ))
                    }
                </div>
        </DesriptionSection>
        <DesriptionSection>
                <h2>ARTICLES</h2>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    {
                        ARTICLE_LINKS.map(article=>(
                            <a href={article.link} rel="noreferrer" target="_blank">
                                <MediumCard>
                                        <img src={article.thumbnail} alt={article.title} aria-hidden="true"/>
                                        <div className="desc-container">
                                            <p className="title">{article.title}</p>
                                            <div className="footer-desc">
                                                <img src="https://miro.medium.com/max/3150/1*sHhtYhaCe2Uc3IU0IgKwIQ.png" alt="medium logo" aria-hidden="true" style={{height:"20px", width:"20px"}}/> 
                                                <span>|</span>
                                                <p>Medium</p>
                                            </div>
                                        </div>
                                </MediumCard>
                            </a>
                        ))
                    }
                </div>
        </DesriptionSection>
    </Layout>
  );
};

export default AboutPage;

