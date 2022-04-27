export default {
  widgets: [
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
                  buildHookId: '626912cc3ae78a007db93ef1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rkmst4kh',
                  apiId: '1a206f7f-04bf-4985-80cd-c3a604200313'
                },
                {
                  buildHookId: '626912cc69b98f00b37148ad',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wqzv9o55',
                  apiId: '201140fe-4fab-4bd3-8668-1bf07f5920bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kasperbirch1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wqzv9o55.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
