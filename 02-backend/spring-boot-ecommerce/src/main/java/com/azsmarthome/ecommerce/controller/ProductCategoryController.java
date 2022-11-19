package com.azsmarthome.ecommerce.controller;

import com.azsmarthome.ecommerce.dao.ProductCategoryRepository;
import com.azsmarthome.ecommerce.dao.ProductRepository;
import com.azsmarthome.ecommerce.entity.Product;
import com.azsmarthome.ecommerce.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController("/product-category")
public class ProductCategoryController {

    @Autowired
    ProductCategoryRepository productCategoryRepository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping
    List<ProductCategory> getProductCategorys() {
        return productCategoryRepository.findAll();
    }

    @PostMapping("/product-category")
    ProductCategory createProductCategory(@RequestBody ProductCategory productCategory) {
        return productCategoryRepository.save(productCategory);
    }

    @PutMapping("/api/product-category/{productCategoryId}/products/{productId}")
    Product assignProductCategoryToProduct(
            @PathVariable Long productCategoryId,
            @PathVariable Long productId
    ) {
        Product product = productRepository.findById(productId).get();
        ProductCategory productCategory = productCategoryRepository.findById(productCategoryId).get();
        product.setCategory(productCategory);
        return productRepository.save(product);
    }
}
