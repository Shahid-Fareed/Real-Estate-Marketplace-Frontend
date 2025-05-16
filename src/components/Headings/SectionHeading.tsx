import React from 'react'

type headingType = {
  f: string
}

const SectionHeading = ({f}:headingType) => {
  return (
    <h2 className="color-9">{f}</h2>
  )
}

export default SectionHeading