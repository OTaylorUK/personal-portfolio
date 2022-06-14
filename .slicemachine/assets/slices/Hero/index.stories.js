import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"hero","items":[],"primary":{"content":[{"type":"paragraph","text":"Veniam proident ad laboris magna veniam cupidatat ut commodo irure ex cillum fugiat anim qui. Laboris quis anim irure fugiat excepteur ea culpa officia nulla voluptate culpa. Dolore veniam esse veniam labore ut sit aliqua nulla incididunt deserunt irure adipisicing magna irure.","spans":[]}],"uid":"integrate world-class e-business"},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Test = () => <MyComponent slice={{"variation":"test","name":"test","slice_type":"hero","items":[],"primary":{"content":[{"type":"paragraph","text":"Aute aliquip eu quis mollit est. Nostrud dolore labore elit deserunt fugiat ullamco ut occaecat. Adipisicing voluptate do id exercitation non incididunt mollit.","spans":[]}]},"id":"_Test"}} />
_Test.storyName = 'test'
