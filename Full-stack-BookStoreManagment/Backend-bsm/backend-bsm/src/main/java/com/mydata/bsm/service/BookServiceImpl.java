package com.mydata.bsm.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mydata.bsm.dto.BookDto;
import com.mydata.bsm.entity.Book;
import com.mydata.bsm.exception.ResourceNotFoundException;
import com.mydata.bsm.mapper.BookMapper;
import com.mydata.bsm.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService{
	
	BookRepository br;
	public BookServiceImpl(BookRepository br) {
		super();
		this.br = br;
	}

	@Override
	public BookDto createbookData(BookDto bookDto) {
		
		
		Book book=BookMapper.mapToBook(bookDto);
		Book saveBook=br.save(book);
		BookDto bdto= BookMapper.mapToBookDto(saveBook);
			 return bdto;
	}

	@Override
	public BookDto getBooksById(Long id) throws ResourceNotFoundException {
		Book b=br.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Book Data is not exist with given Id"+id));
		return BookMapper.mapToBookDto(b);
	}

	@Override
	public List<BookDto> getAllbooks() {
		List<Book> book=br.findAll();
		
		return book.stream()
				.map((books) -> BookMapper.mapToBookDto(books))
				.collect(Collectors.toList());
	}

	@Override
	public BookDto updateBookData(Long id, BookDto bdto) throws ResourceNotFoundException {
		Book b=br.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Book Data is not exist with given Id"+id));
		
		b.setName(bdto.getName());
		b.setEdition(bdto.getEdition());
		b.setPrice(bdto.getPrice());
		Book book=br.save(b);
		return BookMapper.mapToBookDto(book);
	}

	@Override
	public void deleteBookRecord(Long id) throws ResourceNotFoundException {
		Book book=br.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Book Data is not exist with given Id"+id));
		br.deleteById(id);
	}

	

}
