package inventario.back.Controller;

import inventario.back.Entity.Subcategoria;
import inventario.back.service.SubcategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategorias")
public class SubcategoriaController {
    @Autowired
    private SubcategoriaService subcategoriaService;

    @GetMapping
    public List<Subcategoria> getAllSubcategorias() {
        return subcategoriaService.getAllSubcategorias();
    }

    @GetMapping("/{id}")
    public Subcategoria getSubcategoriaById(@PathVariable int id) {
        return subcategoriaService.getSubcategoriaById(id);
    }

    @PostMapping
    public Subcategoria createSubcategoria(@RequestBody Subcategoria subcategoria) {
        return subcategoriaService.saveOrUpdateSubcategoria(subcategoria);
    }

    @PutMapping("/{id}")
    public Subcategoria updateSubcategoria(@PathVariable int id, @RequestBody Subcategoria subcategoria) {
        subcategoria.setIdsubcategoria(id);
        return subcategoriaService.saveOrUpdateSubcategoria(subcategoria);
    }

    @DeleteMapping("/{id}")
    public void deleteSubcategoria(@PathVariable int id) {
        subcategoriaService.deleteSubcategoria(id);
    }
}