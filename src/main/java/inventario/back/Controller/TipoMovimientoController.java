package inventario.back.Controller;


import inventario.back.Entity.TipoMovimiento;
import inventario.back.service.TipoMovimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tipo-movimientos")
public class TipoMovimientoController {
    @Autowired
    private TipoMovimientoService tipoMovimientoService;

    @GetMapping
    public List<TipoMovimiento> getAllTipoMovimientos() {
        return tipoMovimientoService.getAllTipoMovimientos();
    }

    @GetMapping("/{id}")
    public TipoMovimiento getTipoMovimientoById(@PathVariable int id) {
        return tipoMovimientoService.getTipoMovimientoById(id);
    }

    @PostMapping
    public TipoMovimiento createTipoMovimiento(@RequestBody TipoMovimiento tipoMovimiento) {
        return tipoMovimientoService.saveOrUpdateTipoMovimiento(tipoMovimiento);
    }

    @PutMapping("/{id}")
    public TipoMovimiento updateTipoMovimiento(@PathVariable int id, @RequestBody TipoMovimiento tipoMovimiento) {
        tipoMovimiento.setIdtipoMovimiento(id);
        return tipoMovimientoService.saveOrUpdateTipoMovimiento(tipoMovimiento);
    }

    @DeleteMapping("/{id}")
    public void deleteTipoMovimiento(@PathVariable int id) {
        tipoMovimientoService.deleteTipoMovimiento(id);
    }
}