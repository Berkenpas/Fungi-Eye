import React, {Component, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserContext} from '../App'
import M from 'materialize-css'


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});



const NavBar = ()=>{
    const navigate = useNavigate()
    const {state, dispatch} = useContext(UserContext)
    
    const renderList = () =>{
        if(state){
            
            return [
                <div>
                    {/*<ul id='dropdown1' class='dropdown-content'>*/}
                        <li><Link to={state?"/":"/login"}>Vote</Link></li>
                        <li><Link to="/voteresults">Vote Results</Link></li>
                        <li><Link to="/uploadimage">Upload Photo</Link></li>
                        <li><Link to="/myuploads">My Uploads</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li class="divider"></li>
                        <li><a onClick={()=>{
                                localStorage.clear()
                                dispatch({type: "CLEAR"})
                                navigate('/login')
                        }}>Logout</a>
                        </li>
                    {/*</ul>*/}
                    
                    
                    {/*<li><a class="dropdown-trigger" data-target="dropdown1">Menu<i class="material-icons right">arrow_drop_down</i></a></li>*/}
                    

                </div>
                
            ]
        }
        else{
            return [
            <li><Link to="/login">Login</Link></li>,
            <li><Link to="/signup">Sign Up</Link></li>
            
            ]
        }
    }

    return(
        <nav>
        <div className="nav-wrapper green" >
            <Link to= {state?"/":"/login"} className="brand-logo left">FungEye</Link>
            <ul id="nav-mobile" className="right">
                {renderList()}
            </ul>
        </div>
        </nav>
    )
}

export default NavBar;