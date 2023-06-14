import Link from "next/link";

function Menueitem({ title, address, Icon }) {
  return (
    <div className="">
      <Link
        href={address}
        className=" mx-4 lg:mx-6  hover:text-amber-600 text-2xl"
      >
        <Icon className=" text-2xl sm:hidden" />
        <p className=" hidden my-2 text-sm sm:inline">{title}</p>
      </Link>
    </div>
  );
}

export default Menueitem;
