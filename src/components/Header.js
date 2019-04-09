import Link from 'next/link'

const linkStyle = {
  margin: '0 15px'
}

const Header = () => (
  <div>
    <header>
      blame.hockey
    </header>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
