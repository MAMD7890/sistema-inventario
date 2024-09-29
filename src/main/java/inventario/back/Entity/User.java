package inventario.back.Entity;


import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;

@Entity
@Table(name = "user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iduser;

    @ManyToOne
    @JoinColumn(name = "trabajador_idtrabajador")
    private Trabajador trabajador;

    @ManyToOne
    @JoinColumn(name = "rol_idrol")
    private Rol rol;

    private String username;
    private String password;


}