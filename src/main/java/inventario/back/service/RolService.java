package inventario.back.service;

import inventario.back.Entity.Rol;
import inventario.back.Repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolService {
    @Autowired
    private RolRepository rolRepository;

    public List<Rol> getAllRoles() {
        return rolRepository.findAll();
    }

    public Rol getRolById(int id) {
        return rolRepository.findById(id).orElse(null);
    }

    public Rol saveOrUpdateRol(Rol rol) {
        return rolRepository.save(rol);
    }

    public void deleteRol(int id) {
        rolRepository.deleteById(id);
    }
}