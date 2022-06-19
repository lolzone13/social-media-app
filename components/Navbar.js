import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div>
                Navbar
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/feed"><a>Feed</a></Link>
        </nav>
    )
}

export default Navbar;