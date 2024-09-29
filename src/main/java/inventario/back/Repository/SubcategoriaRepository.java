package inventario.back.Repository;


import inventario.back.Entity.Subcategoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubcategoriaRepository extends JpaRepository<Subcategoria, Integer> {
}