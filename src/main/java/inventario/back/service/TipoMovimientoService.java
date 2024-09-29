package inventario.back.service;


import inventario.back.Entity.TipoMovimiento;
import inventario.back.Repository.TipoMovimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipoMovimientoService {
    @Autowired
    private TipoMovimientoRepository tipoMovimientoRepository;

    public List<TipoMovimiento> getAllTipoMovimientos() {
        return tipoMovimientoRepository.findAll();
    }

    public TipoMovimiento getTipoMovimientoById(int id) {
        return tipoMovimientoRepository.findById(id).orElse(null);
    }

    public TipoMovimiento saveOrUpdateTipoMovimiento(TipoMovimiento tipoMovimiento) {
        return tipoMovimientoRepository.save(tipoMovimiento);
    }

    public void deleteTipoMovimiento(int id) {
        tipoMovimientoRepository.deleteById(id);
    }
}