import { useCallback, useEffect, useRef, useState } from "react";
import Banner from "../components/Banner/Banner";
import ContactUs from "../components/ContactUs/ContactUs";
import ContainerImage from "../components/ContainerImage/ContainerImage";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import MeetProfessional from "../components/MeetProfessional/MeetProfessional";
import Navbar from "../components/Navbar/Navbar";
import Skill from "../components/Skill/Skill";
import Testimonials from "../components/Testimonials/Testimonials";
import "./Professional.scss";

export default function Professional() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [changeUrl, setChangeUrl] = useState("");
  const scrollContainerRef: any = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainerRef.current?.scrollTop;
      if (scrollTop && scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const refCallback = useCallback((element: any) => {
    if (element) {
      const id = element.getAttribute("id");
      if (id) {
        window.history.pushState(null, "", `#${id}`);
        setChangeUrl(id);
      }
    }
  }, []);

  useEffect(() => {
    const targetSections = document.querySelectorAll(".item-list");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            refCallback(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    targetSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [refCallback]);

  return (
    <main
      className="homepage"
      id="homepage"
      ref={scrollContainerRef}
    >
      <Navbar
        isScrolled={isScrolled}
        onChangeUrl={changeUrl}
      />
      <Header />
      <Introduction />
      <Banner>
        <p>
          Estudante IFCE? <b>Acesse agora o material de apoio!</b>
        </p>
        <button className="btn-primary">Clique aqui</button>
      </Banner>
      <MeetProfessional />
      <Skill />
      <Banner>
        <p>
          Conecte-se! <b>Faça parte da revolução digital!</b>
        </p>
        <button className="btn-primary">Agende sua palestra/curso</button>
      </Banner>

      <ContainerImage
        image="/src/assets/images/professional.jpg"
        id="qualificacoes"
      >
        <h5>FORMAÇÃO E QUALIFICAÇÃO PROFISSIONAL</h5>
        <h2>Constante Evolução</h2>
        <p className="mb-2">
          Busca contínua pelo conhecimento através de formações acadêmicas, pesquisas científicas, cursos e
          certificações tecnológicas, além do reconhecimento profissional com títulos e prêmios. Confira algumas das
          qualificações de Herleson Pontes.
        </p>
        <div className="grid-2">
          <div>
            <h5 className="mb-1">FORMAÇÃO ACADÊMICA</h5>
            <ul>
              <li>
                <small>Doutorado em Informática Aplicada</small>
              </li>
              <li>
                <small>Mestrado em Gestão de Projetos</small>
              </li>
              <li>
                <small>Mestrado em Informática Aplicada</small>
              </li>
              <li>
                <small>Bacharel em Sistemas de Informação</small>
              </li>
              <li>
                <small>Pós-graduando em Docência para a Educação Profissional e Tecnológica</small>
              </li>
              <li>
                <small>Pós-graduando em Informática Aplicada à Educação</small>
              </li>
              <li>
                <small>Graduando em Educação Física</small>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-1">TÍTULOS E PRÊMIOS</h5>
            <ul>
              <li>
                <small>Microsoft Certified Trainer</small>
              </li>
              <li>
                <small>Microsoft MVP Windows ITPro: Expert</small>
              </li>
              <li>
                <small>Microsoft MVP SQL Server</small>
              </li>
              <li>
                <small>DeVry Brasil Academic Stars</small>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-1">CERTIFICAÇÕES TECNOLÓGICAS</h5>
            <ul>
              <li>
                <small>Microsoft Certified Professional</small>
              </li>
              <li>
                <small>ITIL v3 Foundation</small>
              </li>
              <li>
                <small>Cisco Certified Entry Network Technician</small>
              </li>
              <li>
                <small>Certified Pro Requirement Engineering</small>
              </li>
              <li>
                <small>Certified Tester Foundation Level</small>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-1">CURSOS DE FORMAÇÃO</h5>
            <ul>
              <li>
                <small>Achievement English Course FISK</small>
              </li>
              <li>
                <small>Adobe Photoshop Professional</small>
              </li>
              <li>
                <small>Heterogeneous Parallel Programming</small>
              </li>
              <li>
                <small>Simulações Físicas em Ambientes RV/RA</small>
              </li>
              <li>
                <small>Content Teaching in English</small>
              </li>
            </ul>
          </div>
        </div>
      </ContainerImage>
      <ContainerImage
        image_side="right"
        image="/src/assets/images/professional.jpg"
        id="palestras-e-cursos"
      >
        <h5>PALESTRAS e capacitações</h5>
        <h2>Construa o seu Sucesso</h2>
        <p className="mb-2">
          Palestras com temas da atualidade e tendências futuras em Tecnologia da Informação, além de formações
          específicas que capacitam profissionais e organizações para atenderem as necessidades e expectativas do
          mercado e da sociedade. Confira algumas das temáticas abordadas:
        </p>
        <div className="grid-1">
          <div>
            <h5 className="mb-1">Palestras</h5>
            <ul>
              <li>
                <small>Certificações Tecnológicas: O caminho para o sucesso!</small>
              </li>
              <li>
                <small>Análise de Dados e a Era da Informação</small>
              </li>
              <li>
                <small>Interfaces Naturais: Imersão e Interatividade</small>
              </li>
              <li>
                <small>Tecnologias Assistivas e Inclusão em Ambientes Acadêmicos</small>
              </li>
              <li>
                <small>Metodologias Ativas para Aprendizagem: Da Teoria para a Prática</small>
              </li>
              <li>
                <small>Aprendizagem Significativa e Informática Educativa</small>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-1">FORMAÇÕES PROFISSIONAIS</h5>
            <ul>
              <li>
                <small>Engenharia de Requisitos: Entendendo as Necessidades do Cliente</small>
              </li>
              <li>
                <small>Análise e Predição de Dados para Tomada de Decisões Estratégicas</small>
              </li>
              <li>
                <small>Planejamento, Implantação e Administração de Sistemas de Bancos de Dados</small>
              </li>
              <li>
                <small>Administração de Sistemas Operacionais Servidores e Estações de Trabalho</small>
              </li>
              <li>
                <small>Virtualização de Parques Tecnológicos</small>
              </li>
              <li>
                <small>Gestão de Projetos: Fundamentos, Riscos, Qualidade e Sustentabilidade</small>
              </li>
              <li>
                <small>Aplicativos Office: Do Básico ao Avançado</small>
              </li>
            </ul>
            <button className="btn-secondary mt-2">Agende agora</button>
          </div>
        </div>
      </ContainerImage>
      <Gallery />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
