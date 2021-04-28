/**
 * @author Arjun Gautam
 * Project :ipldashboard
 * Date : 2021-04-28
 * Time : 12:32
 */
package me.arjungautam.ipldashboard.controller;

import me.arjungautam.ipldashboard.model.Team;
import me.arjungautam.ipldashboard.repository.MatchRepository;
import me.arjungautam.ipldashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {

        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatchList(matchRepository.findLatestMatchByTeam(teamName, 4));
        return team;
    }
}
