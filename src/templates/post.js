import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../layout';
import UserInfo from '../components/UserInfo';
import PostTags from '../components/PostTags';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default class PostTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    let thumbnail;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed;
    }

    //const date = formatDate(post.date);
    const date = format(new Date(post.date), "dd 'de' MMMM' de ' yyyy'", { locale: pt });
    const twitterShare = `http://twitter.com/share?text=${encodeURIComponent(
      post.title
    )}&url=${config.siteUrl}/${post.slug}/&via=mjlbnu`;

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header
            className={`single-header ${!thumbnail ? 'no-thumbnail' : ''}`}
          >
            {thumbnail && <Img fixed={post.thumbnail.childImageSharp.fixed} />}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>/
                <a
                  className="twitter-link"
                  href={twitterShare}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Compartilhe
                </a>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>

          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
        </article>
        <div className="container no-comments">
        
        <h3>Gostou? Inscreva-se para receber novidades</h3>
        <form name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="newsletter" />
          <p>
            <label>Seu Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Quero receber novidades</button>
          </p>
        </form>

          <h3>Deixe um comentário</h3>
          <p>
            Os comentários publicados aqui entrarão em uma fila de moderação, ficarão visíveis somente após a aprovação.
          </p>
          <form name="contato" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contato" />
            <p>
              <label>Seu nome: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Seu Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Mensagem: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Enviar</button>
            </p>
          </form>
        </div>
        <UserInfo config={config} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`;
