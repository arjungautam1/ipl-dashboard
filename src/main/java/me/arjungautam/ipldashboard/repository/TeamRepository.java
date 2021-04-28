/**
 * @author Arjun Gautam
 * Project :ipldashboard
 * Date : 2021-04-28
 * Time : 12:34
 */
package me.arjungautam.ipldashboard.repository;

import me.arjungautam.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long> {
    Team findByTeamName(String teamName);

}
