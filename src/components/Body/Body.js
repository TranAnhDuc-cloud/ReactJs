import React, { useState ,useEffect } from 'react';
import Radium, {StyleRoot} from 'radium';
import Siderbar from '../Siderbar/Siderbar';
import Login from '../FormLogin/Login';
import './Body.css';


function Body (props) {

  const [username, setUsername ] =useState([]); 
  const [password, setPassword] = useState([]);

  const [conut , setCount] = useState(0);

  const styles = {
    '@media (min-width:500)' :{
       width:'450',
    }, 
  }

  const [showPerson, setShowPerson] = useState(true); 

  const [person , setPerson] =  useState([
      {name: 'John', age: 5},
      {name: 'Doe', age:10},
      {name: 'HaHa' , age:12}
  ]);
  
  const deletePerson = (personIndex) =>{
    let newPerson = [...person];                                                                                                                                                                  
    newPerson.splice(personIndex,1);
    setPerson(newPerson);
  }

  const togglePerson = () => {
      setShowPerson(!showPerson);
  }

  const handleChangeName =(event,name,age) => {
    console.log(event.target.value);
    setPerson([
      {name:event.target.value,age:event.target.value},
      {name:event.target.value,age:event.target.value},
      {name:event.target.value,age:event.target.value},
    ]);
  }
  
  let personList =null;

  const styless = {
    backgroundColor: 'green', 
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '20px',
    ':hover':{
      backgroundColor: 'lightgreen',
      color: '#000',
    }
  };
  
  let classes = [];
  // classes = ['red','bold'].join(' ');
  if(person.length<=2) classes.push('bold');
  if(person.length<=1) classes.push('red');
  if(showPerson === true){
    personList = (<div>
      {person.map((item,index) => {
          return (
            <Body key={index}
              name= {item.name} 
              age={item.age}
              click={() => deletePerson(index)}
              changed={(event) => {handleChangeName(event,item.name,item.age)}}
              >
            </Body>
          ) 
        })}
      </div>
    );
    styless.backgroundColor = 'red';
    styless[':hover']={
      backgroundColor:'lightblue',
      color:'#fff',
    };
  }
    //Giống componentDidMount và componentDidUpdate:
    // useEffect(()=>{
    //       // Cập nhật tiêu đề trang web sử dụng API trình duyệt
    //     document.title = `Yout Clicked${count}times`;
    // });
   const sayHidden = () =>{
     alert('HI');
   }
   
    return(
        <>
        {/* <div className="content" style={styles}>
            <div><p>Click Me Để Set Time Run : Now {count} Time</p></div>
            <button onClick={() => setCount(count+1)}>Click Me</button>

            <div><p>Name :  {props.name}  Age : {props.age}</p></div>
            <label>Nhap Ten</label>
            <input className="" type="text" value={props.name} onChange={props.changed}></input>
            <label>Nhap Tuoi</label>
            <input className="" type="text" value={props.age} onChange={props.changed}></input>
            <div className="useEffect">
                <p>You Click {count} times</p>
            </div>
            <button onClick={props.click} >Delete Item</button>
        </div>
        <p className={classes.join(' ')}>Classes Dynamic</p>
      <button style={styles} onClick={() =>togglePerson()}>TogglePerson</button>
        {personList}
        <h1>Đanh Sách cần label</h1> */}
        <main>
          <Siderbar></Siderbar>
          <div>Login Form </div>
          <Login username={username} password={password} hi={sayHidden}></Login>
        </main>
        </>
    );  
}
function Friends(props){
    const [isOnline, setIsOnline] = useState(null);
    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }
    const [chatAPI] = useState(null);
    useEffect(() => {
        chatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            chatAPI.unsubscribeFromFriendStatus(props.friend.id,handleStatusChange);
        };
    });
    if(isOnline === null){
        return "Dang Loading ... ";
    }
    return isOnline ? 'Online' :'Offline';
}

export default Radium(Body,Friends);
