export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d12925f522fdda9f3417b89',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-son22w4v',
                  apiId: '1fd7e1af-7717-4fa1-b80f-5d826bcb84e8'
                },
                {
                  buildHookId: '5d12925f48a48ddc7122824e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ybs4w35t',
                  apiId: 'dd86e3d3-8729-4e81-bca5-75ec67db1d2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cohnen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ybs4w35t.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
