package com.prachi.springdemoprj.web;

import com.prachi.springdemoprj.data.Ticket;
import com.prachi.springdemoprj.data.TicketsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="/api/tickets")
public class TicketsController {

    private final TicketsRepository ticketsRepository;

    public TicketsController(TicketsRepository ticketsRepository) {
        this.ticketsRepository = ticketsRepository;
    }

    @GetMapping
    private List<Ticket> getAll(){
        return ticketsRepository.findAll();
    }

    @PostMapping
    private void createTicket(@RequestBody Ticket newTicket){
        ticketsRepository.save(newTicket);
    }

    @PutMapping
    private void updateTicket(@RequestBody Ticket newTicket){
        ticketsRepository.save(newTicket);
    }

    @DeleteMapping("{id}")
    private void deleteTicket(@PathVariable Long id){
        ticketsRepository.deleteById(id);
    }
}
