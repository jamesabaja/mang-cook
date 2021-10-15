import { useStaticQuery, graphql } from "gatsby"

const ALL_RECIPES_QUERY = graphql`
  {
    sinigang_na_baboy: file(
      relativePath: { eq: "recipes/sinigang-na-baboy.png" }
    ) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tinolang_manok: file(relativePath: { eq: "recipes/tinolang-manok.jpeg" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    adobong_manok: file(relativePath: { eq: "recipes/adobong-manok.jpeg" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    adobong_baboy: file(relativePath: { eq: "recipes/adobong-baboy.jpeg" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ginisang_monggo: file(relativePath: { eq: "recipes/ginisang-monggo.png" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ginisang_sayote: file(
      relativePath: { eq: "recipes/ginisang-sayote.jpeg" }
    ) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ginisang_upo_sa_sardinas: file(
      relativePath: { eq: "recipes/ginisang-upo-sa-sardinas.jpeg" }
    ) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    inasal_na_manok: file(
      relativePath: { eq: "recipes/inasal-na-manok.jpeg" }
    ) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sinigang_na_bangus: file(
      relativePath: { eq: "recipes/sinigang-na-bangus.jpeg" }
    ) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    adobong_pusit: file(relativePath: { eq: "recipes/adobong-pusit.jpeg" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hotsilog: file(relativePath: { eq: "recipes/hotsilog.jpeg" }){
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const useRecipeImages = () => {
  const data = useStaticQuery(ALL_RECIPES_QUERY)

  return data
}

export default useRecipeImages
