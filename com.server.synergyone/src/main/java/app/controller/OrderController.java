package app.controller;

import app.model.Customer;
import app.model.Order;
import app.model.OrderStatus;
import app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private CustomerController customerController;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/orders", method = RequestMethod.GET)
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/customers/{id}/orders", method = RequestMethod.GET)
    public List<Order> getOrdersByCustomerId(@PathVariable Long id) {
        return orderService.getOrdersByCustomerId(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/customers/{id}/orders", method = RequestMethod.POST)
    public Order addOrderByCustomerId(@PathVariable Long id, @RequestBody Order order) {
        Customer customer = customerController.getCustomerById(id);
        order.setCustomer(customer);
        order.setStatus(OrderStatus.Unconfirmed);
        return orderService.addOrderByCustomerId(order);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/orders/{id}", method = RequestMethod.GET)
    public Order getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "/orders/{id}/confirm", method = RequestMethod.PATCH)
    public Order editOrder(@PathVariable Long id, @RequestBody Order order) {
        order.setStatus(OrderStatus.Confirmed);
        order.setCustomer(getOrderById(id).getCustomer());
        return orderService.editOrder(order);
    }
}