package inventario.back.Controller;


import inventario.back.Entity.Trabajador;
import inventario.back.service.TrabajadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trabajadores")
public class TrabajadorController {
    @Autowired
    private TrabajadorService trabajadorService;

    @GetMapping
    public List<Trabajador> getAllTrabajadores() {
        return trabajadorService.getAllTrabajadores();
    }

    @GetMapping("/{id}")
    public Trabajador getTrabajadorById(@PathVariable int id) {
        return trabajadorService.getTrabajadorById(id);
    }

    @PostMapping
    public Trabajador createTrabajador(@RequestBody Trabajador trabajador) {
        return trabajadorService.saveOrUpdateTrabajador(trabajador);
    }

    @PutMapping("/{id}")
    public Trabajador updateTrabajador(@PathVariable int id, @RequestBody Trabajador trabajador) {
        trabajador.setIdtrabajador(id);
        return trabajadorService.saveOrUpdateTrabajador(trabajador);
    }

    @DeleteMapping("/{id}")
    public void deleteTrabajador(@PathVariable int id) {
        trabajadorService.deleteTrabajador(id);
    }
}