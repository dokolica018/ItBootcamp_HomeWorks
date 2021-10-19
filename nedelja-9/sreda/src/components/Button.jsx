const Button = ({sign,inp,count,setInp,setCount,btn,setP,p}) => {
    
    return ( 
        <button style={{border: '1px solid black'}} className={`btn btn-${btn}`} onClick = {() => {            
            if (btn === 'danger') {
                setCount(0) 
                setInp('')
                setP([])
            } else {
                if(inp === ''){
                    setP([...p,sign,0])
                }else{
                    console.log(sign+inp);
                    setCount(eval(count+sign+inp))
                    setInp('')
                    setP([...p,sign,inp])
                }
            }
        }}>{sign}</button>
     );
}
 
export default Button;