import {React} from 'react'
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

export const TeamPage = () => {
    return (
        <div className="TeamPage">
            <h1>Royal Challenger Bangalore</h1>
            <MatchDetailCard/>
            <MatchSmallCard/>
            <MatchSmallCard/>
            <MatchSmallCard/>

        </div>
    );
}

