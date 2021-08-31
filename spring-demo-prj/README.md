# Spring-REST-Assessment-Prep



## Specifications - Part One

1. Create the `Ticket` model with the following members:
    1. A private field `id` of type `Long`
    2. A private field `name` of type `String`
    3. One public  empty constructor
    4. All public getters and setters
    5. Annotate class and fields with all necessary `javax.persistence` annotations in order to be registered as an Entity.
        1. This includes columns for `id` and `name`.
    
---

2. Create the `TicketsRepository` ***interface*** and make it extend `JpaRepository`

3. Create the `TicketsController`,listening on `/api/tickets` (header declaration not needed), inject the `TicketsRepository` and implement the following methods:
    1. `getAll`
    2. `create`
    3. `update`
    4. `deleteById` - listening on `/api/tickets/{id}`
        1. This method *must* delete the Order record related to the `Long id` parameter given in the path.


4. As Open API is included in this project, navigate to `http://localhost:8080/swagger-ui.html`.
    1. From here, test your `TicketsController` endpoints.

---
## Specifications - Part Two

1. Create the `User` class, with the following members:
    1. A private `id` of type `Long`
    2. A private `name` of type `String`
    3. A public empty constructor
    4. All public getters and setters


2. Annotate `User` with all annotations necessary for registration as an Entity.

---

3. Add private fields to both `Ticket` and `User` to reflect that:
    1. One `User` has many tickets
    2. Each `Ticket` has only one `User`
    3. Apply getters/setters


4. Apply necessary annotations to reflect the entity relationship described above
    1. ***BE SURE*** to add necessary `@JsonIgnoreProperties` and ignore fields which would cause infinite recursion


5. Restart your application and see that the tables have been updated


6. Create the `UsersRepository` and `UsersController` (listening on `/api/users`, header declaration not needed), following the same CRUD pattern as in Part One


7. Test your application from Swagger
    1. ***BE SURE*** to create a `User` before attempting to create an `Order` with said associated `User`.
 
