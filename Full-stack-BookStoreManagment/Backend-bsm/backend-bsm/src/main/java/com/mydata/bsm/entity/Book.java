package com.mydata.bsm.entity;

import java.util.Stack;

import org.hibernate.annotations.GeneratorType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "book")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "b_id")
	  private Long id;
	
	@Column(name = "b_name")
	  private String name;
	
	@Column(name = "b_edition")
	  private String edition;
	
	@Column(name = "b_price")
	  private float price;

	public Book() {}
	public Book(Long id, String name, String edition, float price) {
		super();
		this.id = id;
		this.name = name;
		this.edition = edition;
		this.price = price;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEdition() {
		return edition;
	}
	public void setEdition(String edition) {
		this.edition = edition;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	
	
	    }
 

