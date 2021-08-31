package com.prachi.springdemoprj.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketsRepository extends JpaRepository<Ticket, Long> {
}
