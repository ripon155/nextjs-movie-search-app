import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className=" bg-slate-600 py-4 flex items-center justify-center space-x-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
