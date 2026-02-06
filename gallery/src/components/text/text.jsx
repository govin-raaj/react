import React from 'react'

const Text = ({ type = 'p', className = '', text = '' }) => {
  const Tag = type

  return (
    <Tag className={className}>
      {text}
    </Tag>
  )
}

export default Text
