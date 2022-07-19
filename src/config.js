import LogoPColor from "./assets/logopblack2.png";
import BannerImage from "./assets/banner.png";
import BackgroundGreyCircles from "./assets/grey.png";
import ImageRetencao from "./assets/retencao1.png";
import PhoneImage from "./assets/phone.png";
import Grafico1 from "./assets/grafico1.png";
import { faHeadphones, faPhone, faStarship } from "@fortawesome/pro-light-svg-icons";



export default {
    Header: {
        Logo: LogoPColor,
    },
    Banner: {
        Image: BannerImage,
        
    },
    Row1: {
        Background: BackgroundGreyCircles,
        Title: "É sobre treinar, e treinar bem",
        Text: `Treinar equipes é complicado, caro e toma tempo, você sabe do que estamos falando.\nSe sua marca lança 10 produtos por mês, e as lojas recebem treinamento a cada 6 meses, com certeza algumas de suas lojas ficam com 50 novos produtos por 5 meses constantemente SEM NENHUM TREINAMENTO.\n\nAlém disso, é difícil parar todo o efetivo para fazer os treinamentos, então muitas vezes treinamos somente os gerentes ou pessoas chave, para que passem adiante as informações, tendências, estudos e até mesmo a imagem da empresa. Mas sabemos que muita informação morre na casca, e todas aquelas horas de  desenvolvimento de conceito daquela super camiseta, que envolveu mais de 20 criativos, baseada em um artista famoso em conjunto com detalhes de selecionados glifos astecas vai pro ralo, e aquele produto vira só "uma camiseta verde".\n\nSe sua equipe de vendas não for bem treinada, o consumidor raramente vai escutar da boca do seu vendedor informações importantes que fariam com que aquela venda fosse feita.\n\nTriste pro consumidor, triste pra empresa, triste pro vendedor.\n\nEnfim, triste!\n\nMas vamos lá, criar aulas, material, contratar e deslocar pessoal para treinamento, e aí entra a Curva de Esquecimento em cena:`,
    },
    Row2: {
        Image: ImageRetencao,
        Title: "Cuva de esquecimento",
        Text: `30 dias após um\ntreinamento, retemos somente\n 5% do conteúdo que nos foi apresentado.\nIsso é ruim!`,
    },
    Row3: {
       Title:  "A Sei de Cor te ajuda!",
       Text: `Com mais de 15 anos atendendo mais de 6000 lojas no varejo, e sabendo destas dores foi que surgiu a Sei de Cor.\n\nPra trazer o seu conhecimento e treinamento, em tempo real, direto da fonte para as mãos de sua equipe de vendas. Melhorando seu onboarding, conhecimento de marca, treinamento de produtos e fazendo com que seus colaboradores estejam cada vez mais engajados com o espírito da sua marca.
\n_Uau! Como isso, meu filho?\n\nCom a ajuda de algumas ferramentas e metodologias direto em nosso aplicativo:  `,
    },
    Phone: {
       Background: BackgroundGreyCircles,
        Image: PhoneImage,
        EndColumnText:"Ah, além disso te trazemos indicadores,\npra você saber quem está treinando, \ne quais as maiores dificuldades",
        Column: {
            Left: [
                {
                Title: "Microlearning",
                Text:`Treinar, treinar e treinar!\nUm pouquinho cada dia!\nDesta maneira conseguimos domar aquela curva.`,
                },
                {
            Title: "Leitor de Código de Barras",
            Text: "Coloque os treinamentos de seus produtos nas mãos das equipes, basta escanear o código de barras do produto e um mundo de informações se abre.\n(Ou ainda busque por palavras-chave)",
          },
            ],
            Right: [
                {
                Title: "5 minutos por dia",
                Text: `Fica fácil quando você pode continuar melhorando seu desempenho, aprendendo mais e vendendo mais, com treinamentos especialmente desenhados para durar 5 minutos!`,
                },
                {
                 Title: "Velocidade",
                 Text: "Lançou o produto ontem? Teve novidades? \nTenha toda a sua equipe treinada ao mesmo tempo.",
                  },
            ],
        },
    },
    Row4: {
        Image: Grafico1,
        Title: "Domando a Curva",
        Text: `Quando você está começando a esquecer algum conteúdo, a gente te avisa, e faz você revisar!\n\nIsso vai gerando um constante aumento do conhecimento adquirido!`,
    },
    Clientes: {
        Text: "Conheça alguns de nossos clientes", 
        clientes: [
            {
              nome: "Organnact",
              site: "https://www.organnact.com.br",
              logo: "https://firebasestorage.googleapis.com/v0/b/seidecor-194519.appspot.com/o/-LqqihCw02mTbKKxwdM5%2FlogoMarca%2F382d7c9c-6258-454d-b5ed-c6f6efd1c1b1.png?alt=media&token=61b596cf-8a44-4d64-9270-161a523bc5f4",
            },
            {
              nome: "Moncloa",
              site: "https://www.moncloa.com.br/",
              logo: "https://firebasestorage.googleapis.com/v0/b/seidecor-194519.appspot.com/o/-L_mr5xTcDtQfJi6YgvA%2FlogoMarca%2Fc688e3ae-dceb-4fa6-b9d7-fe0151257a3a.png?alt=media&token=8dccbb04-5b09-41f4-a892-8d7c65427fa1",
            },
            {
              nome: "Bibi Calçados",
              site: "https://www.bibi.com/",
              logo: "https://firebasestorage.googleapis.com/v0/b/seidecor-194519.appspot.com/o/-MTC4NTsuqU7sEkYxbx8%2FlogoMarca%2Fc06659f3-1923-4562-a183-228ea4ee823d.png?alt=media&token=cf254e7e-6fef-40ab-b7f5-8d1b7052f6bb",
            },
            {
              nome: "UpVet",
              site: "https://www.upvet.com.br",
              logo: "https://firebasestorage.googleapis.com/v0/b/seidecor-194519.appspot.com/o/-LsYD0muDq-jdMXg2dox%2FlogoMarca%2F8059a9ab-2345-4276-b8c4-add213668244.png?alt=media&token=2fd4c1a7-3f62-4cde-975b-fec9889f0b29",
            },
            // {
            //   nome: "AFEPAR",
            //   site: "https://www.afepar.com.br/",
            //   logo: "https://firebasestorage.googleapis.com/v0/b/seidecor-194519.appspot.com/o/-M_VoXGwwHUBhT9ZKXzX%2FlogoMarca%2F4d8f2d6c-8850-4068-9b5b-d749ccd60c54.png?alt=media&token=d20ef3f0-4bd2-4658-9c1b-85c0a1bf430d",
            // },
            {
              nome: "Biomist",
              site: "https://www.biomist.com.br/",
              logo: "https://firebasestorage.googleapis.com/v0/b/seidecor-194519.appspot.com/o/-LMr6HgI21DROdtAWPxj%2FlogoMarca%2F15d2c030-f408-439c-aa7c-de16a18c8700.jpg?alt=media&token=ba3758e1-cab5-4516-b3e0-6add1801403c",
            },
            {
              nome: "Casa Graviola",
              site: "https://www.casagraviola.com.br/",
              logo: "https://firebasestorage.googleapis.com/v0/b/seidecor-194519.appspot.com/o/-MJhP621nrUo3ymfHZA5%2FlogoMarca%2Ff606814e-7488-4aa2-99ea-494269b93d7f.png?alt=media&token=8dd4ffb1-2293-49a1-8a88-b4011244c9d1",
            },
          ],  
  },
  Planos: {
    planos: [
      {
        color: "#fff",
        fontColor: "#1d1d1d",
        nome: "STARTER",
        features: [
          "Acesso ao painel administrativo",
          "Acesso ao aplicativo Sei de Cor",
          "Relatórios Pré-Definidos",
          "Suporte: FAQ + Email",
          "Conteudistas: R$150/hora",
        ],
        horaConteudo: 150,
        mensal: 0,
        usuario: 5,
        minimo: 50,
        btnColor: "#FEB018",
        link: "https://api.whatsapp.com/send?phone=551321910948&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20plano%20STARTER",
      },
      {
        color: "#FEB018",
        fontColor: "#fff",
        nome: "PROFESSIONAL",
        features: [
          "Acesso ao painel administrativo",
          "Acesso ao aplicativo Sei de Cor",
          "Relatórios Pré-Definidos",
          "Suporte: FAQ + Chat + Email",
          "Conteudistas: R$120/hora\n4 horas inclusas* / mês",
          "Apoio profissional para embarque de seus conteúdos na plataforma",
        ],
        horaConteudo: 120,
        mensal: 400,
        usuario: 7,
        minimo: 0,
        btnColor: "#FEB018",
        link: "https://api.whatsapp.com/send?phone=551321910948&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20plano%20PROFESSIONAL",
      },
      {
        top: true,
        fontColor: "#fff",
        topColor: "#9F3268",
        color: "#C14481",
        nome: "ENTERPRISE",
        icon: faStarship,
        features: [
          "Acesso ao painel administrativo",
          "Acesso ao aplicativo Sei de Cor",
          "Relatórios Pré-Definidos",
          "Suporte: FAQ + Chat + Email",
          "Conteudistas: R$90/hora\n8 horas inclusas* / mês",
          "Apoio profissional para embarque de seus conteúdos na plataforma",
        ],
        horaConteudo: 90,
        mensal: 600,
        usuario: 9,
        minimo: 0,
        btnColor: "#2E9FAA",
        link: "https://api.whatsapp.com/send?phone=551321910948&text=Ol%C3%A1!%20Gostaria%20de%20contratar%20o%20plano%20ENTERPRISE",
      },
      ]
  },
  MaisInformacoes: {
    title: "Quer saber mais?",
    btnLabel: "Quero que um consultor entre em contato!",
    icon: faPhone,
  },
  Footer: {
    title: "Contato",
    Rua: "Rua Lysimaco Ferreira da Costa, 47",
    Endereco: "Curitiba - Paraná - Brasil",
    EmailSup: "suporte@seidecor.com.br",
    EmailCon: "contato@seidecor.com.br",
    phone: "(13) 2191-0948 - whats: (13) 2191-0948",
  },
    
}
/**/