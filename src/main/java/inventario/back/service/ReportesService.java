package inventario.back.service;

import inventario.back.Entity.Reportes;
import inventario.back.Repository.ReportesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportesService {
    @Autowired
    private ReportesRepository reportesRepository;

    public List<Reportes> getAllReportes() {
        return reportesRepository.findAll();
    }

    public Reportes getReportesById(int id) {
        return reportesRepository.findById(id).orElse(null);
    }

    public Reportes saveOrUpdateReportes(Reportes reportes) {
        return reportesRepository.save(reportes);
    }

    public void deleteReportes(int id) {
        reportesRepository.deleteById(id);
    }
}