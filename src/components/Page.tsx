import { Children, type ReactNode } from 'react'
import DocumentTitle from 'npm:react-document-title'

export default function Page({
  title,
  children,
}: {
  title: string
  children: ReactNode
}): JSX.Element {
  return (
    <DocumentTitle title={title}>
      {Children.count(children) > 1 ? <div>{children}</div> : children}
    </DocumentTitle>
  )
}
