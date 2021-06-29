
export default function Login(props){
    return(
        <form>

            <br/>
            <div>
                <label>Username{props.username}</label>
                <input type ="text"></input>
            </div>
            <br/>
            <div>
                <label>Password{props.password}</label>
                <input type ="password"></input>
            </div>
            <br/>
            <div>
                <input onClick={() =>sayHidden()} type ="submit" value = "Login"/>
                {/*  */}
            </div>
            
        </form>
    )
}