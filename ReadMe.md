# 🗑️ Lixeira Automatizada com Arduino

> Projeto desenvolvido para a disciplina de **Sistemas Digitais** > **Instituição:** Cesar School 🏫🧡  
> **Curso:** Análise e Desenvolvimento de Sistemas — 1º Período (Noturno)

---

## 📌 Visão Geral

Este projeto apresenta o desenvolvimento de uma **Lixeira Automatizada**, capaz de abrir e fechar a tampa de forma automática utilizando sensores e atuadores controlados por um Arduino.

O objetivo principal é aplicar os conceitos aprendidos na disciplina de Sistemas Digitais, criando uma solução simples, eficiente e de baixo custo que:
* Facilita o descarte de resíduos;
* Melhora a higiene (reduzindo o toque);
* Torna o uso da lixeira mais intuitivo e tecnológico.

---

## 👨‍🏫 Docentes Responsáveis

* **Danilo de Sousa Barbosa**
* **Rafael Batista Duarte**

---

## 🗑️⚙️ Como Funciona

O sistema opera monitorando constantemente a frente da lixeira. A lógica de funcionamento baseia-se em:

1.  **Detecção:** Um sensor ultrassônico mede a distância continuamente.
2.  **Acionamento:** Sempre que um objeto (mão ou lixo) é detectado entre **10 cm e 30 cm**.
3.  **Ação:** O Arduino envia um sinal para o Servo Motor, que abre a tampa.
4.  **Espera:** O sistema aguarda alguns segundos com a tampa aberta.
5.  **Fechamento:** A tampa fecha automaticamente e o ciclo se reinicia.

---

## 🔧 Componentes e Hardware

Para a construção do protótipo físico, foram utilizados:

* Microcontrolador **Arduino Uno**;
* Sensor Ultrassônico **HC-SR04**;
* **Servo Motor** (para movimentação da tampa);
* Protoboard e Jumpers (cabos de conexão);
* Estrutura física da lixeira adaptada;
* Fonte de energia externa ou cabo USB.

---

## 🛠️💻 Tecnologias e Ferramentas

### 🌐 Documentação Web (Site)
<p align="left">
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
  &nbsp;
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
</p>

### 🤖 Protótipo e Lógica
* **Arduino IDE** (Ambiente de desenvolvimento);
* **Linguagem C/C++** (Lógica do firmware);
* **Tinkercad** (Simulação do circuito e testes prévios).

---

## 👥 Membros da Equipe

Projeto desenvolvido pelos discentes:

* **Helamã Procídio** (Líder) 👑
* Eduardo Cavalcanti
* João Pedro Arruda
* Glauberson Ribeiro
* Lucas Paguetti
* Pablo Tamborini
* Rodrigo Morais
* Tiago Luiz

---

## 🗂️ Estrutura de Arquivos do Projeto

Abaixo, a organização dos arquivos da documentação web (site) do projeto:

```text
Site Projeto SD/
│
├── index.html          🌐 (Página Inicial - Visão Geral)
├── equipe.html         🌐 (Apresentação dos integrantes)
├── perguntas.html      🌐 (FAQ - Perguntas Frequentes)
├── prototipo.html      🌐 (Fotos e vídeos do funcionamento)
├── especificacoes.html 🌐 (Detalhes técnicos e componentes)
├── montagem.html       🌐 (Passo a passo e código fonte)
│
├── css/
│   └── styles.css      🎨 (Estilização global)
│
├── js/
│   └── script.js       ⚙️ (Interatividade do menu e animações)
│
└── assets/images/      🖼️ (Logo, fotos da equipe e do protótipo)