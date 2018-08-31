package app.service;

import app.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CustomerService {
    List<Customer> getAllCustomers();

    Customer getCustomerById(Long id);

    Customer addCustomer(Customer customer);

    Customer editCustomer(Customer customer);
}
