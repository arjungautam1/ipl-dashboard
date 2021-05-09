/**
 * @author Arjun Gautam
 * Project :ipldashboard
 * Date : 2021-04-28
 * Time : 12:46
 */
package me.arjungautam.ipldashboard.repository;

import me.arjungautam.ipldashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    @Query("select m from Match m where(m.team1=:teamName or m.team2=:teamName) and m.date between :dateStart and :dateEnd order by date desc")
    List<Match> getMatchesByTeamBetweenDates
            (@Param("teamName") String teamName,
             @Param("dateStart") LocalDate dateStart,
             @Param("dateEnd") LocalDate dateEnd);

    default List<Match> findLatestMatchByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, 4));
    }

}
