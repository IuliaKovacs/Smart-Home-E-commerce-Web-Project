package com.azsmarthome.ecommerce.service;

import com.azsmarthome.ecommerce.dao.ProductRepository;
import com.azsmarthome.ecommerce.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {


    private ProductRepository productRepository;

    public List<Product> listAllProducts() {
        return productRepository.findAll();
    }

    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    public Product getProduct(Long id) {
        return productRepository.findById(id).get();
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

}
