import { useParams } from "react-router-dom";

const Puppy = ({ puppies })=> {
    const params = useParams();
    const id = params.id*1;
    const puppy = puppies.find(puppy => puppy.id === id);
    if(!puppy){
      return null;
    }
    return (
      <div>
        <h2>{ puppy.name }</h2>
        <h3> breed: { puppy.breed } </h3>
        <img src= { puppy.imageUrl } />
      </div>
    );
  }

  export default Puppy;