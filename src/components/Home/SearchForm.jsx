
// Styles
import "../../styles/Home/SearchForm.css"

const SearchForm = ({ handleChange, handleSearchCity }) => {

    return (
      <form action="" onSubmit={e => handleSearchCity(e)}>
            <input 
            type="text" 
            placeholder="Enter city name here" 
            onChange={({target}) => handleChange(target)}/> 
            <input type="submit" value="S E A R C H" />         
      </form>
    );
  };

export default SearchForm;

