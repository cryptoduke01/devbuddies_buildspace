const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4">
            <div className="text-2xl text-white font-bold">dev-buddies</div>
            <div className="space-x-4">
                <a href="#" className="text-white hover:text-gray-300">Features</a>
                <a href="#" className="text-white hover:text-gray-300">Solutions</a>
                <a href="#" className="text-white hover:text-gray-300">Resources</a>
                <a href="#" className="text-white hover:text-gray-300">Pricing</a>
            </div>
            <div className="space-x-4">
                <button className="text-white px-4 py-2 rounded">Log--In</button>
                <button className="px-4 py-2 bg-white text-white rounded">Sign up</button>
            </div>
        </nav>
    )
}

export default Navbar