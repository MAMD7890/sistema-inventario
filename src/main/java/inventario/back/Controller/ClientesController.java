package inventario.back.Controller;

import inventario.back.Entity.Clientes;
import inventario.back.service.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClientesController {
    @Autowired
    private ClientesService clientesService;

    @GetMapping
    public List<Clientes> getAllClientes() {
        return clientesService.getAllClientes();
    }

    @GetMapping("/{id}")
    public Clientes getClientesById(@PathVariable int id) {
        return clientesService.getClientesById(id);
    }

    @PostMapping
    public Clientes createClientes(@RequestBody Clientes clientes) {
        return clientesService.saveOrUpdateClientes(clientes);
    }

    @PutMapping("/{id}")
    public Clientes updateClientes(@PathVariable int id, @RequestBody Clientes clientes) {
        clientes.setIdclientes(id);
        return clientesService.saveOrUpdateClientes(clientes);
    }

    @DeleteMapping("/{id}")
    public void deleteClientes(@PathVariable int id) {
        clientesService.deleteClientes(id);
    }
}