package inventario.back.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "ubicacion")
@Data
public class Ubicacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idubicacion;

    private String nombre;
    private String descripcion;
    private String direccion;
    private String sede;

}