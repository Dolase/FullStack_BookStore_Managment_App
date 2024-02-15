package com.mydata.bsm.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mydata.bsm.dto.BookDto;
import com.mydata.bsm.entity.Book;
import com.mydata.bsm.exception.ResourceNotFoundException;
import com.mydata.bsm.service.BookService;
@CrossOrigin("*")
@RestController
@RequestMapping("api/books")
public class BookController {
	
	BookService bs;
	public BookController(BookService bs) {
		super();
		this.bs = bs;
	}
	
	@PostMapping
	public ResponseEntity<BookDto> createBookRecord(@RequestBody BookDto bookDto){
		
		BookDto bdto=bs.createbookData(bookDto);
		
		return new ResponseEntity<>(bdto,HttpStatus.CREATED);
		
	} 

	@GetMapping("{id}")
	public ResponseEntity<BookDto> getBookRecordById(@PathVariable Long id) throws ResourceNotFoundException{
		
		BookDto bdto=bs.getBooksById(id);
		return ResponseEntity.ok(bdto);
		
	}
	
	@GetMapping()
	public ResponseEntity<List<BookDto>> getAllBooksRecord() 
	{
		List<BookDto>  bdto=bs.getAllbooks();
		return ResponseEntity.ok(bdto);
				
	}
	
	@PutMapping("{id}")
	public ResponseEntity<BookDto> updateBookRecord(@PathVariable Long id,@RequestBody BookDto bdto) throws ResourceNotFoundException{
		
		BookDto bd=bs.updateBookData(id, bdto);
		return ResponseEntity.ok(bd);
		
	}
	@DeleteMapping("{id}")
	public ResponseEntity<String> deletebookRecordById(@PathVariable Long id) throws ResourceNotFoundException{
		
		bs.deleteBookRecord(id);
		return ResponseEntity.ok("Book Record Deleted Successfully");
		
	}
}
