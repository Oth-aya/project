package tn.enig.DappUnv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.enig.DappUnv.model.Diploma;


@Repository
public interface IDiploma extends JpaRepository<Diploma, Long> {

}
