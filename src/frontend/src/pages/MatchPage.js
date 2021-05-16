import {React, useState, useEffect} from 'react'
import {MatchDetailCard} from "../components/MatchDetailCard";
import {useParams} from "react-router-dom";
import './MatchPage.scss'
import {YearSelector} from "../components/YearSelector";

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(() => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`)
                const data = await response.json();
                setMatches(data);
            };
            fetchMatches();
        },
        [teamName, year]
    )
    return (
        <div className="MatchPage">

            <div className={"year-selector"}>
                <h3>Select Year</h3>
                <YearSelector teamName={teamName}/>
            </div>


            <div>

                <h1 className={"page-heading"}>{teamName} Matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailCard teamName={teamName} match={match}/>)
                }

            </div>

            <div className={"color"}>

                <div style={{display: "flex"}}>
                    <div className={"won-div"}></div>
                    <div style={{padding: "10px"}}>Win</div>
                </div>

                <div style={{display: "flex"}}>
                    <div className={"loss-div"}></div>
                    <div style={{padding: "10px"}}>Loss</div>
                </div>

            </div>

        </div>
    );
}

