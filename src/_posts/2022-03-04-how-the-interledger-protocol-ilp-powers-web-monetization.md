---
name: How the Interledger Protocol (ILP) Powers Web Monetization
date: 2022-03-04 00:00:00
featured_image: /uploads/blog-ilp-wp.png
write_up_html: >-
  <p>The <a href="https://webmonetization.org/">Web Monetization
  API</a> is a nascent JavaScript browser API that allows the creation of
  a payment stream from the user agent to the website. In simpler terms, it will
  enable a website to get paid from the browser.</p><p>The
  motivation behind the creation of the API is simple. The ability to transfer
  money has been a long-standing omission from the web platform. As a result,
  the web suffers from a flood of advertising and corrupt business models. Web
  Monetization provides an open, native, efficient, and automatic way to
  compensate creators, pay for API calls, and support crucial web
  infrastructure. &nbsp;</p><p>You might wonder why Web Monetization
  hasn't happened sooner. That's a very good question. It's because, until
  recently, there hasn't been an open, neutral protocol for transferring money.
  But today, the <a
  href="https://interledger.org/rfcs/0027-interledger-protocol-4/">Interledger
  Protocol</a> (ILP) enables a simple, ledger-agnostic, and
  currency-agnostic method to transfer small quantities of money. ILP opens up
  the possibility for streaming money, making Web Monetization possible for the
  first time.</p><p>In 2022, many places will store money. We
  usually call them "ledgers", as they are a collection of accounts in which
  account transactions get recorded. By that definition, a ledger can be Paypal.
  Or Venmo. Or banks. Even Starbucks is a ledger. You have an account; the
  account stores money for you, and it records all your
  transactions.</p><p>The problems appear when you want to transfer
  some of that value stored in a ledger. There isn't interoperability between
  all of those ledgers.</p><p>The <a
  href="https://github.com/interledger/rfcs/blob/master/0001-interledger-architecture/0001-interledger-architecture.md#interledger-protocol-suite">Interledger
  Protocol</a> (ILP) was designed to solve precisely these types of
  problems. It's an open, neutral protocol for transferring money. Very, very
  small amounts of money at a time, just like the internet, or the <a
  href="https://en.wikipedia.org/wiki/Internet_protocol_suite">TCP/IP
  protocol</a> to be exact. TCP/IP is the set of communications protocols
  used to describe a network of interconnected computers, that can transport and
  route small packets of data between them. The biggest public network that
  implements the protocol is colloquially known as "The Internet". In the same
  way, ILP is used to describe a network of interconnected ledgers that can
  transport and route packets of value between them. The biggest public network
  that implements the protocol is called Interledger.</p><p>ILP
  enables the Web Monetization standard to add payments to the Web without being
  tied to a single currency or payment provider, or send payments to other
  ledgers, even if they are multiple hops away.</p><p><a
  href="https://twitter.com/justmoon">Stefan Thomas</a> and <a
  href="https://twitter.com/_emschwartz">Evan Schwartz</a> co-created
  Interledger in 2015. In October of that year, the whitepaper <a
  href="https://interledger.org/uploads/interledger.pdf">"A Protocol for
  Interledger Payments"</a> and the first implementation were released.
  Since then, the protocol stack has evolved and is currently at version 4.
  ILPv4 simplifies previous versions of the protocol and is optimized for
  routing large volumes of low-value packets, also known as "penny
  switching".</p><p>One of the side effects of the initial design of
  ILP was the ability to exchange any value amount, including extremely small
  values. Something the current banking rails can't do. It is the reason why Web
  Monetization is possible today.</p><p>If you'd like to be part of
  the future of Interledger or Web Monetization, please get involved. You can
  join the <a
  href="https://forum.interledger.org/tag/community-call-agenda">monthly
  Interledger Community calls</a> where we showcase some of the exciting
  projects using the Interledger network. You can also join the <a
  href="https://community.webmonetization.org/">Web Monetization
  Community</a> where we gather case studies from people currently
  experimenting with the new standard.</p>
categories:
  - Blog
---
