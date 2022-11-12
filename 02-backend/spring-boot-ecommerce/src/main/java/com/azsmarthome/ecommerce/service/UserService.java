package com.azsmarthome.ecommerce.service;

import com.azsmarthome.ecommerce.dao.UserRepository;
import com.azsmarthome.ecommerce.entity.User;

import java.util.List;

public class UserService {



        private UserRepository userRepository;
        public List<User> listAllUser() {
            return userRepository.findAll();
        }

        public void saveUser(User user) {
            userRepository.save(user);
        }

        public User getUser(Long id) {
            return userRepository.findById(id).get();
        }

        public void deleteUser(Long id) {
            userRepository.deleteById(id);
        }

}
