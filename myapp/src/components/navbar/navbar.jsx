import './navbar.css';

const Navbar=()=>{
    return(
        <nav className='navbar'>
            <main className='heading'>
                <h1>ONE SHOP STOP</h1>
            </main>
            <header className='ul'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Categories</li>
                <input className='searchBox' type="search" name="" id="" placeholder='Search items' />
                </ul>
            </header>
        </nav>
    )
}
export default Navbar;