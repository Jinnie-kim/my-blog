import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/home">HOME</Link>
        </li>
        <li>
          <Link href="/blog">BLOG</Link>
        </li>
        <li>
          <Link href="/project">PROJECTS</Link>
        </li>
        <li>
          <Link href="/resume">RESUME</Link>
        </li>
      </ul>
    </nav>
  );
}
