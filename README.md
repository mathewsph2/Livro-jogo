# 📖 Livro-Jogo Interativo (Gamebook)

Projeto desenvolvido como trabalho final da disciplina **Tecnologia Web Aplicada (TWA)** no curso de **Sistemas para Internet – Faculdades Integradas Vianna Júnior**.  

O objetivo foi aplicar conceitos de **JavaScript, DOM e eventos** para criar um **livro-jogo interativo e não linear**, onde o usuário vivencia uma aventura, faz escolhas que alteram o rumo da história, gerencia um personagem e utiliza um sistema de rolagem de dados.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura da aplicação  
- **CSS3** → Estilização e layout responsivo  
- **JavaScript (ES6+)** → Lógica principal, manipulação de DOM e eventos  
- **JSON** → Armazenamento da história e capítulos  

---

## 🎮 Funcionalidades

### 1. Estrutura da História (JSON)
- História completa armazenada em arquivo externo (`historia.json`).
- Carregada e interpretada dinamicamente pelo JavaScript.

### 2. Interface e Navegação
- Área principal exibe o texto do capítulo atual.
- Botões de opções permitem avançar na história.
- Atualização feita exclusivamente via manipulação de DOM e eventos.

### 3. Ficha do Personagem
- Painel lateral com atributos (ex: Vida, Força, Sorte).
- Inventário atualizado conforme itens coletados na aventura.

### 4. Sistema de Rolagem de Dados
- Botão **"Rolar Dados"** simula jogadas (ex: 1d6, 2d6).
- Usado para testes de sorte ou combate.

### 5. Gerenciamento de Estado
- Estado do jogo (capítulo atual, atributos, inventário) controlado apenas em JavaScript.
- Recarregar a página reinicia a aventura.

### 6. Estrutura do Código
- Uso de **Classes ES6** para organizar lógica (`Jogo`, `Personagem`).
- Separação em **módulos JavaScript** para melhor organização.

---

## 📚 Conteúdo da História

- "A Liga dos Ruivos" (The Red-Headed League) é um famoso conto de Sherlock Holmes onde o Sr. Jabez Wilson, um penhorista, é contratado por uma misteriosa liga que paga bem para que ele copie a Enciclopédia Britânica, mas a liga desaparece subitamente, revelando ser um plano engenhoso para manter Wilson longe de sua loja enquanto criminosos escavam um túnel para roubar um banco adjacente, um crime que Holmes desvenda com sua perspicácia e a ajuda de Watson, capturando os bandidos. 

---

## 📜 Este projeto foi desenvolvido para fins acadêmicos.
