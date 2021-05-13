import {React, useEffect, useState} from 'react'
import {MatchSmallCard} from "../components/MatchSmallCard";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {useParams} from 'react-router-dom'

import './TeamPage.scss'
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {


    const [team, setTeam] = useState({matchList: []});
    const {teamName} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`)
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        },
        [teamName]
    );

    if (!team || !team.teamName) {
        return <h1>Team not found</h1>
    }

    return (
        <div className="TeamPage">
            <div className={"team-name-section"}><h1 className={"team-name"}>{team.teamName}</h1></div>

            <div className={"win-loss-section"}>
                Wins / Losses
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#869080' },
                        { title: 'Wins', value: team.totalWins, color: '#4A4A4A' },
                     ]}
                />
            </div>

            <div className={"match-detail-section"}>
              <h1>Latest Matches</h1>
                <MatchDetailCard teamName={team.teamName} match={team.matchList[0]}/>
            </div>
            {team.matchList.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match}/>)}
            <div className={"more-link"}>
                <a href={"#"}>More</a>
            </div>
        </div>
    );
}

