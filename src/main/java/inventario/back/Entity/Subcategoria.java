package inventario.back.Entity;


import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "subcategoria")
@Data
public class Subcategoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idsubcategoria;

    private String nombre;
    private String descripcion;

    // Getters and Setters
}