export default function Search({onClickHandle}) {

  return (
    <div className="search" name="searchForm">
      <form onSubmit={onClickHandle}>
        <input type="text" placeholder="Enter city name" name="city" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
