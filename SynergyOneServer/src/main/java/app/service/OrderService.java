package app.service;

import app.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();

    List<Order> getOrdersByCustomerId(Long id);
}
