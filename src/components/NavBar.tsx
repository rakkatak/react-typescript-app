interface Props {
  cartItemCount: number;
}

const NavBar = ({ cartItemCount }: Props) => {
  return <div>{cartItemCount}</div>;
};

export default NavBar;
