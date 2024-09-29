package inventario.back.Controller;

import inventario.back.Entity.Ubicacion;
import inventario.back.service.UbicacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ubicaciones")
public class UbicacionController {
    @Autowired
    private UbicacionService ubicacionService;

    @GetMapping
    public List<Ubicacion> getAllUbicaciones() {
        return ubicacionService.getAllUbicaciones();
    }

    @GetMapping("/{id}")
    public Ubicacion getUbicacionById(@PathVariable int id) {
        return ubicacionService.getUbicacionById(id);
    }

    @PostMapping
    public Ubicacion createUbicacion(@RequestBody Ubicacion ubicacion) {
        return ubicacionService.saveOrUpdateUbicacion(ubicacion);
    }

    @PutMapping("/{id}")
    public Ubicacion updateUbicacion(@PathVariable int id, @RequestBody Ubicacion ubicacion) {
        ubicacion.setIdubicacion(id);
        return ubicacionService.saveOrUpdateUbicacion(ubicacion);
    }

    @DeleteMapping("/{id}")
    public void deleteUbicacion(@PathVariable int id) {
        ubicacionService.deleteUbicacion(id);
    }
}