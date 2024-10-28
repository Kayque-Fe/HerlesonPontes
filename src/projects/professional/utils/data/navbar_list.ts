// Data for the Navbar component
export type NavbarData = {
  id: number;
  title: string;
  url: string;
};

// Navbar data
export const NAVBAR_DATA: Array<NavbarData> = [
  {
    id: 1,
    title: 'Início',
    url: '#inicio'
  }, {
    id: 2,
    title: 'O profissional',
    url: '#profissional'
  },
  {
    id: 3,
    title: 'Competências',
    url: '#competencias'
  },
  {
    id: 4,
    title: 'Qualificações',
    url: '#qualificacoes'
  }, {
    id: 5,
    title: 'Palestras e Cursos',
    url: '#palestras-e-cursos'
  },
  {
    id: 6,
    title: 'Galeria',
    url: '#galeria'
  },
  {
    id: 7,
    title: 'Contato',
    url: '#contato'
  }
];

