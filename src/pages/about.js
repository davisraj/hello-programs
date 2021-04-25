import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"


export default function AboutPage({ data }) {
    return (
        <Layout>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
            </Helmet>
            <HeroHeader />

        </Layout>
    )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`














