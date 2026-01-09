export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  audience: string[];
  includes: string[];
  testimonials: string[];
  checkoutUrl: string;
  highlight?: boolean;
  color: string; 
}

export const courses: Course[] = [
  {
    id: 'historia-da-arte',
    title: 'Curso História da Arte',
    shortTitle: 'História da Arte',
    description:
      'TODO: Descrição',
    audience: [
      'TODO : Público-alvo',
    ],
    includes: [
      'TODO : O que está incluído'
    ],
    testimonials: [
      'TODO : Aqui vai ser um array de depoimentos sobre o curso de história da arte que estão disponiveis no superprof.',
    ],
    checkoutUrl: 'https://pay.kiwify.com.br/tbdyrNn',
    highlight: true,
    color: 'var(--primary-color)',
  },

  {
    id: 'guia-de-estudos',
    title: 'Guia de Estudos',
    shortTitle: 'Guia',
    description:
      'Um guia prático para organizar seus estudos em arte, criando rotinas possíveis e métodos que respeitam seu ritmo.',
    audience: [
      'Pessoas que se sentem perdidas nos estudos',
      'Quem quer estudar arte com constância'
    ],
    includes: [
      'PDF interativo',
      'Exercícios práticos',
      'Templates de organização'
    ],
    testimonials: [
      'Finalmente consegui organizar meus estudos.',
      'Leve, direto e muito acolhedor.'
    ],
    checkoutUrl: 'https://kiwify.com.br/SEU-LINK-AQUI',
    color: 'var(--secondary-color)',
  },

  {
    id: 'intensivo',
    title: 'Intensivo',
    shortTitle: 'Intensivo',
    description:
      'Um mergulho concentrado em temas específicos da história da arte, com encontros ao vivo e exercícios direcionados.',
    audience: [
      'Quem precisa de foco rápido',
      'Estudantes em preparação para provas'
    ],
    includes: [
      'Aulas ao vivo',
      'Gravações',
      'Exercícios comentados'
    ],
    testimonials: [
      'Aprendi em semanas o que levaria meses.',
      'Muito objetivo e profundo.'
    ],
    checkoutUrl: 'https://kiwify.com.br/SEU-LINK-AQUI',
    color: 'var(--accent-color)',
  },

  {
    id: 'consultoria-de-estudos',
    title: 'Consultoria de Estudos',
    shortTitle: 'Consultoria Estudos',
    description:
      'Acompanhamento individual para estruturar um plano de estudos personalizado em história da arte.',
    audience: [
      'Estudantes com dificuldades',
      'Quem quer orientação personalizada'
    ],
    includes: [
      'Encontro individual',
      'Plano de estudos personalizado',
      'Indicações de materiais'
    ],
    testimonials: [
      'Me senti realmente acompanhada.',
      'Plano de estudos feito sob medida.'
    ],
    checkoutUrl: 'https://kiwify.com.br/SEU-LINK-AQUI',
    color: 'var(--primary-color)',
  },

  {
    id: 'consultoria-de-exercicios',
    title: 'Consultoria de Exercícios',
    shortTitle: 'Consultoria Exercícios',
    description:
      'Correção e orientação individual de exercícios e práticas em história da arte.',
    audience: [
      'Quem precisa de feedback',
      'Estudantes em prática constante'
    ],
    includes: [
      'Correção comentada',
      'Orientação individual'
    ],
    testimonials: [
      'Os feedbacks fizeram toda a diferença.',
      'Muito atenciosa e clara.'
    ],
    checkoutUrl: 'https://kiwify.com.br/SEU-LINK-AQUI',
    color: 'var(--secondary-color)',
  },

  {
    id: 'aulas-particulares',
    title: 'Aulas Particulares',
    shortTitle: 'Aulas',
    description:
      'Aulas individuais ou em pequenos grupos, adaptadas às suas necessidades e interesses.',
    audience: [
      'Quem prefere acompanhamento próximo',
      'Estudantes com objetivos específicos'
    ],
    includes: [
      'Aulas personalizadas',
      'Material complementar'
    ],
    testimonials: [
      'As aulas são incríveis.',
      'Aprendi muito mais com esse formato.'
    ],
    checkoutUrl: 'https://kiwify.com.br/SEU-LINK-AQUI',
    color: 'var(--accent-color)',
  },

  {
    id: 'imersao',
    title: 'Imersão',
    shortTitle: 'Imersão',
    description:
      'TODO : Descrição',
    audience: [
      'TODO : Público-alvo',
    ],
    includes: [
      'TODO : O que está incluído'
    ],
    testimonials: [
      'TODO : Depoimentos'
    ],
    checkoutUrl: 'https://pay.kiwify.com.br/B2UEMRk',
    color: 'var(--primary-color)',
  }
];
