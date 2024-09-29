package inventario.back.Entity;


import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;


@Entity
@Table(name = "reportes")
@Data
public class Reportes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idreportes;

    private String nombre;
    private String desccripcion;

    @ManyToOne
    @JoinColumn(name = "idmovimientos")
    private Movimientos movimientos;

    @ManyToOne
    @JoinColumn(name = "idproducto")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "idtipo_movimiento")
    private TipoMovimiento tipoMovimiento;

}