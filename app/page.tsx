import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description: "Ryan Romeo is an Electronics Engineering Master's Student.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>MSc-EE | PCB Design | Python Application Development | Ex-TCS</h2>
          </div>
        </header>
        <p>
          Welcome to my website. Please feel free to read more <Link href="/about">about me</Link>,
          or you can check out my <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, view my <Link href="/stats">statistics</Link>,
          and/or <Link href="/contact">contact</Link> me.
        </p>
      </article>
    </PageWrapper>
  );
}
