const NavDropdownCard = ({ data }) => {
  const { Image, title, desc } = data;
  return (
    <div className="">
      <img className="min-w-[200px]" src={Image} alt="" />
      <h2 className="font-semibold text-2xl py-4">{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default NavDropdownCard;
