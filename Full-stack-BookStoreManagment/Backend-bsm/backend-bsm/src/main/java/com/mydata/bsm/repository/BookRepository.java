package com.mydata.bsm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mydata.bsm.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
