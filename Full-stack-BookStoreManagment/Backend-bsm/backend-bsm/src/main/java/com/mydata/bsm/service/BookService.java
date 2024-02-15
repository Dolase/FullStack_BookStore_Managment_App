package com.mydata.bsm.service;

import java.util.List;

import com.mydata.bsm.dto.BookDto;
import com.mydata.bsm.exception.ResourceNotFoundException;

public interface BookService {

	public BookDto createbookData(BookDto bookDto);
	public BookDto getBooksById(Long id) throws ResourceNotFoundException;
	public List<BookDto> getAllbooks();
	public BookDto updateBookData(Long id,BookDto bookDto) throws ResourceNotFoundException;
	public void deleteBookRecord(Long id)throws ResourceNotFoundException;
}
