// Trabajador.java
package inventario.back.Entity;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "trabajador")
@Data
public class Trabajador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idtrabajador;

    private String nombre;
    private String apellido;
    private double sueldo;
    private String correo;
    private String telefono;

}