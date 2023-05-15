export default function NavBar() {
  return (
    <nav>
      <p>LOGO</p>
      <form>
        <select name="search-options">
          <option value="Title">Title</option>
          <option value="Author">Author</option>
          <option value="Subject">Subject</option>
        </select>
        <input type="text" placeholder="Search..." />
        <button>search</button>
      </form>
    </nav>
  );
}
