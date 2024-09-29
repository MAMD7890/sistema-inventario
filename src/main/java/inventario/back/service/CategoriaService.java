package inventario.back.service;

import inventario.back.Entity.Categoria;
import inventario.back.Repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> getAllCategorias() {
        return categoriaRepository.findAll();
    }

    public Categoria getCategoriaById(int id) {
        return categoriaRepository.findById(id).orElse(null);
    }

    public Categoria saveOrUpdateCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public void deleteCategoria(int id) {
        categoriaRepository.deleteById(id);
    }
}