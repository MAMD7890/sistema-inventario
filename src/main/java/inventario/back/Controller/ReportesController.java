package inventario.back.Controller;


import inventario.back.Entity.Reportes;
import inventario.back.service.ReportesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reportes")
public class ReportesController {
    @Autowired
    private ReportesService reportesService;

    @GetMapping
    public List<Reportes> getAllReportes() {
        return reportesService.getAllReportes();
    }

    @GetMapping("/{id}")
    public Reportes getReportesById(@PathVariable int id) {
        return reportesService.getReportesById(id);
    }

    @PostMapping
    public Reportes createReportes(@RequestBody Reportes reportes) {
        return reportesService.saveOrUpdateReportes(reportes);
    }

    @PutMapping("/{id}")
    public Reportes updateReportes(@PathVariable int id, @RequestBody Reportes reportes) {
        reportes.setIdreportes(id);
        return reportesService.saveOrUpdateReportes(reportes);
    }

    @DeleteMapping("/{id}")
    public void deleteReportes(@PathVariable int id) {
        reportesService.deleteReportes(id);
    }
}