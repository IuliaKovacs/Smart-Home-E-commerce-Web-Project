package com.azsmarthome.ecommerce.dao;

import com.azsmarthome.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
