package inventario.back.service;

import inventario.back.Entity.Ubicacion;
import inventario.back.Repository.UbicacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UbicacionService {
    @Autowired
    private UbicacionRepository ubicacionRepository;

    public List<Ubicacion> getAllUbicaciones() {
        return ubicacionRepository.findAll();
    }

    public Ubicacion getUbicacionById(int id) {
        return ubicacionRepository.findById(id).orElse(null);
    }

    public Ubicacion saveOrUpdateUbicacion(Ubicacion ubicacion) {
        return ubicacionRepository.save(ubicacion);
    }

    public void deleteUbicacion(int id) {
        ubicacionRepository.deleteById(id);
    }
}