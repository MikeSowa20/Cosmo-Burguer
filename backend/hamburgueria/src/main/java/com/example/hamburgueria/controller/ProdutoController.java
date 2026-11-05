package com.example.hamburgueria.controller;
import com.example.hamburgueria.model.EditarProdutoDTO;
import com.example.hamburgueria.model.Produto;
import com.example.hamburgueria.services.ProdutoService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cardapio")
public class ProdutoController {
    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping("/criar")
    public void criarProduto(@RequestBody Produto produto){
        produtoService.cadastrarProduto(produto);
    }

    @PatchMapping("/{id}")
    public void editarProduto(@PathVariable Long id, @RequestBody EditarProdutoDTO dados){
        produtoService.editarProduto(id, dados);
    }

    @PatchMapping("/{id}")
    public void removerProduto(@PathVariable Long id){
        produtoService.removerProduto(id);
    }
}
