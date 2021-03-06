import Head from 'next/head';
import { NextPageContext } from 'next';
import React from 'react';

const user = ({ post }: { post: string }) => {
  return (
    <div className="">
      <Head>
        <title>{post}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{post}</main>
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  return {
    props: {
      post: context.query.post.toString(),
    },
  };
};

export default user;
