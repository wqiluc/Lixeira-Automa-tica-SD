# 🗑️🤖 Lixeira Automatizada com Arduino

> Projeto desenvolvido para a disciplina de **Sistemas Digitais** - **Instituição:** Cesar School 🏫🧡🎓
> **Curso:** Análise e Desenvolvimento de Sistemas — 1º Período (Noturno)

---

## 📌 Visão Geral

Este projeto apresenta o desenvolvimento de uma **Lixeira Automatizada**, capaz de abrir e fechar a tampa de forma automática utilizando sensores e atuadores controlados por um Arduino.

O objetivo principal é aplicar os conceitos aprendidos na disciplina de Sistemas Digitais, criando uma solução simples, eficiente e de baixo custo que:
* Facilita o descarte de resíduos;
* Melhora a higiene (reduzindo o toque);
* Torna o uso da lixeira mais intuitivo e tecnológico.

---

# 👨‍🏫 Docentes Responsáveis

* **Danilo de Sousa Barbosa**
  <a href="https://www.linkedin.com/in/danilobarbosati" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
         width="16"
         style="filter: grayscale(100%); vertical-align: middle; margin-left: 6px;" />
  </a>

* **Rafael Batista Duarte**
  <a href="https://www.linkedin.com/in/rafaelbatistaduarte" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
         width="16"
         style="filter: grayscale(100%); vertical-align: middle; margin-left: 6px;" />
  </a>


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

<p align="center">
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"/>
  &nbsp;
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"/>
  &nbsp;
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>

<br>
<br>

 <img src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=black"/> 

<br>
<br>
 
<img src="https://img.shields.io/badge/-GitHub-000000?style=flat-square&logo=github&logoColor=white"/> 
</p>

### 🤖 Protótipo e Lógica
<ul>
  <li>
    <strong>Arduino IDE</strong> (Ambiente de desenvolvimento)
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" width="16"/>
  </li>
  <li>
    <strong>Linguagem C e C++</strong> (Lógica do firmware)
    <img src="https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white" height="14" />
    <img src="https://img.shields.io/badge/C++-5E2CA5?style=flat&logo=c%2B%2B&logoColor=white" height="14"/>
  </li>
  <li>
    <strong>Tinkercad</strong> (Simulação do circuito e testes prévios)
    <img src="https://img.shields.io/badge/Tinkercad-FF6F00?style=flat&logo=autodesk&logoColor=white" height="14"/>
  </li>
</ul>

---

## 👥 Membros da Equipe

Projeto desenvolvido pelos discentes:

<ul>
  <li>
    <strong>Helamã Procídio</strong> (Líder) 👑
    <a href="https://www.linkedin.com/in/helam%C3%A3-procidio-428772367" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>
  <li>
    Eduardo Cavalcanti
    <a href="https://www.linkedin.com/in/eduardoscavalcantij" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>
  <li>
    João Pedro Arruda
    <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-arruda-guimar%C3%A3es-157952287" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>
  <li>
    Glauberson Ribeiro
    <a href="https://www.linkedin.com/in/glauberson-ribeiro-682037392" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>

  <li>
    Lucas Paguetti
    <a href="https://www.linkedin.com/in/lucas-paguetti-pereira" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>
  <li>
    Pablo Tamborini
    <a href="https://www.linkedin.com/in/pablo-tamborini-nogueira" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>
  <li>
    Rodrigo Morais
    <a href="https://www.linkedin.com/in/rodrigo-montenegro-85aa12380" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>
  <li>
    Tiago Luiz
    <a href="https://www.linkedin.com/in/tiagoluiz23" target="_blank">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="14"/>
    </a>
  </li>
</ul>

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
