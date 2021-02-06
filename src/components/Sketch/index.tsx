import React from 'react'

interface IProps {
  children: React.ReactNode
}

const Sketch = ({ children }: IProps): JSX.Element => {
  return (
    <div>
      This is a sketch wrapper.
      {children}
    </div>
  )
}

export default Sketch
