import {gql} from "@apollo/client";

export const SEARCH = gql`
    query Search($search: String!) {
          search(search: $search) {
            totalCount
            nodes {
              uuid
            }
          }
        }
    `

export const INTERCOMS_COUNT = gql`
    query Intercoms {
        intercoms {
            totalCount
        }
    }
`