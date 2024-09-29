package inventario.back.Entity;

// TipoMovimiento.java

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "tipo_movimiento")
@Data
public class TipoMovimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idtipoMovimiento;

    private String nombre;
    private String descripcion;

    // Getters and Setters
}