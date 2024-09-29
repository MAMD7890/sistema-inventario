package inventario.back.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "rol")
@Data
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idrol;

    private String nombre;
    private String descripcion;

    // Getters and Setters
}