import React from 'react';
import { Helmet } from "react-helmet";

type helemetType = {
    title: string,
    body?:string,
}

const MyHelmet = (props: helemetType) => {
  return (
    <Helmet>
    <title>{props.title}</title>
    <body className={props.body} />
  </Helmet>
  )
}

export default MyHelmet