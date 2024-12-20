
import './login.scss';

function Login(){

    return(
    <>
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Welcome to BlahBlah</h1>
                <p>
                BlahBlah is 
                the ultimate social networking hub 
                that turns every conversation into 
                a vibrant experience. Whether 
                you're sharing your latest triumphs, 
                diving into deep discussions, or 
                simply catching up on the buzz, 
                Join us today, and 
                let's turn your chatter into a 
                symphony of connections!
                
                </p>
                
                <p>Don't have an account?</p>
                <button type="submit">Register</button>
            </div>
            <div className="right">
                <h2>Login</h2><br></br>
                <form>
                    
                    <br></br>
                    <input type="text" placeholder='Username'>
                    </input>
                    <br></br>
                    
                    <br></br><br></br>
                    <input type="password" placeholder='Password'>
                    </input><br></br><br></br><br></br><br></br><br></br>
                    <button type="submit">Login</button>
                    </form>
            </div>
        </div> 
    </div>
    </>
    )

}

export default Login; 