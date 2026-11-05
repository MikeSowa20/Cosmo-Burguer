package com.example.hamburgueria.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;

    private String nome;
    private String descr;
    private String foto;
    private LocalDate dataCriacao;
    private int totalVendidos;
    private BigDecimal preco;
    private Categoria categoria;
    private boolean estoque;

    protected Produto(){

    }
    public Produto(String nome, String descr, String foto, BigDecimal preco, Categoria categoria){
        this.nome = nome;
        this.descr = descr;
        this.foto = foto;
        this.preco = preco;
        this.categoria = categoria;
    }

    public long getId() {
        return Id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public int getTotalVendidos() {
        return totalVendidos;
    }

    public void setTotalVendidos(int totalVendidos) {
        this.totalVendidos = totalVendidos;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public boolean isEstoque() {
        return estoque;
    }

    public void setEstoque(boolean estoque) {
        this.estoque = estoque;
    }
}
