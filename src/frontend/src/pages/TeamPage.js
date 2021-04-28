import {React, useEffect, useState} from 'react'
import {MatchSmallCard} from "../components/MatchSmallCard";
import {MatchDetailCard} from "../components/MatchDetailCard";


export const TeamPage = () => {

    const [team, setTeam] = useState({matchList: []});

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:8080/team/Delhi Capitals')
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        },
        []
    )

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match={team.matchList[0]}/>
            {team.matchList.slice(1).map(match => <MatchSmallCard match={match}/>)}
        </div>
    );
}

