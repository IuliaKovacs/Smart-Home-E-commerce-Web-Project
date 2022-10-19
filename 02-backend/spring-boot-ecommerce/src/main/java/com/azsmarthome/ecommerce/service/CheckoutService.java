package com.azsmarthome.ecommerce.service;

import com.azsmarthome.ecommerce.dto.Purchase;
import com.azsmarthome.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
