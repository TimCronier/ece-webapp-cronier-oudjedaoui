function Menu () {
    return (
        <div class="container">
            <input type="checkbox" id="toggle" checked/>
            <label class="button" for="toggle"></label>
            <nav class="nav">
                <ul>
                    <a href="#" target="_blank">HOME</a>
                    <a href="#" target="_blank">ABOUT</a>
                    <a href="#" target="_blank">CONTACT</a>
                    <a href="#" target="_blank">ARTICLES</a>
                </ul>
            </nav>
        </div>
    )
}

export default Menu