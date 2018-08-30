package app.controller;

import app.model.Customer;
import app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
        customers.forEach(System.out::println);
        return customers;
    }
}
