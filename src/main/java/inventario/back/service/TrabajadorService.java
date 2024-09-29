// TrabajadorService.java
package inventario.back.service;

import inventario.back.Entity.Trabajador;
import inventario.back.Repository.TrabajadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrabajadorService {
    @Autowired
    private TrabajadorRepository trabajadorRepository;

    public List<Trabajador> getAllTrabajadores() {
        return trabajadorRepository.findAll();
    }

    public Trabajador getTrabajadorById(int id) {
        return trabajadorRepository.findById(id).orElse(null);
    }

    public Trabajador saveOrUpdateTrabajador(Trabajador trabajador) {
        return trabajadorRepository.save(trabajador);
    }

    public void deleteTrabajador(int id) {
        trabajadorRepository.deleteById(id);
    }
}