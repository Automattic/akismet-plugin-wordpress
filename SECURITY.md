# Security policy

Full details of the Automattic Security Policy can be found on [automattic.com/security](https://automattic.com/security/).

## Supported versions

Generally, *only the latest version of Akismet has continued support*. If a critical vulnerability is found in the current version of Akismet, we may opt to backport any patches to previous versions.

## Reporting a vulnerability

[Akismet](https://wordpress.org/plugins/akismet/) is an open-source plugin for WordPress. Our HackerOne program covers the plugin software.

**For responsible disclosure of security issues and to be eligible for our bug bounty program, please submit your report based on instructions found on [automattic.com/security](https://automattic.com/security/).**

The security contact for this project is <security@automattic.com>.

Please note that the **WordPress software is a separate entity** from Automattic. Please report vulnerabilities for WordPress through [the WordPress Foundation's HackerOne page](https://hackerone.com/wordpress).

## Guidelines

We're committed to working with security researchers to resolve the vulnerabilities they discover. You can help us by following these guidelines:

*   Follow [HackerOne's disclosure guidelines](https://www.hackerone.com/disclosure-guidelines).
*   Pen-testing Production:
    *   Please **set up a local environment** instead whenever possible. Most of our code is open source (see above).
    *   If that's not possible, **limit any data access/modification** to the bare minimum necessary to reproduce a PoC.
    *   **Don't automate form submissions!** That's very annoying for us, because it adds extra work for the volunteers who manage those systems, and reduces the signal/noise ratio in our communication channels.
    *   To be eligible for a bounty, please follow all of these guidelines.
*   Be Patient - Give us a reasonable time to correct the issue before you disclose the vulnerability.

We also expect you to comply with all applicable laws. You're responsible to pay any taxes associated with your bounties.
