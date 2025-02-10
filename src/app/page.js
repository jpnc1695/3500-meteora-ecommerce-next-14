import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi(){
  const res = await fetch("https://api.npoint.io/84ceed7c08df214958b7/produtos");

  if(!res.ok){
    throw new Error("Não foi possivel obter os dados")
  }

  const produtos = res.json()

  return produtos
}

async function fetchCategoriasApi(){
  const res = await fetch("https://api.npoint.io/5931d78e55c939c16cf0/categorias");

  if(!res.ok){
    throw new Error("Não foi possivel obter os dados")
  }

  const produtos = res.json()

  return produtos
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
