const Total = ({total}) => {
    const tax = .15
    return ( 
        <footer className='container container-fluid no-gutters'>
            <p>Total price: <span>{total} $</span></p>
            <p>Tax: <span>15 %</span></p>
            <p>Total Ιnc Tax: <span>{Number(total)+Number(total*tax)} $</span></p>
        </footer>
     );
}
 
export default Total;