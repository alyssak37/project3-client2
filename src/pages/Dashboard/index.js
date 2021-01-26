
import FactCard from '../../components/FactCard/FactCard';


function Dashboard(props) {
    function handleClick() {
        window.location.reload()
    }
    
    return (
        <div className='dashboard'>
            <FactCard handleFavorite={props.handleFavorite} factData={props.factData}/>
        <button onClick={handleClick}>Next Fact🐾</button>
        
        </div>
    )
        
}

export default Dashboard;