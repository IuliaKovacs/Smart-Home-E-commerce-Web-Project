package com.azsmarthome.ecommerce.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="product_category")
@Getter
@Setter
public class ProductCategory {

    public ProductCategory(Long id, String categoryName, Set<Product> products) {
        this.id = id;
        this.categoryName = categoryName;
        this.products = products;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    @JsonBackReference
    @OneToMany(mappedBy = "category")
    private Set<Product> products;

    public ProductCategory() {

    }
}
