import React, { useState, useCallback } from 'react'
import ReactDom from 'react-dom'
import { test } from '../../utils'
import { a, b } from './tree-shaking'
import logo from '../../images/logo.png'
import './search.less'

test('search')
if(false) {
  b()
}
a()

const Search = () => {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])
  const [TextComp, setTextComp] = useState()
  const loadComponent = useCallback(() => {
    import('./text').then((res) => {
      const { default: Text } = res
      setList([Text, <Text />, res])
      // setTextComp 是可以传递个函数进去的，所以导致TextComp的值是个实例
      setTextComp(Text)
    })
  }, [])
  const onClick = useCallback(() => {
    setCount(count + 1);
    loadComponent();
  }, [])
  console.log('TextComp', TextComp)
  return <div className="search-text">
    <div>Search Text</div>
    <img src={logo} />
    <div onClick={onClick}>count: {count}</div>
    <div>
      {/* { TextComp?.[0] } */}
      {/* {!!TextComp && <TextComp /> } */}
    </div>
  </div>
}

ReactDom.render(<Search/>, document.getElementById('root'))