import React from 'react'
import scrollama from 'scrollama'
import compact from 'lodash.compact'

if (typeof window !== 'undefined') {
  require('intersection-observer')
}

const containerName = 'scroll'
const stepName = 'step'

export default class Scrollama extends React.Component {

  constructor(props) {
    super(props)

    this.Context = React.createContext({})
    const { Consumer } = this.Context

    this.totalIndex = -1
    const self = this
    
    this.Step = class Step extends React.Component {
      constructor(props) {
        super(props)
        self.totalIndex++  // get a new index for this step
        this.state = { index: self.totalIndex }
      }
  
      render() {
        const { children, ...props } = this.props
  
        return (
          <Consumer>
            {(value) => (
              <div className={stepName} {...props}>{children({
                direction: value.direction,
                index: this.state.index,
                active: value.index === this.state.index
              })}</div>
            )}
          </Consumer>
        )
      }
    }

    this.state = {
      direction: 'down',
      active: false, 
      index: false,
    }
  }

  componentDidMount() {
    const scroller = scrollama()

    scroller.setup({
      step: `.${stepName}`,
      container: `.${containerName}`,
      ...(this.props.settings || {})
    })
    .onStepEnter(({ direction, index }) => {
      this.setState({ direction, lastActiveIndex: index, index, active: true })
    })
    .onStepExit(({ direction, index }) => {
      if (index === 0 && direction === 'up') {
        this.setState({ direction, index: false, active: false })
      }
      else if (index === this.totalIndex && direction === 'down') {
        this.setState({ direction, index: false, active: false })
      }
      else {
        this.setState({ direction, index: false })
      }
    })
  }

  render() {
    const { children, settings, ...props } = this.props
    const { Provider } = this.Context

    return (
      <Provider value={this.state}>
        <div {...props} className={containerName}>
          {children({ Step: this.Step, ...this.state })}
        </div>
      </Provider>
    )
  }
}