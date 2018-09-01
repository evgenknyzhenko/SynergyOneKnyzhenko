package app.controller;

import app.model.Order;
import app.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

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
        System.out.println(order.getDescription());
        System.out.println(id);
        return null;
    }
}




















