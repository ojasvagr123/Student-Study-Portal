package com.studentcompanion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.studentcompanion.model.Branch;

public interface BranchRepository extends JpaRepository<Branch, Long> {}
