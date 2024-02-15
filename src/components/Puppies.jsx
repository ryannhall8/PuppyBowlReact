import { Link, useParams, useLocation } from 'react-router-dom'

function Puppies({puppies}){
    const params = useParams();
    let filtered = puppies;
    if(params.term){
        filtered = filtered.filter(puppy => puppy.name.toLowerCase().indexOf(params.term) !== -1);
    }


    return(
      <div>
        <p>Our Puppies!</p>
        <ul>
        {
            filtered.map((puppy)=> {
              return (
                <li key= { puppy.id }>
                <h2> { puppy.name } </h2> 
                <Link to ={`/puppies/${puppy.id}`}>
                <h3>Details</h3>
                </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  export default Puppies;