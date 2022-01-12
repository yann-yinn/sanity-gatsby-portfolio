export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61def9ff913183658f15aef0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-eyw1e98i',
                  apiId: 'a79b6ed4-4b68-4cb7-9d74-484f73eed8bf'
                },
                {
                  buildHookId: '61def9ff2727ee54d4c21cd3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-veqh4jmb',
                  apiId: '10dee51c-1abc-4d3f-a43e-37ff2e80704e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yann-yinn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-veqh4jmb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
