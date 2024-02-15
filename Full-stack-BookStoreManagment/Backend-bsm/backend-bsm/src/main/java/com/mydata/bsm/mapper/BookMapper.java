package com.mydata.bsm.mapper;

import com.mydata.bsm.dto.BookDto;
import com.mydata.bsm.entity.Book;

public class BookMapper {

	public static BookDto mapToBookDto(Book b) {
		
		return new BookDto(b.getId(),b.getName(),b.getEdition(),b.getPrice());
	}
	
    public static Book mapToBook(BookDto Bdto) {
		
		return new Book(Bdto.getId(),Bdto.getName(),Bdto.getEdition(),Bdto.getPrice());
		
	}
}
