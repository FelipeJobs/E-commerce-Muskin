package com.generation.muskin.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.generation.muskin.model.Usuario;
import com.generation.muskin.model.UsuarioLogin;
import com.generation.muskin.repository.UsuarioRepository;
import com.generation.muskin.service.UsuarioService;

@RestController
@RequestMapping ("/usuarios")
@CrossOrigin (origins = "*", allowedHeaders = "*")
public class UsuarioController {
	
	@Autowired 
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping("/login")
	public ResponseEntity<UsuarioLogin> login(@RequestBody Optional<UsuarioLogin> usuarioLogin) {
		
		return usuarioService.autenticarUsuario(usuarioLogin)
				.map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());		
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> cadastrar(@RequestBody @Valid Usuario usuario) {
		
		return usuarioService.cadastrarUsuario(usuario)
				.map(resposta -> ResponseEntity.status(HttpStatus.CREATED).body(resposta))
				.orElse(ResponseEntity.badRequest().build());
	}
	
	@GetMapping ("/todos")
	public ResponseEntity <List <Usuario>> getAll() {
		return ResponseEntity.ok(usuarioRepository.findAll());			
	}
	
	@GetMapping ("/{id}")
	public ResponseEntity <Usuario> getById (@PathVariable Long id) {
		return usuarioRepository.findById(id)
				.map(resposta -> ResponseEntity.ok (resposta))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping ("/nome/{nome}")
	public ResponseEntity <List <Usuario>> getByNome(@PathVariable String nome) {
		return ResponseEntity.ok(usuarioRepository.findAllByNomeContainingIgnoreCase(nome));
	}

	@PostMapping 
	public ResponseEntity <Usuario> postUsuario(@Valid @RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(usuario));
	}
	
	@PutMapping("/atualizar")
	public ResponseEntity <Usuario> putUsuario (@Valid @RequestBody Usuario usuario){
		return usuarioService.atualizarUsuario(usuario)
				.map(resposta -> ResponseEntity.ok (usuarioRepository.save(usuario)))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	public void deleteUsuario(@PathVariable Long id) {
		Optional <Usuario> post = usuarioRepository.findById(id);
		if (post.isEmpty())
			throw new ResponseStatusException (HttpStatus.BAD_REQUEST);
		usuarioRepository.deleteById(id);	
	}
	
	
	
}