
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
        
const Nav = () => {
    return(
        <>
            <header>
                <div class="inner">
                    <h1 class="logo"><a href="index.html">Pet clinic</a></h1>
                    <div class="fright">
                    <div class="header-meta">
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
                        <li><a href="about">about</a></li>
                        <li> <a href="services">services</a></li>
                        <li><a href="productos">productos</a></li>
                        <li><a href="login">iniciar sesión</a></li>
                        <li><a href="registro">registrarse</a></li>
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