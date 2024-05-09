import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import styled from "styled-components";
const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <InfoBox>
                <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-white mx-5">
                    Hi, I'm
                    <span className="font-semibold mx-2 text-white">Tian</span>
                    👋
                    <br />A Front End developer
                </h1>
            </InfoBox>
        );

    if (currentStage === 2) {
        return (
            <InfoBox>
                <p className="font-medium sm:text-xl text-center">
                    Worked with many companies <br /> and picked up many skills along the way
                </p>

                <Link to="/about" className="neo-brutalism-white neo-btn">
                    Learn more
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </InfoBox>
        );
    }

    if (currentStage === 3) {
        return (
            <InfoBox>
                <p className="font-medium text-center sm:text-xl">
                    Led multiple projects to success over the years. <br /> Curious about the
                    impact?
                </p>

                <Link to="/projects" className="neo-brutalism-white neo-btn">
                    Visit my portfolio
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </InfoBox>
        );
    }

    if (currentStage === 4) {
        return (
            <InfoBox>
                <p className="font-medium sm:text-xl text-center">
                    Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
                </p>

                <Link to="/contact" className="neo-brutalism-white neo-btn">
                    Let's talk
                    <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </Link>
            </InfoBox>
        );
    }

    return null;
};

export default HomeInfo;
const InfoBox = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    display: flex;
    color: rgb(255, 255, 255);
    flex-direction: column;
    gap: 12px;
    max-width: 672px;
    background: #2b77e7;
    border-radius: 10px;
    border: #2b77e7;
    box-shadow: 0.6vmin 0.6vmin #336cc1, 1vmin 1vmin #0092db, 1vmin 1vmin #0092db,
        0.65vmin 1vmin #0092db, 1vmin 0.65vmin #0092db;
    padding-top: 16px;
    padding-bottom: 48px;
    padding-left: 32px;
    padding-right: 32px;
`;
