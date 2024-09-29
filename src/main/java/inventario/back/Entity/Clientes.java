package inventario.back.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "clientes")
@Data
public class Clientes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idclientes;

    private String nombre;
    private String apellido;
    private String correo;
    private int telefono;
    private String direccion;

}