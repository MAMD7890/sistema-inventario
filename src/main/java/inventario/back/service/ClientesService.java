package inventario.back.service;


import inventario.back.Entity.Clientes;
import inventario.back.Repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientesService {
    @Autowired
    private ClientesRepository clientesRepository;

    public List<Clientes> getAllClientes() {
        return clientesRepository.findAll();
    }

    public Clientes getClientesById(int id) {
        return clientesRepository.findById(id).orElse(null);
    }

    public Clientes saveOrUpdateClientes(Clientes clientes) {
        return clientesRepository.save(clientes);
    }

    public void deleteClientes(int id) {
        clientesRepository.deleteById(id);
    }
}