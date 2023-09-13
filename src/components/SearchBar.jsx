//icon
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = ({searchItems}) => {
  const [value, setValue] = useState("");
  const onSubmit = (e)=>{
    e.preventDefault()
    searchItems(value)
  }

  return (
    <form className="search flex flex-fill items-center" onSubmit={onSubmit}>
      <div className="input-group">
        <input
          className="form-control rounded-end pe-5 border-success"
          type="text"
          placeholder="جستجوی فست فود..."
          value={value}
          onChange={e=>setValue(e.target.value)}
        />
        <BsSearch className="absolute top-1/2 translate-y-[-50%] text-muted mr-3" />
      </div>
    </form>
  );
};

export default SearchBar;
