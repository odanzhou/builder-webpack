// const { fn } = require('./a')
const React = require('react')
const logo = require('../../images/logo.png')
require('./search.less')

const { useState, useCallback } = React

// fn()
const Search = () => {
  // const count = 0
  const [count, setCount] = useState(0)
  // const [list, setList] = useState([])
  // const [TextComp, setTextComp] = useState()
  // const loadComponent = useCallback(() => {
  //   import('./text').then((res) => {
  //     const { default: Text } = res
  //     setList([Text, <Text />, res])
  //     // setTextComp 是可以传递个函数进去的，所以导致TextComp的值是个实例
  //     setTextComp(Text)
  //   })
  // }, [])
  const onClick = () => {
    setCount(count + 1);
    loadComponent();
  }
  // console.log('TextComp', TextComp)
  return (<div className="search-text">
    <div>Search Text</div>
    <img src={logo} />
    <div onClick={onClick}>count: {count}</div>
    <div>
      {/* { TextComp?.[0] } */}
      {/* {!!TextComp && <TextComp /> } */}
    </div>
  </div>)
}

const Index = () => <Search />

module.exports = <Index />

// export default <Search />