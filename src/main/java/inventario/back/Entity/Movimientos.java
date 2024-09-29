package inventario.back.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "movimientos")
public class Movimientos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idmovimientos;

    private Date fecha;
    private double precio;
    private double cantidad;
    private double total;

    @ManyToOne
    @JoinColumn(name = "idproducto")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "iduser")
    private User user;

    @ManyToOne
    @JoinColumn(name = "idubicacion")
    private Ubicacion ubicacion;

    @ManyToOne
    @JoinColumn(name = "idcategoria")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "idsubcategoria")
    private Subcategoria subcategoria;

    @ManyToOne
    @JoinColumn(name = "idtipo_movimiento")
    private TipoMovimiento tipoMovimiento;

    @ManyToOne
    @JoinColumn(name = "idclientes")
    private Clientes clientes;

}