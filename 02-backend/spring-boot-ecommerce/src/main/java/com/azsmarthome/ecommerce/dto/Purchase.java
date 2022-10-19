package com.azsmarthome.ecommerce.dto;

import com.azsmarthome.ecommerce.entity.Address;
import com.azsmarthome.ecommerce.entity.Customer;
import com.azsmarthome.ecommerce.entity.Order;
import com.azsmarthome.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
