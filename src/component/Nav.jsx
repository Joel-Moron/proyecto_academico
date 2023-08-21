
        
const Nav = ({user, setUser}) => {

    const cerrar = () =>{
        setUser(null)
    } 


    return(
        <>
            <header>
                <div class="inner">
                    
                    <div class="fright">
                    <div class="header-meta flex justify-content-around">
                    <h1><a href="index.html">Bonitos y Gorditos</a></h1>
                        <form action="#" id="search-form" method="post">
                        <input type="text" onBlur="if(this.value==''){this.value='search'}" onFocus="if(this.value=='search'){this.value=''}" value="search" name="search"/>
                        <a class="search-form-submit"></a>
                        </form>
                        <div class="col-elem"> Have a problem with your pet?<br/>
                        Call us now: <span class="phone"> 1-800-123-1234 </span> </div>
                    </div>
                    <nav className='flex w-auto'>
                        <ul class="sf-menu flex">
                        <li><a href="/">main</a></li>
                        <li><a href="/about">about</a></li>
                        <li> <a href="/services">services</a></li>
                        <li><a href="/productos">productos</a></li>
                        {user !== null? 
                        <><li onClick={()=>cerrar()}><a href="/">cerrar sesion</a></li>
                        <li><a href="/">citas</a></li>
                        </> 
                        : 
                        <><li><a href="/inicio-sesion">iniciar sesión</a></li>
                        <li><a href="/registro">registrarse</a></li></> }
                        
                        </ul>
                    </nav>
                    </div>
                    <div class="clear"></div>
                </div>
            </header>
        </>
    )
}

export default Nav;