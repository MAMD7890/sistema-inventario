package inventario.back.Repository;

import inventario.back.Entity.Movimientos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovimientosRepository extends JpaRepository<Movimientos, Integer> {
}