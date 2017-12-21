import React, { Children } from 'react'
import DocumentTitle from 'react-document-title'

export default ({ title, children }) => (
  <DocumentTitle title={title}>
    {Children.count(children) > 1 ? <div>{children}</div> : children}
  </DocumentTitle>
)
