package com.prachi.springdemoprj.web;

import com.prachi.springdemoprj.data.Ticket;
import com.prachi.springdemoprj.data.TicketsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path ="api/tickets", headers = "Accepts=application/json")
public class TicketsController {

    private final TicketsRepository ticketsRepository;

    public TicketsController(TicketsRepository ticketsRepository) {
        this.ticketsRepository = ticketsRepository;
    }

    @GetMapping
    private List<Ticket> getAll(){
        return ticketsRepository.findAll();
    }
}
