package inventario.back.Controller;


import inventario.back.Entity.Rol;
import inventario.back.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RolController {
    @Autowired
    private RolService rolService;

    @GetMapping
    public List<Rol> getAllRoles() {
        return rolService.getAllRoles();
    }

    @GetMapping("/{id}")
    public Rol getRolById(@PathVariable int id) {
        return rolService.getRolById(id);
    }

    @PostMapping
    public Rol createRol(@RequestBody Rol rol) {
        return rolService.saveOrUpdateRol(rol);
    }

    @PutMapping("/{id}")
    public Rol updateRol(@PathVariable int id, @RequestBody Rol rol) {
        rol.setIdrol(id);
        return rolService.saveOrUpdateRol(rol);
    }

    @DeleteMapping("/{id}")
    public void deleteRol(@PathVariable int id) {
        rolService.deleteRol(id);
    }
}
