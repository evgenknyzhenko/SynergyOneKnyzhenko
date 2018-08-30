package app.controller;

import app.model.Customer;
import app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/customers", method = RequestMethod.GET)
    public List<Customer> getAllCustomers() {
        List<Customer> customers = customerService.getAllCustomers();
        return customers;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/customer/{id}", method = RequestMethod.GET)
    public Customer getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id);
    }
}
