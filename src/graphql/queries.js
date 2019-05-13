// import gql from 'graphql-tag';

export const ME_QUERY = `
{
  me {
    _id
    name,
    email
    picture
  }
}
`;

export const SEARCH_CITY_QUERY = `
query SEARCH_CITY($query: String! $limit: Int){
  searchCity(query: $query limit: $limit) {
    _id
    name
    flightable
    name_translations{
      ru
      en
    }
    code
    country {
      name
    }
    airports {
      _id
      name
      flightable
      name_translations{
        ru
        en
      }
      code
      city_code
      city {
        name
        name_translations{
          ru
          en
        }
      }
    }
  }
}
`;
