import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"hero","items":[{"socialContent":[{"type":"paragraph","text":"Ex incididunt id magna Lorem.","spans":[]}],"socialLink":{"link_type":"Web","url":"http://twitter.com"}},{"socialContent":[{"type":"paragraph","text":"Commodo Lorem aliqua adipisicing sint consectetur aliqua exercitation incididunt ad commodo. Elit cillum exercitation non minim. Elit quis consectetur nostrud.","spans":[]}],"socialLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"socialContent":[{"type":"paragraph","text":"Cillum laboris laboris in aliqua velit mollit excepteur consectetur ex sit ad. Velit qui nisi pariatur ad enim.","spans":[]}],"socialLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"content":[{"type":"paragraph","text":"Amet ad duis cupidatat ea sunt magna veniam excepteur eiusmod. Officia consectetur incididunt sunt amet pariatur duis.","spans":[]}],"uid":"extend user-centric portals","buttonContent":[{"type":"paragraph","text":"Amet excepteur irure incididunt.","spans":[]}],"buttonAction":"evolve magnetic web services","buttonStyle":"morph transparent relationships"},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Test = () => <MyComponent slice={{"variation":"test","name":"test","slice_type":"hero","items":[],"primary":{"content":[{"type":"paragraph","text":"Qui aliqua excepteur qui. Laboris dolor eiusmod irure nulla enim tempor aute dolor in nulla ut pariatur. Excepteur tempor minim exercitation irure ut officia voluptate.","spans":[]}]},"id":"_Test"}} />
_Test.storyName = 'test'
