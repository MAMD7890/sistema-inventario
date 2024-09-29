package inventario.back.service;


import inventario.back.Entity.Subcategoria;
import inventario.back.Repository.SubcategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubcategoriaService {
    @Autowired
    private SubcategoriaRepository subcategoriaRepository;

    public List<Subcategoria> getAllSubcategorias() {
        return subcategoriaRepository.findAll();
    }

    public Subcategoria getSubcategoriaById(int id) {
        return subcategoriaRepository.findById(id).orElse(null);
    }

    public Subcategoria saveOrUpdateSubcategoria(Subcategoria subcategoria) {
        return subcategoriaRepository.save(subcategoria);
    }

    public void deleteSubcategoria(int id) {
        subcategoriaRepository.deleteById(id);
    }
}