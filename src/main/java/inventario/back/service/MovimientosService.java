package inventario.back.service;


import inventario.back.Entity.Movimientos;
import inventario.back.Repository.MovimientosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovimientosService {
    @Autowired
    private MovimientosRepository movimientosRepository;

    public List<Movimientos> getAllMovimientos() {
        return movimientosRepository.findAll();
    }

    public Movimientos getMovimientosById(int id) {
        return movimientosRepository.findById(id).orElse(null);
    }

    public Movimientos saveOrUpdateMovimientos(Movimientos movimientos) {
        return movimientosRepository.save(movimientos);
    }

    public void deleteMovimientos(int id) {
        movimientosRepository.deleteById(id);
    }
}