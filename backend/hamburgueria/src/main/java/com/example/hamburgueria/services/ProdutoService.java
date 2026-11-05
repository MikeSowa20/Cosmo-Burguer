package com.example.hamburgueria.services;

import com.example.hamburgueria.model.EditarProdutoDTO;
import com.example.hamburgueria.model.Produto;
import com.example.hamburgueria.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
    private final ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public void cadastrarProduto(Produto produto){
        if(produtoRepository.existsByNome(produto.getNome())){
            throw new RuntimeException("Esse produto já está cadastrado");
        } else {
            produtoRepository.save(produto);
        }
    }

    public void editarProduto(Long id, EditarProdutoDTO dados){
        //Receber o que deseja editar (nome, descrição, preço, disponibilidade, etc...)
        Produto produto = produtoRepository.findById(id).orElseThrow(()-> new RuntimeException("Produto não encontrado"));

        if (dados.getNome() != null){
            produto.setNome(dados.getNome());
        }
        if (dados.getDescr()!=null){
            produto.setDescr(dados.getDescr());
        }
        if (dados.getPreco()!=null){
            produto.setPreco(dados.getPreco());
        }
        if (dados.isEstoque()!= produto.isEstoque()){
            produto.setEstoque(dados.isEstoque());
        }

        produtoRepository.save(produto);
    }

    public void removerProduto(Long id){
        Produto produto = produtoRepository.findById(id).orElseThrow(()-> new RuntimeException("Produto não encontrado."));

        produtoRepository.delete(produto);
    }


}
