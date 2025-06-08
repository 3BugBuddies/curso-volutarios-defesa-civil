// Module and Lesson Data
const courseData = {
  modules: [
    {
      id: 1,
      title: "Introdução à Preparação para Desastres",
      description: "Aprenda os fundamentos da preparação para desastres e o papel dos voluntários em situações de emergência.",
      image: "img/defesa_civil_jpg.jpg", // Mantenha o nome do arquivo da imagem como está
      lessons: [
        {
          id: 1,
          title: "Entendendo os Tipos de Desastres",
          videoId: "YQeAhRxjq6U", // Mantenha o ID do vídeo do YouTube
          content: `
            <h3>Tipos de Desastres</h3>
            <p>Os desastres podem ser amplamente categorizados em eventos naturais e causados pelo homem. Os desastres naturais incluem terremotos, inundações, furacões, tornados, incêndios florestais e eventos climáticos extremos. Os desastres causados pelo homem incluem acidentes industriais, colapsos de estruturas e grandes incidentes de transporte.</p>
            
            <h3>O Impacto dos Desastres</h3>
            <p>Os desastres podem ter impactos profundos nas comunidades, incluindo:</p>
            <ul>
              <li>Perda de vidas e ferimentos</li>
              <li>Destruição de propriedades e infraestrutura</li>
              <li>Deslocamento de populações</li>
              <li>Interrupção econômica</li>
              <li>Trauma psicológico</li>
            </ul>
            
            <div class="tip">
              <p><strong>Importante:</strong> Compreender os diferentes tipos de desastres e seus potenciais impactos é crucial para um planejamento eficaz de resposta a desastres.</p>
            </div>
            
            <h3>O Papel dos Voluntários</h3>
            <p>Os voluntários desempenham um papel vital nos esforços de resposta a desastres. Eles podem complementar o trabalho dos socorristas profissionais, fornecer habilidades especializadas e oferecer recursos adicionais em momentos de necessidade. Voluntários eficazes compreendem seu papel dentro do sistema de gerenciamento de emergências e trabalham dentro das estruturas estabelecidas.</p>
          `
        },
        {
          id: 2,
          title: "Estrutura de Resposta a Desastres",
          videoId: "IuusupEzNUA", // Mantenha o ID do vídeo do YouTube
          content: `
            <h3>O Ciclo de Gerenciamento de Emergências</h3>
            <p>O gerenciamento eficaz de desastres segue um ciclo contínuo com quatro fases principais:</p>
            <ol>
              <li><strong>Mitigação:</strong> Ações tomadas para prevenir desastres ou reduzir sua gravidade</li>
              <li><strong>Preparação:</strong> Planejamento e treinamento para responder eficazmente quando os desastres ocorrem</li>
              <li><strong>Resposta:</strong> Ações imediatas durante e após um desastre para salvar vidas e prevenir danos adicionais</li>
              <li><strong>Recuperação:</strong> Esforços de longo prazo para restaurar as áreas afetadas ao funcionamento normal</li>
            </ol>
            
            <h3>Sistema de Comando de Incidentes (SCI)</h3>
            <p>O Sistema de Comando de Incidentes é uma abordagem padronizada para o gerenciamento de emergências. Ele fornece uma estrutura hierárquica que permite que várias agências trabalhem juntas de forma eficaz durante emergências. As principais características incluem:</p>
            <ul>
              <li>Cadeia de comando clara</li>
              <li>Terminologia comum</li>
              <li>Comunicações integradas</li>
              <li>Estrutura de comando unificada</li>
              <li>Planos de ação consolidados</li>
            </ul>
            
            <div class="warning">
              <p><strong>Atenção:</strong> Sempre trabalhe dentro da estrutura de comando estabelecida. A auto-mobilização sem a devida autorização pode criar problemas adicionais em vez de soluções.</p>
            </div>
          `
        }
      ],
      quiz: [
        {
          question: "Qual das seguintes NÃO é uma fase do Ciclo de Gerenciamento de Emergências?",
          options: [
            "Mitigação",
            "Preparação", 
            "Intervenção", 
            "Recuperação"
          ],
          correctAnswer: 2
        },
        {
          question: "O que significa SCI no gerenciamento de desastres?",
          options: [
            "Sistema de Coordenação Internacional", 
            "Sistema de Comando de Incidentes", 
            "Estratégia de Comunicação Integrada", 
            "Padrões de Controle Interno"
          ],
          correctAnswer: 1
        },
        {
          question: "Quanta água deve ser incluída em um kit de emergência básico por pessoa por dia?",
          options: [
            "Um litro", 
            "Meio galão", 
            "Um galão", 
            "Dois galões"
          ],
          correctAnswer: 2
        },
        {
          question: "Qual das seguintes é uma característica chave do Sistema de Comando de Incidentes?",
          options: [
            "Autoridade descentralizada", 
            "Terminologia complexa e especializada", 
            "Cadeia de comando clara", 
            "Operações de agências independentes"
          ],
          correctAnswer: 2
        },
        {
          question: "O que os voluntários devem garantir antes de ajudar outras pessoas em um desastre?",
          options: [
            "Que tenham cobertura da mídia", 
            "Que estejam pessoalmente preparados", 
            "Que tenham equipamentos especializados", 
            "Que ocupem posições de liderança"
          ],
          correctAnswer: 1
        }
      ]
    },
    {
      id: 2,
      title: "Primeiros Socorros em Emergências",
      description: "Aprenda habilidades essenciais de primeiros socorros que podem salvar vidas durante situações de desastre.",
      image: "img/defesa_civil_png.png", // Mantenha o nome do arquivo da imagem como está
      lessons: [
        {
          id: 1,
          title: "Noções Básicas de Primeiros Socorros",
          videoId: "Zy8nFO-rz2M", // Mantenha a URL do vídeo
          content: `
            <h3>Princípios de Primeiros Socorros</h3>
            <p>Primeiros socorros é a assistência imediata prestada a alguém que sofreu uma lesão ou doença até a chegada de ajuda profissional. Os objetivos primários dos primeiros socorros são:</p>
            <ul>
              <li>Preservar a vida</li>
              <li>Prevenir o agravamento da condição</li>
              <li>Promover a recuperação</li>
            </ul>
            
            <h3>Os Três P's dos Primeiros Socorros</h3>
            <p>Ao abordar qualquer situação de emergência, lembre-se dos Três P's:</p>
            <ol>
              <li><strong>Preservar a vida:</strong> Abordar primeiro as condições que ameaçam a vida imediatamente</li>
              <li><strong>Prevenir a deterioração:</strong> Tomar medidas para evitar que a condição piore</li>
              <li><strong>Promover a recuperação:</strong> Ajudar a pessoa a se recuperar por meio de técnicas apropriadas de primeiros socorros</li>
            </ol>
            
            <h3>Considerações de Segurança</h3>
            <p>Antes de prestar primeiros socorros, sempre garanta sua própria segurança:</p>
            <ul>
              <li>Avalie a cena quanto a perigos potenciais</li>
              <li>Use equipamento de proteção individual apropriado (luvas, máscara, etc.)</li>
              <li>Ligue para os serviços de emergência o mais rápido possível</li>
              <li>Mova uma vítima apenas se ela estiver em perigo iminente</li>
            </ul>
            
            <div class="warning">
              <p><strong>Atenção:</strong> Nunca se coloque em risco ao prestar primeiros socorros. Se a cena não for segura, espere a chegada de pessoal de emergência treinado.</p>
            </div>
          `
        },
        {
          id: 2,
          title: "RCP e Manejo de Engasgos",
          videoId: "nCNJOOyMbVM", // Mantenha a URL do vídeo
          content: `
            <h3>Noções Básicas de RCP em Adultos</h3>
            <p>Se você encontrar um adulto inconsciente que não está respirando normalmente:</p>
            <ol>
              <li>Certifique-se de que a cena é segura</li>
              <li>Verifique a capacidade de resposta tocando no ombro da pessoa e chamando-a</li>
              <li>Se não houver resposta, ligue para os serviços de emergência (ou peça a alguém para ligar)</li>
              <li>Verifique a respiração normal (olhe, ouça, sinta por não mais de 10 segundos)</li>
              <li>Se não houver respiração normal, inicie a RCP:</li>
              <ul>
                <li>Coloque a pessoa de costas em uma superfície firme</li>
                <li>Posicione-se ajoelhado ao lado do tórax</li>
                <li>Coloque a palma de uma mão no centro do tórax (entre os mamilos)</li>
                <li>Coloque a outra mão sobre a primeira mão</li>
                <li>Mantenha os braços retos e posicione os ombros diretamente acima das mãos</li>
                <li>Empurre forte e rápido: comprima o tórax a pelo menos 5 centímetros de profundidade a uma taxa de 100-120 compressões por minuto</li>
                <li>Permita que o tórax retorne completamente entre as compressões</li>
                <li>Minimize as interrupções nas compressões torácicas</li>
              </ul>
            </ol>
            
            <h3>Manejo de Engasgos</h3>
            <p>Para um adulto consciente engasgando:</p>
            <ol>
              <li>Confirme que a pessoa está engasgando perguntando "Você está engasgando? Consegue falar?"</li>
              <li>Se não conseguir falar, tossir ou respirar, posicione-se atrás dela</li>
              <li>Coloque um pé ligeiramente à frente do outro para equilíbrio</li>
              <li>Envolva os braços em volta da cintura dela</li>
              <li>Feche um punho com uma mão e coloque o lado do polegar contra o meio do abdome, logo acima do umbigo</li>
              <li>Segure o punho com a outra mão</li>
              <li>Pressione o abdome com compressões rápidas e para cima</li>
              <li>Continue até que o objeto seja expelido ou a pessoa fique inconsciente</li>
            </ol>
            
            <div class="tip">
              <p><strong>Observação:</strong> Estas são apenas diretrizes básicas. O treinamento adequado por meio de um curso certificado é essencial para realizar essas habilidades corretamente.</p>
            </div>
          `
        },
        {
          id: 3,
          title: "Tratamento de Lesões e Feridas",
          videoId: "Zy8nFO-rz2M", // Mantenha a URL do vídeo
          content: `
            <h3>Controle de Hemorragias</h3>
            <p>Sangramento grave pode ser fatal se não for controlado rapidamente:</p>
            <ol>
              <li>Aplique pressão direta na ferida usando um pano limpo, gaze ou atadura</li>
              <li>Se o sangue encharcar, adicione mais material sem remover o curativo original</li>
              <li>Se possível, eleve a área lesionada acima do nível do coração</li>
              <li>Uma vez que o sangramento esteja controlado, fixe o curativo com uma atadura</li>
              <li>Para sangramentos graves e incontroláveis nos membros, um torniquete pode ser necessário como último recurso</li>
            </ol>
            
            <h3>Manejo de Fraturas e Entorses</h3>
            <p>Se você suspeitar de um osso quebrado ou entorse:</p>
            <ul>
              <li>Ajude a pessoa a permanecer imóvel e calma</li>
              <li>Imobilize a área lesionada na posição em que foi encontrada</li>
              <li>Aplique compressas frias enroladas em um pano para reduzir o inchaço (20 minutos com, 20 minutos sem)</li>
              <li>Para fraturas expostas (onde o osso se projeta através da pele), cubra a ferida com um curativo limpo, mas não tente empurrar o osso de volta</li>
              <li>Procure atendimento médico</li>
            </ul>
            
            <h3>Tratamento de Queimaduras</h3>
            <p>Para queimaduras térmicas:</p>
            <ol>
              <li>Interrompa o processo de queima: remova a pessoa da fonte de calor</li>
              <li>Remova joias, cintos e itens restritivos</li>
              <li>Resfrie a queimadura com água corrente fria (não gelada) por 10-15 minutos</li>
              <li>Cubra a queimadura com uma atadura ou pano limpo e seco</li>
              <li>Não aplique manteiga, óleo ou pomadas em queimaduras graves</li>
              <li>Procure atendimento médico para todas as queimaduras, exceto as leves</li>
            </ol>
            
            <div class="warning">
              <p><strong>Atenção:</strong> Não remova roupas que estejam grudadas na pele queimada. Procure atendimento médico imediato para queimaduras graves, queimaduras no rosto, mãos, pés, genitais ou grandes articulações, e qualquer queimadura com carbonização ou coloração branca/marrom.</p>
            </div>
          `
        }
      ],
      quiz: [
        {
          question: "Quais são os objetivos primários dos primeiros socorros?",
          options: [
            "Preservar a vida, prevenir a deterioração, promover a recuperação", 
            "Diagnosticar a condição, tratar a doença, prevenir a infecção", 
            "Contatar serviços de emergência, estabilizar o paciente, documentar lesões", 
            "Avaliar a situação, aplicar ataduras, administrar medicação"
          ],
          correctAnswer: 0
        },
        {
          question: "A que taxa as compressões torácicas devem ser realizadas durante a RCP?",
          options: [
            "60-80 compressões por minuto", 
            "80-100 compressões por minuto", 
            "100-120 compressões por minuto", 
            "120-140 compressões por minuto"
          ],
          correctAnswer: 2
        },
        {
          question: "Ao tratar um sangramento grave, o que você deve fazer se o sangue encharcar o primeiro curativo?",
          options: [
            "Remover o curativo encharcado e substituí-lo por um limpo", 
            "Adicionar mais material sem remover o curativo original", 
            "Elevar a ferida e remover o curativo", 
            "Aplicar um torniquete imediatamente"
          ],
          correctAnswer: 1
        },
        {
          question: "Como você deve resfriar uma queimadura térmica?",
          options: [
            "Com gelo ou água muito fria", 
            "Com água corrente fria por 10-15 minutos", 
            "Com manteiga ou óleo para prevenir cicatrizes", 
            "Com álcool ou peróxido de hidrogênio"
          ],
          correctAnswer: 1
        },
        {
          question: "Qual é o primeiro passo dos 'Três P's' dos primeiros socorros?",
          options: [
            "Preservar a vida", 
            "Prevenir a deterioração", 
            "Promover a recuperação", 
            "Proporcionar conforto"
          ],
          correctAnswer: 0
        }
      ]
    }
  ]
};