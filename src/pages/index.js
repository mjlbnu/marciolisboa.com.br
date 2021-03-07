import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import ProjectListing from '../components/ProjectListing';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import projects from '../../data/projects';
import quotes from '../../data/quotes';
import linkedin from '../../content/thumbnails/linkedin.svg';
import github from '../../content/thumbnails/github.png';
import marcio from '../../content/images/marcio.png';

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    return (
      <Layout>
        <Helmet title={`${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="mee">
              <img src={marcio} className="me" alt="Marcio" />
            </div>
            <div className="elevator">
              <p>
                Bem-vindo ao meu jardim digital. Você encontrará por aqui artigos relacionados a desenvolvimento web, novas tecnologias, metodologias ágeis e carreira. 🤓
              </p>
              <div className="social-buttons">
                <a
                  className="linkedin-button"
                  href="https://www.linkedin.com/in/mjlbnu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} height="50" width="50" alt="Linkedin" />
                </a>
                <a
                  className="github-button"
                  href="https://github.com/mjlbnu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} height="50" width="50" alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Últimos Artigos
              <Link to="/blog/" className="view-all">
                Ver todos
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>Projetos Open Source</h2>
            <p>
              Compartilho aqui algumas das minhas "experiências" desenvolvidas durante processos de aprendizagem. Os aplicativos abaixo listados estão hospedados gratuitamente no
              <a href="https://www.heroku.com/" target="_blank">
                {' '}
                heroku
              </a>
              , é{' '}
              <a
                href="https://devcenter.heroku.com/articles/dynos#dyno-sleeping"
                target="_blank"
              >
                política da plataforma{' '}
              </a>{' '}
              mantê-los em estado de "dormência" após uma hora de inatividade.
              Isso causa um pequeno atraso na primeira solicitação, mas as
              solicitações subsequentes serão executadas normalmente.
            </p>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>{`Citações Inspiradoras`}</h2>
            <div className="quotations">
              {quotes.map(quote => (
                <blockquote className="quotation" key={quote.name}>
                  <p>{quote.quote}</p>
                  <cite>— {quote.name}</cite>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
