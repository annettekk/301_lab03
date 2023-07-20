
import "./Header.css";


export default function Header({handleBeastData}) {

    
    return (
    <header>
      <h1>Beast World</h1>


<form>
<label className='form' htmlFor="hNum"> Choose number of horns </label>

<select name="hNum" id="hNum" onChange={handleBeastData}>
<option value=''>All</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="100">100</option>

</select>

</form>


  </header>
  );
}
