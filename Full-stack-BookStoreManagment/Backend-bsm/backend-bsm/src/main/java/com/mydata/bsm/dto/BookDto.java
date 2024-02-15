package com.mydata.bsm.dto;

import jakarta.persistence.Column;

public class BookDto {
	
      private Long id;
	  private String name;
	  private String edition;
	  private float price;
	  
	  public BookDto() {}
	public BookDto(Long id, String name, String edition, float price) {
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
