package inventario.back.Controller;


import inventario.back.Entity.Movimientos;
import inventario.back.service.MovimientosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movimientos")
public class MovimientosController {
    @Autowired
    private MovimientosService movimientosService;

    @GetMapping
    public List<Movimientos> getAllMovimientos() {
        return movimientosService.getAllMovimientos();
    }

    @GetMapping("/{id}")
    public Movimientos getMovimientosById(@PathVariable int id) {
        return movimientosService.getMovimientosById(id);
    }

    @PostMapping
    public Movimientos createMovimientos(@RequestBody Movimientos movimientos) {
        return movimientosService.saveOrUpdateMovimientos(movimientos);
    }

    @PutMapping("/{id}")
    public Movimientos updateMovimientos(@PathVariable int id, @RequestBody Movimientos movimientos) {
        movimientos.setIdmovimientos(id);
        return movimientosService.saveOrUpdateMovimientos(movimientos);
    }

    @DeleteMapping("/{id}")
    public void deleteMovimientos(@PathVariable int id) {
        movimientosService.deleteMovimientos(id);
    }
}