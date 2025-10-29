function Home() {

    return (
        <div>
            <h1>Essa é a página da Preta! Oi Preta!!!!</h1>

            {/* O caminho: Sair de 'pages', entrar em 'images', pegar 'preta.png' */}
            <img src="/images/pretos.jpg"
                alt="Preta!"
                width="800"  // Define a largura para 300 pixels
                height="1000" // Define a altura para 200 pixels
            />

        </div>
    );
}
export default Home;